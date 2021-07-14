import * as vscode from 'vscode'
import {
	ArgumentsCompletionItemProvider,
	CommandCompletionItemProvider,
	FxCompletionItemProvider,
	SampleCompletionItemProvider,
	SynthCompletionItemProvider,
} from './completionItems'
import { HoverProvider } from './HoverProvider'
import { serializer, handler } from './notebook'
import { activate as activate_runner } from './source-runner/extension'

const selector = { language: 'sonic-pi' }

export function activate(context: vscode.ExtensionContext) {
	activate_runner(context)

	context.subscriptions.push(
		vscode.commands.registerCommand('vscode-sonic-pi.openExamples', () => {
			void vscode.commands.executeCommand(
				'vscode.openFolder',
				vscode.Uri.joinPath(context.extensionUri, 'examples'),
			)
		}),
	)

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
		vscode.languages.registerCompletionItemProvider(
			selector,
			new ArgumentsCompletionItemProvider(),
			...ArgumentsCompletionItemProvider.triggerCharacters,
		),
		vscode.languages.registerHoverProvider(selector, new HoverProvider()),
		vscode.languages.registerCompletionItemProvider(selector, new CommandCompletionItemProvider()),
		vscode.workspace.registerNotebookSerializer('sonic-pi-book', serializer, { transientOutputs: true }),
	)

	const notebookController = vscode.notebooks.createNotebookController(
		'sonic-pi-book-kernel',
		'sonic-pi-book',
		'Sonic Pi Player',
		handler,
	)

	notebookController.supportedLanguages = ['sonic-pi']

	context.subscriptions.push(notebookController)

	context.subscriptions.push(
		vscode.commands.registerCommand('vscode-sonic-pi.newNotebook', async () => {
			await vscode.commands.executeCommand('workbench.action.files.newUntitledFile', {
				viewType: 'sonic-pi-book',
			})
		}),
	)
}
export function deactivate() {}
