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
						: `|||sonic-pi\n${cell.value}\n|||`.replace(/\|/g, '`'),
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
type NotebookWorkingCopy = { executionHistory: Map<vscode.NotebookCell, CellWorkingCopy> }

const workingCopies = new Map<vscode.NotebookDocument, NotebookWorkingCopy>()

export const handler = (
	cells: vscode.NotebookCell[],
	notebook: vscode.NotebookDocument,
	controller: vscode.NotebookController,
): void => {
	const workingCopy: NotebookWorkingCopy = workingCopies.get(notebook) ?? {
		executionHistory: new Map<vscode.NotebookCell, CellWorkingCopy>(),
	}

	for (const cell of cells) {
		const existingRun = workingCopy.executionHistory.get(cell)
		if (existingRun) {
			// Do something to clean up?
		}

		const execution = controller.createNotebookCellExecution(cell)
		execution.start()
		workingCopy.executionHistory.set(cell, {
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
		.map((cell) => workingCopy.executionHistory.get(cell)?.execution)
		.filter(Boolean)
		.join('\n')

	runScript(toPlay)
}
