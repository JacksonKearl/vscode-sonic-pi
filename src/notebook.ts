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
						: `|||sonic-pi\n${cell.value}\n|||`.replace('|', '`'),
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

const executions = new Set<vscode.NotebookCellExecution>()

export const handler = (
	cells: vscode.NotebookCell[],
	notebook: vscode.NotebookDocument,
	controller: vscode.NotebookController,
): void => {
	for (const cell of cells) {
		const execution = controller.createNotebookCellExecution(cell)
		executions.add(execution)
		execution.start()
		const toExecute = cell.document.getText()
		execution.token.onCancellationRequested(() => {
			stopAllScripts()
			executions.forEach((e) => e.end(true))
			executions.clear()
		})
		runScript(toExecute)
	}
}
