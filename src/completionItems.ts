import * as vscode from 'vscode'
import { getValidArgumentsAtPosition } from './argsParser'
import { samples, synths, fx, commands } from './builtins/builtins'

export class CommandCompletionItemProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		if (document.lineAt(position.line).firstNonWhitespaceCharacterIndex < position.character) {
			return []
		}
		return commands.map((command) => ({
			label: command.token,
		}))
	}
}

export class SampleCompletionItemProvider implements vscode.CompletionItemProvider {
	static triggerCharacters = [':']

	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		if (!document.lineAt(position.line).text.includes('sample')) {
			return []
		}
		const line = document.lineAt(position.line).text
		if (line.includes(',') && line.indexOf(',') < position.character) {
			return []
		}
		return samples.map((sample) => ({
			label: sample.id,
			insertText: sample.id,
			detail: sample.name,
			documentation: sample.detail,
		}))
	}
}

export class SynthCompletionItemProvider implements vscode.CompletionItemProvider {
	static triggerCharacters = [':']

	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		if (!document.lineAt(position.line).text.includes('synth')) {
			return []
		}
		const line = document.lineAt(position.line).text
		if (line.includes(',') && line.indexOf(',') < position.character) {
			return []
		}
		return synths.map((synth) => ({
			label: synth.id,
			insertText: synth.id,
			detail: synth.name,
			documentation: synth.detail,
		}))
	}
}

export class FxCompletionItemProvider implements vscode.CompletionItemProvider {
	static triggerCharacters = [':']

	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		if (!document.lineAt(position.line).text.includes('with_fx')) {
			return []
		}

		const line = document.lineAt(position.line).text
		if (line.includes(',') && line.indexOf(',') < position.character) {
			return []
		}

		return fx.map((fx) => ({
			label: fx.id,
			insertText: fx.id,
			detail: fx.name,
			documentation: fx.detail,
		}))
	}
}

export class ArgumentsCompletionItemProvider implements vscode.CompletionItemProvider {
	static triggerCharacters = []

	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		return getValidArgumentsAtPosition(document, position).map((item) => ({
			...item,
			insertText: item.label + ': ',
		}))
	}
}
