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
						: `|||sonic-pi\n${cell.value}\n|||`.replace('|||', '```'),
				),
			].join('\n'),
		),
	deserializeNotebook: (content) => {
		const string = Buffer.from(content).toString().replace(header, '')
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

		return new vscode.NotebookData(cells)
	},
}

type CellWorkingCopy = { content: string; execution: vscode.NotebookCellExecution }
type NotebookWorkingCopy = { executionHistory: Map<string, CellWorkingCopy> }

const getKey = (thing: vscode.NotebookCell | vscode.NotebookDocument) =>
	((thing as vscode.NotebookDocument).uri ?? (thing as vscode.NotebookCell).document.uri).toString()

const workingCopies = new Map<string, NotebookWorkingCopy>()

export const handler = (
	cells: vscode.NotebookCell[],
	notebook: vscode.NotebookDocument,
	controller: vscode.NotebookController,
): void => {
	const workingCopy: NotebookWorkingCopy = workingCopies.get(getKey(notebook)) ?? {
		executionHistory: new Map<string, CellWorkingCopy>(),
	}

	workingCopies.set(notebook.uri.toString(), workingCopy)

	for (const cell of cells) {
		const existingRun = workingCopy.executionHistory.get(getKey(cell))
		if (existingRun) {
			// Do something to clean up?
		}

		const execution = controller.createNotebookCellExecution(cell)
		execution.start()
		workingCopy.executionHistory.set(getKey(cell), {
			content: cell.document.getText(),
			execution,
		})

		execution.token.onCancellationRequested(() => {
			stopAllScripts()
			for (const cellWorkingCopy of workingCopy.executionHistory.values()) {
				cellWorkingCopy.execution.end(true)
			}
			workingCopy.executionHistory.clear()
		})
	}

	const toPlay = notebook
		.getCells()
		.map((cell) => workingCopy.executionHistory.get(getKey(cell))?.content)
		.filter(Boolean)
		.join('\n')

	runScript(toPlay)
}
