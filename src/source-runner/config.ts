// MIT License

// Copyright (c) 2020 Luis Lloret

// Permission is hereby granted, free of charge, to any person obtaining a copy
// of this software and associated documentation files (the "Software"), to deal
// in the Software without restriction, including without limitation the rights
// to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
// copies of the Software, and to permit persons to whom the Software is
// furnished to do so, subject to the following conditions:

// The above copyright notice and this permission notice shall be included in all
// copies or substantial portions of the Software.

// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
// IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
// FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
// AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
// LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
// OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
// SOFTWARE.
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
