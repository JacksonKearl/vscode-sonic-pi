import * as vscode from 'vscode'
import { samples, synths, fx, commands } from './builtins/builtins'
import { activate as activate_runner } from './source-runner/extension'

const selector = { language: 'sonic-pi' }

class CommandCompletionItemProvider implements vscode.CompletionItemProvider {
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

class SampleCompletionItemProvider implements vscode.CompletionItemProvider {
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

class SynthCompletionItemProvider implements vscode.CompletionItemProvider {
	static triggerCharacters = [':']

	provideCompletionItems(
		document: vscode.TextDocument,
		position: vscode.Position,
		token: vscode.CancellationToken,
		context: vscode.CompletionContext,
	): vscode.ProviderResult<vscode.CompletionItem[] | vscode.CompletionList<vscode.CompletionItem>> {
		if (!document.lineAt(position.line).text.includes('use_synth')) {
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

class FxCompletionItemProvider implements vscode.CompletionItemProvider {
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

const getValidArgumentsAtPosition = (
	document: vscode.TextDocument,
	position: vscode.Position,
	slide_only: boolean = false,
): vscode.CompletionItem[] => {
	const lookUp = (haystack: string[]): string | undefined => {
		for (let lineNum = position.line; lineNum >= 0; lineNum--) {
			const line = document.lineAt(lineNum).text
			const found = haystack.find((needle) => line.includes(needle))
			if (found) {
				return found
			}
		}
	}

	const findControl = (varName: string): vscode.Position | undefined => {
		for (let lineNum = position.line; lineNum >= 0; lineNum--) {
			const line = document.lineAt(lineNum).text
			if (
				line.match(new RegExp(`\\|.*${varName}.*\\|`)) ||
				line.match(new RegExp(`\\s*${varName}\\s*=`))
			) {
				return document.lineAt(lineNum).range.end
			}
		}
	}

	const line = document.lineAt(position.line).text
	if (
		(!line.includes(',') || line.indexOf(',') > position.character) &&
		(!line.includes('|') || line.indexOf('|') > position.character)
	) {
		return []
	}

	let args:
		| {
				name: string
				detail: string
				default: string
				can_slide?: boolean | undefined
		  }[]
		| undefined = undefined
	let command = line.replace(/^.*=/, '')
	switch (command.match(/\s*(\w+)\s/)?.[1]) {
		case 'play': {
			const synthID = lookUp(synths.map((synth) => synth.id))
			if (synthID) {
				args = synths.find((synth) => synth.id === synthID)?.options
			}
			break
		}
		case 'with_fx': {
			const fxID = lookUp(fx.map((fx) => fx.id))
			if (fxID) {
				args = fx.find((fx) => fx.id === fxID)?.options
			}
			break
		}
		case 'sample': {
			const sampleID = lookUp(samples.map((sample) => sample.id))
			if (sampleID) {
				args = samples.find((sample) => sample.id === sampleID)?.options
			}
			break
		}
		case 'control': {
			const controlName = command.match(/control (\w+),/)?.[1]
			if (controlName) {
				const source = findControl(controlName)
				if (source) return getValidArgumentsAtPosition(document, source, true)
			}
			break
		}
		default: {
			console.error('Unable to process arguments on line:', document.lineAt(position.line).text)
			break
		}
	}

	if (args) {
		return args.flatMap((arg) => {
			if (slide_only && arg.can_slide) {
				return [
					{
						label: arg.name,
						documentation: arg.detail,
						detail: arg.default,
						kind: vscode.CompletionItemKind.Field,
					},
				]
			} else if (arg.can_slide) {
				return [
					{
						label: arg.name,
						documentation: arg.detail,
						detail: arg.default,
						kind: vscode.CompletionItemKind.Field,
					},
					{
						label: arg.name + '_slide',
						documentation:
							'Amount of time (in beats) for the parameter value to change. A long parameter_slide value means that the parameter takes a long time to slide from the previous value to the new value. A parameter_slide of 0 means that the parameter instantly changes to the new value. ',
						detail: '0',
						kind: vscode.CompletionItemKind.Field,
					},
					{
						label: arg.name + '_slide_shape',
						documentation:
							'Shape of curve. 0: step, 1: linear, 3: sine, 4: welch, 5: custom (use *_slide_curve: opt e.g. amp_slide_curve:), 6: squared, 7: cubed. ',
						detail: '5',
						kind: vscode.CompletionItemKind.Field,
					},
					{
						label: arg.name + '_slide_curve',
						documentation:
							'Shape of the slide curve (only honoured if slide shape is 5). 0 means linear and positive and negative numbers curve the segment up and down respectively. ',
						detail: '0',
						kind: vscode.CompletionItemKind.Field,
					},
				]
			} else {
				return {
					label: arg.name,
					documentation: arg.detail,
					detail: arg.default,
					kind: vscode.CompletionItemKind.Field,
				}
			}
		})
	} else {
		return []
	}
}

class ArgumentsCompletionItemProvider implements vscode.CompletionItemProvider {
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

class HoverProvider implements vscode.HoverProvider {
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

export function activate(context: vscode.ExtensionContext) {
	activate_runner(context)

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
	)
}
export function deactivate() {}
