import * as vscode from 'vscode'
import { getValidArgumentsAtPosition } from './argsParser'
import { synths, fx, commands } from './builtins/builtins'

export class HoverProvider implements vscode.HoverProvider {
	provideHover(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
	): vscode.ProviderResult<vscode.Hover> {
		const range = document.getWordRangeAtPosition(position, /:?\w+:?/)
		const item = document.getText(range)
		if (item[0] === ':') {
			const symbol = item.substring(1)
			const builtin = fx.find((f) => f.id === symbol) ?? synths.find((synth) => synth.id === symbol)
			if (builtin) {
				return new vscode.Hover(`${builtin.name}\n\n${builtin.detail}`)
			}
		} else if (item[item.length - 1] === ':') {
			const argument = item.substring(0, item.length - 1)
			const args = getValidArgumentsAtPosition(document, position)
			const thisArg = args.find((arg) => arg.label === argument)
			if (thisArg) {
				return new vscode.Hover(`${thisArg.documentation}\n\n_@default: ${thisArg.detail}_`)
			}
		} else {
			const builtin = commands.find((command) => command.token === item)
			if (builtin) {
				return new vscode.Hover(`${builtin.description}`)
			}
		}
		return null
	}
}
