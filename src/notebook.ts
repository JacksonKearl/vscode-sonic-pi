import * as vscode from 'vscode'
import { onRunEnded, onRunStarted, runScript, stopAllScripts } from './source-runner/extension'

const header = `> Play this document as a notebook with the [Sonic Pi Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=jakearl.vscode-sonic-pi\n`

export const serializer: vscode.NotebookSerializer = {
	serializeNotebook: (book: vscode.NotebookData) =>
		Buffer.from(
			[
				header,
				...book.cells.map((cell) =>
					cell.kind === vscode.NotebookCellKind.Markup
						? `${cell.value}`
						: `\`\`\`\n${cell.value}\n\`\`\``,
				),
			].join('\n'),
		),
	deserializeNotebook: (content) => {
		const string = Buffer.from(content).toString().replace(header, '')

		if (string.length === 0) {
			return new vscode.NotebookData([
				new vscode.NotebookCellData(
					vscode.NotebookCellKind.Code,
					`# Pentatonic Bleeps (from https://sonic-pi.net/)
with_fx :reverb, mix: 0.2 do
	live_loop :play do
		play scale(:Eb2, :major_pentatonic, num_octaves: 3).choose, release: 0.1, amp: rand
		sleep 0.1
	end
end`,
					'sonic-pi',
				),
			])
		}

		let cells: vscode.NotebookCellData[] = []

		let bufferKind: vscode.NotebookCellKind = vscode.NotebookCellKind.Markup
		let bufferContents: string[] = []
		string.split('\n').forEach((line) => {
			if (
				line.startsWith('#') &&
				bufferKind !== vscode.NotebookCellKind.Code &&
				bufferContents.length &&
				bufferContents.join('\n').trim().length
			) {
				cells.push(new vscode.NotebookCellData(bufferKind, bufferContents.join('\n'), 'markdown'))
				bufferKind = vscode.NotebookCellKind.Markup
				bufferContents = []
				bufferContents.push(line)
			} else if (line === '```' && bufferKind !== vscode.NotebookCellKind.Code) {
				cells.push(new vscode.NotebookCellData(bufferKind, bufferContents.join('\n'), 'markdown'))
				bufferKind = vscode.NotebookCellKind.Code
				bufferContents = []
			} else if (line === '```') {
				cells.push(new vscode.NotebookCellData(bufferKind, bufferContents.join('\n'), 'sonic-pi'))
				bufferKind = vscode.NotebookCellKind.Markup
				bufferContents = []
			} else {
				bufferContents.push(line)
			}
		})

		if (bufferContents.length) {
			cells.push(
				new vscode.NotebookCellData(
					bufferKind,
					bufferContents.join('\n'),
					bufferKind === vscode.NotebookCellKind.Markup ? 'markdown' : 'sonic-pi',
				),
			)
		}

		return new vscode.NotebookData(cells)
	},
}

type CellWorkingCopy = {
	content: string
	execution: vscode.NotebookCellExecution
	cell: vscode.NotebookCell
	hasEnded: boolean
}

const endExecution = (cell: CellWorkingCopy, reason: string) => {
	if (!cell.hasEnded) {
		cell.execution.end(true)
		console.log('ending cell', cell, ' because ', reason)
	}
	cell.hasEnded = true
}

type NotebookWorkingCopy = {
	executionHistory: Map<string, CellWorkingCopy>
	notebook: vscode.NotebookDocument
}

const getKey = (thing: vscode.NotebookCell | vscode.NotebookDocument) =>
	((thing as vscode.NotebookDocument).uri ?? (thing as vscode.NotebookCell).document.uri).toString()

export class NotebookController {
	private workingCopies = new Map<string, NotebookWorkingCopy>()
	private controller: vscode.NotebookController

	private pendingCancellations = new Set<Promise<void>>()

	private pendingExecutions: (() => void)[] = []
	private sentExecutions: Map<number, () => void> = new Map()

	private disposables = new Set<{ dispose: () => void }>()

	constructor(id: string, notebookType: string, label: string) {
		this.controller = vscode.notebooks.createNotebookController(
			id,
			notebookType,
			label,
			this.handler.bind(this),
		)

		this.disposables.add(this.controller)

		this.disposables.add(
			onRunStarted((num) => {
				if (this.pendingExecutions.length) {
					const started = this.pendingExecutions.shift()!
					this.sentExecutions.set(num, started)
				}
			}),
		)

		this.disposables.add(
			onRunEnded((num) => {
				this.sentExecutions.get(num)?.()
			}),
		)

		this.controller.supportedLanguages = ['sonic-pi']
	}

