import * as vscode from 'vscode'
import { runScript, stopAllScripts } from './source-runner/extension'

const header = `> Play this document as a notebook with the [Sonic Pi Extension for VS Code](https://marketplace.visualstudio.com/items?itemName=jakearl.vscode-sonic-pi\n`

export const serializer: vscode.NotebookSerializer = {
	serializeNotebook: (book: vscode.NotebookData) =>
		Buffer.from(
			[
				header,
				...book.cells.map((cell) =>
					cell.kind === vscode.NotebookCellKind.Markup
						? `${cell.value}`
						: `\`\`\`sonic-pi\n${cell.value}\n\`\`\``,
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
			if (line === '```sonic-pi') {
				cells.push(
					new vscode.NotebookCellData(
						bufferKind,
						bufferContents.join('\n'),
						bufferKind === vscode.NotebookCellKind.Markup ? 'markdown' : 'sonic-pi',
					),
				)
				bufferKind = vscode.NotebookCellKind.Code
				bufferContents = []
			} else if (line === '```') {
				if (bufferKind === vscode.NotebookCellKind.Markup) {
					bufferContents.push(line)
				} else {
					cells.push(new vscode.NotebookCellData(bufferKind, bufferContents.join('\n'), 'sonic-pi'))
					bufferKind = vscode.NotebookCellKind.Markup
					bufferContents = []
				}
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

	constructor(id: string, notebookType: string, label: string) {
		this.controller = vscode.notebooks.createNotebookController(
			id,
			notebookType,
			label,
			this.handler.bind(this),
		)

		this.controller.supportedLanguages = ['sonic-pi']
	}

	dispose() {
		this.controller.dispose()
	}

	stopNotebook(cellUri: string) {
		for (const notebookWorkingCopy of this.workingCopies.values()) {
			const cellWorkingCopy = notebookWorkingCopy.executionHistory.get(cellUri)
			if (cellWorkingCopy) {
				for (const entry of notebookWorkingCopy.executionHistory.values()) {
					entry.execution.end(true)
				}
			}
			stopAllScripts()
			notebookWorkingCopy.executionHistory.clear()
		}
	}

	playCellFromURI(cellUri: string) {
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

		this.queueCell(notebook, cell)
		this.triggerPlay(notebook)
	}

	private handler(cells: vscode.NotebookCell[], notebook: vscode.NotebookDocument): void {
		const workingCopy: NotebookWorkingCopy = this.workingCopies.get(getKey(notebook)) ?? {
			executionHistory: new Map<string, CellWorkingCopy>(),
			notebook,
		}

		this.workingCopies.set(notebook.uri.toString(), workingCopy)

		for (const cell of cells) {
			this.queueCell(notebook, cell)
		}

		this.triggerPlay(notebook)
	}

	private queueCell(notebook: vscode.NotebookDocument, cell: vscode.NotebookCell) {
		const workingCopy: NotebookWorkingCopy = this.workingCopies.get(getKey(notebook)) ?? {
			executionHistory: new Map<string, CellWorkingCopy>(),
			notebook,
		}

		const existingRun = workingCopy.executionHistory.get(getKey(cell))
		if (existingRun) {
			existingRun.execution.end(true)
		}

		const execution = this.controller.createNotebookCellExecution(cell)
		execution.start()
		const scriptAsRun = cell.document.getText()
		workingCopy.executionHistory.set(getKey(cell), {
			content: scriptAsRun,
			execution,
			cell,
		})

		execution.token.onCancellationRequested(() => {
			runScript(silenceScript(scriptAsRun))
			execution.end(true)
			workingCopy.executionHistory.delete(getKey(cell))
		})
	}

	private triggerPlay(notebook: vscode.NotebookDocument) {
		const workingCopy: NotebookWorkingCopy = this.workingCopies.get(getKey(notebook)) ?? {
			executionHistory: new Map<string, CellWorkingCopy>(),
			notebook,
		}

		const toPlay = notebook
			.getCells()
			.map((cell) => workingCopy.executionHistory.get(getKey(cell))?.content)
			.filter((x): x is string => x !== undefined)
			.join('\n')

		runScript(toPlay)
	}
}

const silenceScript = (script: string): string => script.replace(/live_loop.*?do\n/g, '$& stop\n')
