import * as vscode from 'vscode'

export class Config {
	private getConfiguration = vscode.workspace.getConfiguration
	private section: string = 'vscode-sonic-pi'
	private rubySection: string = 'ruby.interpreter'

	// sonic-pi's config
	public flashBackgroundColor(): string {
		return this.getConfiguration(this.section).flashBackgroundColor
	}
	public flashTextColor(): string {
		return this.getConfiguration(this.section).flashTextColor
	}
	public launchSonicPiServerAutomatically(): string {
		return this.getConfiguration(this.section).launchSonicPiServerAutomatically
	}
	public runFileWhenRunSelectedIsEmpty(): string {
		return this.getConfiguration(this.section).runFileWhenRunSelectedIsEmpty
	}
	public sonicPiRootDirectory(): string {
		return this.getConfiguration(this.section).sonicPiRootDirectory
	}
	public launchSonicPiServerCustomExtension(): string {
		return this.getConfiguration(this.section).launchSonicPiServerCustomExtension
	}
	public invertStereo(): boolean {
		return this.getConfiguration(this.section).invertStereo
	}
	public forceMono(): boolean {
		return this.getConfiguration(this.section).forceMono
	}
	public logClearOnRun(): boolean {
		return this.getConfiguration(this.section).logClearOnRun
	}
	public safeMode(): boolean {
		return this.getConfiguration(this.section).safeMode
	}
	public updateRunFileWhenRunSelectedIsEmpty(value: string) {
		void this.getConfiguration(this.section).update('runFileWhenRunSelectedIsEmpty', value, true)
	}

	// ruby interpreter's config
	public commandPath(): string {
		return this.getConfiguration(this.rubySection).commandPath
	}
}