	dispose() {
		for (const disposable of this.disposables.values()) {
			disposable.dispose()
		}
		this.disposables.clear()
	}

	stopNotebook(cellUri: string) {
		for (const notebookWorkingCopy of this.workingCopies.values()) {
			const cellWorkingCopy = notebookWorkingCopy.executionHistory.get(cellUri)
			if (cellWorkingCopy) {
				for (const entry of notebookWorkingCopy.executionHistory.values()) {
					endExecution(entry, 'stopNotebook')
				}
			}
			stopAllScripts()
			notebookWorkingCopy.executionHistory.clear()
		}
	}

	async playCellFromURI(cellUri: string) {
		let notebook: vscode.NotebookDocument | undefined = undefined
		let cell: vscode.NotebookCell | undefined = undefined
		for (const notebookWorkingCopy of this.workingCopies.values()) {
			const cellWorkingCopy = notebookWorkingCopy.executionHistory.get(cellUri)
			if (cellWorkingCopy) {
				notebook = notebookWorkingCopy.notebook
				cell = cellWorkingCopy.cell
			}
		}

		if (!notebook || !cell) {
			throw Error(
				'Can not find cell... please use the run button for first play of a cell rather than keybindings!',
			)
		}

		const executed = this.queueCell(notebook, cell)
		await this.triggerPlay(notebook)
		endExecution(executed, 'playcellFromURI')
	}

	private async handler(cells: vscode.NotebookCell[], notebook: vscode.NotebookDocument): Promise<void> {
		const workingCopy: NotebookWorkingCopy = this.workingCopies.get(getKey(notebook)) ?? {
			executionHistory: new Map<string, CellWorkingCopy>(),
			notebook,
		}

		this.workingCopies.set(notebook.uri.toString(), workingCopy)

		const cellWorkingCopies = cells.map((cell) => this.queueCell(notebook, cell))
		await this.triggerPlay(notebook)
		cellWorkingCopies.forEach((e) => endExecution(e, 'handler'))
	}

	private queueCell(notebook: vscode.NotebookDocument, cell: vscode.NotebookCell): CellWorkingCopy {
		const workingCopy: NotebookWorkingCopy = this.workingCopies.get(getKey(notebook)) ?? {
			executionHistory: new Map<string, CellWorkingCopy>(),
			notebook,
		}

		const existingRun = workingCopy.executionHistory.get(getKey(cell))
		if (existingRun) {
			endExecution(existingRun, 'queue found existing')
		}

		const execution = this.controller.createNotebookCellExecution(cell)
		execution.start()
		const scriptAsRun = cell.document.getText()
		const cellWorkingCopy = {
			content: scriptAsRun,
			execution,
			cell,
			hasEnded: false,
		}

		workingCopy.executionHistory.set(getKey(cell), cellWorkingCopy)

		execution.token.onCancellationRequested(async () => {
			// TODO.. with this endExecution call, the execution end too early (the loop hasn't finished yet),
			// without it the execution ends too late (lots of time between the music stopping and the completion event)
			endExecution(cellWorkingCopy, 'cancellation requested')
			const cancellation = this.runScript(silenceScript(scriptAsRun), true)
			workingCopy.executionHistory.delete(getKey(cell))
			this.pendingCancellations.add(cancellation)
			await cancellation
			this.pendingCancellations.delete(cancellation)
		})

		return cellWorkingCopy
	}

	private async triggerPlay(notebook: vscode.NotebookDocument): Promise<void> {
		const workingCopy: NotebookWorkingCopy = this.workingCopies.get(getKey(notebook)) ?? {
			executionHistory: new Map<string, CellWorkingCopy>(),
			notebook,
		}

		const cells = notebook.getCells()

		const scriptToPlay = cells
			.map((cell) => workingCopy.executionHistory.get(getKey(cell))?.content)
			.filter((x): x is string => x !== undefined)
			.join('\n')

		await this.runScript(scriptToPlay)
	}

	private runID = 0
	private async runScript(script: string, isCancellation = false): Promise<void> {
		const id = this.runID++
		if (!isCancellation) await Promise.all(this.pendingCancellations.values())
		return new Promise((c) => {
			console.log('Running script', id, ':', script)

			const resolve = () => {
				c()
				console.log('Finished running script', id)
			}
			this.pendingExecutions.push(resolve)
			runScript(script)
		})
	}
}

const silenceScript = (script: string): string => {
	const loops = /live_loop.*?do\n/g
	let loop: RegExpExecArray | null
	let stops = ''
	while ((loop = loops.exec(script))) {
		stops += loop[0] + 'stop\nend\n'
	}
	return stops
}
