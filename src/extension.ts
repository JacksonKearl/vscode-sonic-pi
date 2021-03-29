import * as vscode from 'vscode'
import { samples, synths, fx, commands } from './builtins'

const selector = { language: 'sonic-pi' }

class CommandCompletionItemProvider implements vscode.CompletionItemProvider {
	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		return commands.map((command) => ({
			label: command,
		}))
	}
}

class SampleCompletionItemProvider implements vscode.CompletionItemProvider {
	static triggerCharacters = [':']

	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		return samples.map((sample) => ({
			label: sample,
			sortText: document.lineAt(position.line).text.includes('sample') ? 'A' : 'Z',
		}))
	}
}

class SynthCompletionItemProvider implements vscode.CompletionItemProvider {
	static triggerCharacters = [':']

	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		return synths.map((synth) => ({
			label: synth.id,
			insertText: synth.id,
			detail: synth.name,
			documentation: synth.detail,
			sortText: document.lineAt(position.line).text.includes('use_synth') ? 'A' : 'Z',
		}))
	}
}

class FxCompletionItemProvider implements vscode.CompletionItemProvider {
	static triggerCharacters = [':']

	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		return fx.map((fx) => ({
			label: fx.id,
			insertText: fx.id,
			detail: fx.name,
			documentation: fx.detail,
			sortText: document.lineAt(position.line).text.includes('with_fx') ? 'A' : 'Z',
		}))
	}
}

export function activate(context: vscode.ExtensionContext) {
	context.subscriptions.push(
		vscode.languages.registerCompletionItemProvider(
			selector,
			new SampleCompletionItemProvider(),
			...SampleCompletionItemProvider.triggerCharacters,
		),
		vscode.languages.registerCompletionItemProvider(
			selector,
			new SynthCompletionItemProvider(),
			...SynthCompletionItemProvider.triggerCharacters,
		),
		vscode.languages.registerCompletionItemProvider(
			selector,
			new FxCompletionItemProvider(),
			...FxCompletionItemProvider.triggerCharacters,
		),
		vscode.languages.registerCompletionItemProvider(selector, new CommandCompletionItemProvider()),
	)
}
export function deactivate() {}
