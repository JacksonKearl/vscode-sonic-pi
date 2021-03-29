export const commands: { token: string; description?: string }[] = [
	{ token: 'play', description: 'Play a note using the most recently set synthesizer.' },
	{ token: 'sleep', description: 'Sleep for a given number of beats' },
	{ token: 'sample', description: 'Play a prerecorded sample' },
	{ token: 'use_synth', description: 'Set the synthesizer for future `play` calls' },
	{ token: 'loop', description: 'Loop a segment' },
	{ token: 'sync', description: 'Wait until a corresponding `cue` has been triggered' },
	{ token: 'cue', description: 'Dispatch to all listening `sync` waits to continue execution' },
	{ token: 'with_fx', description: 'Build a new effect and run a segment using it' },
	{ token: 'control', description: 'Modify an existing operation' },
	{ token: 'live_loop', description: 'Create  loop running in a new thread with a given name' },
	{ token: 'tick', description: 'Increment and access the live_loop counter' },
	{ token: 'look', description: 'Access the live_loop counter' },
	{ token: 'choose', description: 'Select a random entry from the list' },
]

type BuiltIn = {
	name: string
	id: string
	detail: string
	options: {
		name: string
		detail: string
		default: string
		can_slide?: boolean
	}[]
}

export const synths: BuiltIn[] = [
	{
		name: 'Dull Bell',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
		],
		id: 'dull_bell',
		detail: 'A simple dull discordant bell sound.',
	},
	{
		name: 'Pretty Bell',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
		],
		id: 'pretty_bell',
		detail: 'A pretty bell sound. Works well with short attacks and long decays.',
	},
	{
		name: 'Sine Wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
		],
		id: 'beep',
		detail:
			'A simple pure sine wave. The sine wave is the simplest, purest sound there is and is the fundamental building block of all noise. The mathematician Fourier demonstrated that any sound could be built out of a number of sine waves (the more complex the sound, the more sine waves needed). Have a play combining a number of sine waves to design your own sounds!',
	},
	{
		name: 'Sine Wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
		],
		id: 'sine',
		detail:
			'A simple pure sine wave. The sine wave is the simplest, purest sound there is and is the fundamental building block of all noise. The mathematician Fourier demonstrated that any sound could be built out of a number of sine waves (the more complex the sound, the more sine waves needed). Have a play combining a number of sine waves to design your own sounds!',
	},
	{
		name: 'Saw Wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
		],
		id: 'saw',
		detail:
			'A saw wave with a low pass filter. Great for using with FX such as the built in low pass filter (available via the cutoff arg) due to the complexity and thickness of the sound.',
	},
	{
		name: 'Pulse Wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'pulse',
		detail:
			'A simple pulse wave with a low pass filter. This defaults to a square wave, but the timbre can be changed dramatically by adjusting the pulse_width arg between 0 and 1. The pulse wave is thick and heavy with lower notes and is a great ingredient for bass sounds.',
	},
	{
		name: 'Pulse Wave with sub',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'pulse_width',
				detail:
					'The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'sub_amp',
				detail: 'Amplitude for the additional sine wave.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'subpulse',
		detail:
			'A pulse wave with a sub sine wave passed through a low pass filter. The pulse wave is thick and heavy with lower notes and is a great ingredient for bass sounds - especially with the sub wave.',
	},
	{
		name: 'Square Wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
		],
		id: 'square',
		detail:
			'A simple square wave with a low pass filter. The square wave is thick and heavy with lower notes and is a great ingredient for bass sounds. If you wish to modulate the width of the square wave see the synth pulse.',
	},
	{
		name: 'Triangle Wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'tri',
		detail: 'A simple triangle wave with a low pass filter.',
	},
	{
		name: 'Detuned Saw wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'dsaw',
		detail:
			'A pair of detuned saw waves passed through a low pass filter. Two saw waves with slightly different frequencies generates a nice thick sound which is the basis for a lot of famous synth sounds. Thicken the sound by increasing the detune value, or create an octave-playing synth by choosing a detune of 12 (12 MIDI notes is an octave).',
	},
	{
		name: 'Detuned Pulse Wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'detune',
				detail:
					'Distance (in MIDI notes) between components of sound. Affects thickness, sense of tuning and harmony. Tiny values such as 0.1 create a thick sound. Larger values such as 0.5 make the tuning sound strange. Even bigger values such as 5 create chord-like sounds.',
				default: '0.1',
				can_slide: true,
			},
			{
				name: 'pulse_width',
				detail:
					'The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.',
				default: '0.5',
				can_slide: true,
			},
		],
		id: 'dpulse',
		detail:
			'A pair of detuned pulse waves passed through a low pass filter. Two pulse waves with slightly different frequencies generates a nice thick sound which can be used as a basis for some nice bass sounds. Thicken the sound by increasing the detune value, or create an octave-playing synth by choosing a detune of 12 (12 MIDI notes is an octave). Each pulse wave can also have individual widths (although the default is for the detuned pulse to mirror the width of the main pulse).',
	},
	{
		name: 'Detuned Triangle Wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'dtri',
		detail:
			'A pair of detuned triangle waves passed through a low pass filter. Two pulse waves with slightly different frequencies generates a nice thick sound which can be used as a basis for some nice bass sounds. Thicken the sound by increasing the detune value, or create an octave-playing synth by choosing a detune of 12 (12 MIDI notes is an octave).',
	},
	{
		name: 'Basic FM synthesis',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'divisor',
				detail:
					"Modifies the frequency of the modulator oscillator relative to the carrier. Don't worry too much about what this means - just try different numbers out!",
				default: '2',
				can_slide: true,
			},
		],
		id: 'fm',
		detail:
			'A sine wave with a fundamental frequency which is modulated at audio rate by another sine wave with a specific modulation, division and depth. Useful for generating a wide range of sounds by playing with the divisor and depth params. Great for deep powerful bass and crazy 70s sci-fi sounds.',
	},
	{
		name: 'Basic FM synthesis with frequency modulation.',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'divisor',
				detail:
					"Modifies the frequency of the modulator oscillator relative to the carrier. Don't worry too much about what this means - just try different numbers out!",
				default: '2',
				can_slide: true,
			},
			{
				name: 'depth',
				detail:
					"Modifies the depth of the carrier wave used to modify fundamental frequency. Don't worry too much about what this means - just try different numbers out!",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mod_phase',
				detail:
					'Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.',
				default: '0.25',
			},
			{
				name: 'mod_range',
				detail: 'The size of gap between modulation notes. A gap of 12 is one octave.',
				default: '5',
			},
			{
				name: 'mod_pulse_width',
				detail:
					'The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.',
				default: '0.5',
			},
			{
				name: 'mod_phase_offset',
				detail: 'Initial modulation phase offset (a value between 0 and 1).',
				default: '0',
			},
			{
				name: 'mod_invert_wave',
				detail: 'Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.',
				default: '0',
			},
		],
		id: 'mod_fm',
		detail:
			'The FM synth modulating between two notes - the duration of the modulation can be modified using the mod_phase arg, the range (number of notes jumped between) by the mod_range arg and the width of the jumps by the mod_width param. The FM synth is a sine wave with a fundamental frequency which is modulated at audio rate by another sine wave with a specific modulation, division and depth. Useful for generating a wide range of sounds by playing with the `:divisor` and `:depth` params. Great for deep powerful bass and crazy 70s sci-fi sounds.',
	},
	{
		name: 'Modulated Saw Wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'mod_phase',
				detail:
					'Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.',
				default: '0.25',
				can_slide: true,
			},
			{
				name: 'mod_range',
				detail: 'The size of gap between modulation notes. A gap of 12 is one octave.',
				default: '5',
				can_slide: true,
			},
			{
				name: 'mod_pulse_width',
				detail:
					'The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'mod_phase_offset',
				detail: 'Initial modulation phase offset (a value between 0 and 1).',
				default: '0',
			},
			{
				name: 'mod_invert_wave',
				detail: 'Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.',
				default: '0',
			},
		],
		id: 'mod_saw',
		detail:
			'A saw wave passed through a low pass filter which modulates between two separate notes via a variety of control waves.',
	},
	{
		name: 'Modulated Detuned Saw Waves',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'mod_phase',
				detail:
					'Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.',
				default: '0.25',
				can_slide: true,
			},
			{
				name: 'mod_range',
				detail: 'The size of gap between modulation notes. A gap of 12 is one octave.',
				default: '5',
				can_slide: true,
			},
			{
				name: 'mod_pulse_width',
				detail:
					'The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'mod_phase_offset',
				detail: 'Initial modulation phase offset (a value between 0 and 1).',
				default: '0',
			},
			{
				name: 'mod_invert_wave',
				detail: 'Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.',
				default: '0',
			},
			{
				name: 'mod_wave',
				detail: 'Wave shape of mod wave. 0=saw wave, 1=pulse, 2=triangle wave and 3=sine wave.',
				default: '1',
			},
		],
		id: 'mod_dsaw',
		detail:
			'A pair of detuned saw waves (see the dsaw synth) which are modulated between two fixed notes at a given rate.',
	},
	{
		name: 'Modulated Sine Wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'mod_phase',
				detail:
					'Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.',
				default: '0.25',
				can_slide: true,
			},
			{
				name: 'mod_range',
				detail: 'The size of gap between modulation notes. A gap of 12 is one octave.',
				default: '5',
				can_slide: true,
			},
			{
				name: 'mod_pulse_width',
				detail:
					'The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'mod_phase_offset',
				detail: 'Initial modulation phase offset (a value between 0 and 1).',
				default: '0',
			},
			{
				name: 'mod_invert_wave',
				detail: 'Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.',
				default: '0',
			},
		],
		id: 'mod_sine',
		detail:
			'A sine wave passed through a low pass filter which modulates between two separate notes via a variety of control waves.',
	},
	{
		name: 'Modulated Sine Wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'mod_phase',
				detail:
					'Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.',
				default: '0.25',
				can_slide: true,
			},
			{
				name: 'mod_range',
				detail: 'The size of gap between modulation notes. A gap of 12 is one octave.',
				default: '5',
				can_slide: true,
			},
			{
				name: 'mod_pulse_width',
				detail:
					'The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'mod_phase_offset',
				detail: 'Initial modulation phase offset (a value between 0 and 1).',
				default: '0',
			},
			{
				name: 'mod_invert_wave',
				detail: 'Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.',
				default: '0',
			},
		],
		id: 'mod_beep',
		detail:
			'A sine wave passed through a low pass filter which modulates between two separate notes via a variety of control waves.',
	},
	{
		name: 'Modulated Triangle Wave',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'mod_phase',
				detail:
					'Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.',
				default: '0.25',
				can_slide: true,
			},
			{
				name: 'mod_range',
				detail: 'The size of gap between modulation notes. A gap of 12 is one octave.',
				default: '5',
				can_slide: true,
			},
			{
				name: 'mod_pulse_width',
				detail:
					'The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'mod_phase_offset',
				detail: 'Initial modulation phase offset (a value between 0 and 1).',
				default: '0',
			},
			{
				name: 'mod_invert_wave',
				detail: 'Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.',
				default: '0',
			},
		],
		id: 'mod_tri',
		detail:
			'A triangle wave passed through a low pass filter which modulates between two separate notes via a variety of control waves.',
	},
	{
		name: 'Modulated Pulse',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'mod_phase',
				detail:
					'Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.',
				default: '0.25',
				can_slide: true,
			},
			{
				name: 'mod_range',
				detail: 'The size of gap between modulation notes. A gap of 12 is one octave.',
				default: '5',
				can_slide: true,
			},
			{
				name: 'mod_pulse_width',
				detail:
					'The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'mod_phase_offset',
				detail: 'Initial modulation phase offset (a value between 0 and 1).',
				default: '0',
			},
			{
				name: 'mod_invert_wave',
				detail: 'Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.',
				default: '0',
			},
			{
				name: 'mod_wave',
				detail: 'Wave shape of mod wave. 0=saw wave, 1=pulse, 2=triangle wave and 3=sine wave.',
				default: '1',
			},
		],
		id: 'mod_pulse',
		detail:
			'A pulse wave with a low pass filter modulating between two notes via a variety of control waves (see mod_wave: arg). The pulse wave defaults to a square wave, but the timbre can be changed dramatically by adjusting the pulse_width arg between 0 and 1.',
	},
	{
		name: 'TB-303 Emulation',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail: 'The maximum cutoff value as a MIDI note',
				default: '120',
				can_slide: true,
			},
			{
				name: 'cutoff_min',
				detail: 'The minimum cutoff value.',
				default: '30',
				can_slide: true,
			},
			{
				name: 'cutoff_attack',
				detail:
					"Attack time for cutoff filter. Amount of time (in beats) for sound to reach full cutoff value. Default value is set to match amp envelope's attack value.",
				default: 'attack',
			},
			{
				name: 'cutoff_decay',
				detail:
					"Decay time for cutoff filter. Amount of time (in beats) for sound to move from full cutoff value (cutoff attack level) to the cutoff sustain level. Default value is set to match amp envelope's decay value.",
				default: 'decay',
			},
			{
				name: 'cutoff_sustain',
				detail:
					"Amount of time for cutoff value to remain at sustain level in beats. Default value is set to match amp envelope's sustain value.",
				default: 'sustain',
			},
			{
				name: 'cutoff_release',
				detail:
					"Amount of time (in beats) for sound to move from cutoff sustain value to cutoff min value. Default value is set to match amp envelope's release value.",
				default: 'release',
			},
			{
				name: 'cutoff_attack_level',
				detail:
					'The peak cutoff (value of cutoff at peak of attack) as a value between 0 and 1 where 0 is the :cutoff_min and 1 is the :cutoff value',
				default: '1',
			},
			{
				name: 'cutoff_decay_level',
				detail:
					'The level of cutoff after the decay phase as a value between 0 and 1 where 0 is the :cutoff_min and 1 is the :cutoff value',
				default: 'cutoff_sustain_level',
			},
			{
				name: 'cutoff_sustain_level',
				detail:
					'The sustain cutoff (value of cutoff at sustain time) as a value between 0 and 1 where 0 is the :cutoff_min and 1 is the :cutoff value.',
				default: '1',
			},
			{
				name: 'res',
				detail:
					'Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.',
				default: '0.9',
				can_slide: true,
			},
			{
				name: 'wave',
				detail:
					'Wave type - 0 saw, 1 pulse, 2 triangle. Different waves will produce different sounds.',
				default: '0',
			},
		],
		id: 'tb303',
		detail:
			'Emulation of the classic Roland TB-303 Bass Line synthesiser. Overdrive the res (i.e. use very large values) for that classic late 80s acid sound.',
	},
	{
		name: 'Supersaw',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '130',
				can_slide: true,
			},
		],
		id: 'supersaw',
		detail: 'Thick swirly saw waves sparkling and moving about to create a rich trancy sound.',
	},
	{
		name: 'Hoover',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0.05',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '130',
				can_slide: true,
			},
		],
		id: 'hoover',
		detail:
			"Classic early 90's rave synth - 'a sort of slurry chorussy synth line like the classic Dominator by Human Resource'. Based on Dan Stowell's implementation in SuperCollider and Daniel Turczanski's port to Overtone. Works really well with portamento (see docs for the 'control' method).",
	},
	{
		name: 'The Prophet',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '110',
				can_slide: true,
			},
		],
		id: 'prophet',
		detail:
			'Dark and swirly, this synth uses Pulse Width Modulation (PWM) to create a timbre which continually moves around. This effect is created using the pulse ugen which produces a variable width square wave. We then control the width of the pulses using a variety of LFOs - sin-osc and lf-tri in this case. We use a number of these LFO modulated pulse ugens with varying LFO type and rate (and phase in some cases) to provide the LFO with a different starting point. We then mix all these pulses together to create a thick sound and then feed it through a resonant low pass filter (rlpf). For extra bass, one of the pulses is an octave lower (half the frequency) and its LFO has a little bit of randomisation thrown into its frequency component for that extra bit of variety.',
	},
	{
		name: 'Zawa',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'res',
				detail:
					'Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.',
				default: '0.9',
				can_slide: true,
			},
			{
				name: 'phase',
				detail: 'Phase duration in beats of timbre modulation.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'phase_offset',
				detail: 'Initial phase offset of the sync wave (a value between 0 and 1).',
				default: '0',
			},
			{
				name: 'wave',
				detail:
					'Wave shape controlling freq sync saw wave. 0=saw wave, 1=pulse, 2=triangle wave and 3=sine wave.',
				default: '3',
			},
			{
				name: 'invert_wave',
				detail:
					'Invert sync freq control waveform (i.e. flip it on the y axis). 0=uninverted wave, 1=inverted wave.',
				default: '0',
			},
			{
				name: 'range',
				detail: 'Range of the associated sync saw in MIDI notes from the main note. Modifies timbre.',
				default: '24',
				can_slide: true,
			},
			{
				name: 'disable_wave',
				detail: 'Enable and disable sync control wave (setting to 1 will stop timbre movement).',
				default: '0',
			},
		],
		id: 'zawa',
		detail:
			'Saw wave with oscillating timbre. Produces moving saw waves with a unique character controllable with the control oscillator (usage similar to mod synths).',
	},
	{
		name: 'Dark Ambience',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '110',
				can_slide: true,
			},
			{
				name: 'res',
				detail:
					'Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.',
				default: '0.7',
				can_slide: true,
			},
			{
				name: 'detune1',
				detail:
					'Distance (in MIDI notes) between the main note and the second component of sound. Affects thickness, sense of tuning and harmony.',
				default: '12',
				can_slide: true,
			},
			{
				name: 'detune2',
				detail:
					'Distance (in MIDI notes) between the main note and the third component of sound. Affects thickness, sense of tuning and harmony. Tiny values such as 0.1 create a thick sound.',
				default: '24',
				can_slide: true,
			},
			{
				name: 'noise',
				detail:
					'Noise source. Has a subtle effect on the timbre of the sound. 0=pink noise (the default), 1=brown noise, 2=white noise, 3=clip noise and 4=grey noise',
				default: '0',
			},
			{
				name: 'ring',
				detail:
					'Amount of ring in the sound. Lower values create a more rough sound, higher values produce a sound with more focus.',
				default: '0.2',
			},
			{
				name: 'room',
				detail: 'Room size in squared metres used to calculate the reverb.',
				default: '70',
			},
		],
		id: 'dark_ambience',
		detail:
			'A slow rolling bass with a sparkle of light trying to escape the darkness. Great for an ambient sound.',
	},
	{
		name: 'Growl',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0.1',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '130',
				can_slide: true,
			},
		],
		id: 'growl',
		detail: 'A deep rumbling growl with a bright sine shining through at higher notes.',
	},
	{
		name: 'Hollow',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '90',
				can_slide: true,
			},
			{
				name: 'res',
				detail:
					'Filter resonance as a value between 0 and 1. Only functional if a cutoff value is specified. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.',
				default: '0.99',
				can_slide: true,
			},
			{
				name: 'noise',
				detail:
					'Noise source. Has a subtle effect on the timbre of the sound. 0=pink noise, 1=brown noise (the default), 2=white noise, 3=clip noise and 4=grey noise',
				default: '1',
			},
		],
		id: 'hollow',
		detail: 'A hollow breathy sound constructed from random noise',
	},
	{
		name: 'Mono Sample Player',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplitude multiplier which takes place immediately before any internal FX such as the low pass filter, compressor or pitch modification. Use this opt if you want to overload the compressor.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail: 'Duration of the attack phase of the envelope.',
				default: '0',
			},
			{
				name: 'decay',
				detail: 'Duration of the decay phase of the envelope.',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Duration of the sustain phase of the envelope. When -1 (the default) will auto-stretch.',
				default: '-1',
			},
			{
				name: 'release',
				detail: 'Duration of the release phase of the envelope.',
				default: '0',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff_attack',
				detail:
					"Attack time for cutoff filter. Amount of time (in beats) for sound to reach full cutoff value. Default value is set to match amp envelope's attack value.",
				default: 'attack',
			},
			{
				name: 'cutoff_decay',
				detail:
					"Decay time for cutoff filter. Amount of time (in beats) for sound to move from full cutoff value (cutoff attack level) to the cutoff sustain level. Default value is set to match amp envelope's decay value.",
				default: 'decay',
			},
			{
				name: 'cutoff_sustain',
				detail:
					'Amount of time for cutoff value to remain at sustain level in beats. When -1 (the default) will auto-stretch.',
				default: 'sustain',
			},
			{
				name: 'cutoff_release',
				detail:
					"Amount of time (in beats) for sound to move from cutoff sustain value to cutoff min value. Default value is set to match amp envelope's release value.",
				default: 'release',
			},
			{
				name: 'cutoff_attack_level',
				detail: 'The peak cutoff (value of cutoff at peak of attack) as a MIDI note.',
				default: 'cutoff',
			},
			{
				name: 'cutoff_decay_level',
				detail: 'The level of cutoff after the decay phase as a MIDI note.',
				default: 'cutoff',
			},
			{
				name: 'cutoff_sustain_level',
				detail: 'The sustain cutoff (value of cutoff at sustain time) as a MIDI note.',
				default: 'cutoff',
			},
			{
				name: 'cutoff_env_curve',
				detail:
					'Select the shape of the curve between levels in the cutoff envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff_min',
				detail: 'The minimum cutoff value.',
				default: '30',
				can_slide: true,
			},
			{
				name: 'rate',
				detail:
					'Rate with which to play back - default is 1. Playing the sample at rate 2 will play it back at double the normal speed. This will have the effect of doubling the frequencies in the sample and halving the playback time. Use rates lower than 1 to slow the sample down. Negative rates will play the sample in reverse.',
				default: '1',
			},
			{
				name: 'start',
				detail:
					'A fraction (between 0 and 1) representing where in the sample to start playback. 1 represents the end of the sample, 0.5 half-way through etc.',
				default: '0',
			},
			{
				name: 'finish',
				detail:
					'A fraction (between 0 and 1) representing where in the sample to finish playback. 1 represents the end of the sample, 0.5 half-way through etc.',
				default: '1',
			},
			{
				name: 'res',
				detail:
					'Filter resonance as a value between 0 and 1. Only functional if a cutoff value is specified. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'norm',
				detail:
					'Normalise the audio (make quieter parts of the sample louder and louder parts quieter) - this is similar to the normaliser FX. This may emphasise any clicks caused by clipping.',
				default: '0',
			},
			{
				name: 'pitch',
				detail: 'write me',
				default: '0',
				can_slide: true,
			},
			{
				name: 'window_size',
				detail:
					'Pitch shift works by chopping the input into tiny slices, then playing these slices at a higher or lower rate. If we make the slices small enough and overlap them, it sounds like the original sound with the pitch changed.',
				default: '0.2',
				can_slide: true,
			},
			{
				name: 'pitch_dis',
				detail:
					'Pitch dispersion - how much random variation in pitch to add. Using a low value like 0.001 can help to "soften up" the metallic sounds, especially on drum loops. To be really technical, pitch_dispersion is the maximum random deviation of the pitch from the pitch ratio (which is set by the pitch param)',
				default: '0.0',
				can_slide: true,
			},
			{
				name: 'time_dis',
				detail:
					"Time dispersion - how much random delay before playing each grain (measured in seconds). Again, low values here like 0.001 can help to soften up metallic sounds introduced by the effect. Large values are also fun as they can make soundscapes and textures from the input, although you will most likely lose the rhythm of the original. NB - This won't have an effect if it's larger than window_size.",
				default: '0.0',
				can_slide: true,
			},
			{
				name: 'compress',
				detail:
					"Enable the compressor. This sits at the end of the internal FX chain immediately before the `amp:` opt. Therefore to drive the compressor use the `pre_amp:` opt which will amplify the signal before it hits any internal FX. The compressor compresses the dynamic range of the incoming signal. Equivalent to automatically turning the amp down when the signal gets too loud and then back up again when it's quiet. Useful for ensuring the containing signal doesn't overwhelm other aspects of the sound. Also a general purpose hard-knee dynamic range processor which can be tuned via the opts to both expand and compress the signal.",
				default: '0',
			},
			{
				name: 'threshold',
				detail:
					'Threshold value determining the break point between slope_below and slope_above. Only valid if the compressor is enabled by turning on the compress: opt.',
				default: '0.2',
				can_slide: true,
			},
			{
				name: 'clamp_time',
				detail:
					'Time taken for the amplitude adjustments to kick in fully (in seconds). This is usually pretty small (not much more than 10 milliseconds). Also known as the time of the attack phase. Only valid if the compressor is enabled by turning on the compress: opt.',
				default: '0.01',
				can_slide: true,
			},
			{
				name: 'slope_above',
				detail:
					'Slope of the amplitude curve above the threshold. A value of 1 means that the output of signals with amplitude above the threshold will be unaffected. Greater values will magnify and smaller values will attenuate the signal. Only valid if the compressor is enabled by turning on the compress: opt.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'slope_below',
				detail:
					'Slope of the amplitude curve below the threshold. A value of 1 means that the output of signals with amplitude below the threshold will be unaffected. Greater values will magnify and smaller values will attenuate the signal. Only valid if the compressor is enabled by turning on the compress: opt.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'mono_player',
		detail: '',
	},
	{
		name: 'Stereo Sample Player',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplitude multiplier which takes place immediately before any internal FX such as the low pass filter, compressor or pitch modification. Use this opt if you want to overload the compressor.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail: 'Duration of the attack phase of the envelope.',
				default: '0',
			},
			{
				name: 'decay',
				detail: 'Duration of the decay phase of the envelope.',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Duration of the sustain phase of the envelope. When -1 (the default) will auto-stretch.',
				default: '-1',
			},
			{
				name: 'release',
				detail: 'Duration of the release phase of the envelope.',
				default: '0',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff_attack',
				detail:
					"Attack time for cutoff filter. Amount of time (in beats) for sound to reach full cutoff value. Default value is set to match amp envelope's attack value.",
				default: 'attack',
			},
			{
				name: 'cutoff_decay',
				detail:
					"Decay time for cutoff filter. Amount of time (in beats) for sound to move from full cutoff value (cutoff attack level) to the cutoff sustain level. Default value is set to match amp envelope's decay value.",
				default: 'decay',
			},
			{
				name: 'cutoff_sustain',
				detail:
					'Amount of time for cutoff value to remain at sustain level in beats. When -1 (the default) will auto-stretch.',
				default: 'sustain',
			},
			{
				name: 'cutoff_release',
				detail:
					"Amount of time (in beats) for sound to move from cutoff sustain value to cutoff min value. Default value is set to match amp envelope's release value.",
				default: 'release',
			},
			{
				name: 'cutoff_attack_level',
				detail: 'The peak cutoff (value of cutoff at peak of attack) as a MIDI note.',
				default: 'cutoff',
			},
			{
				name: 'cutoff_decay_level',
				detail: 'The level of cutoff after the decay phase as a MIDI note.',
				default: 'cutoff',
			},
			{
				name: 'cutoff_sustain_level',
				detail: 'The sustain cutoff (value of cutoff at sustain time) as a MIDI note.',
				default: 'cutoff',
			},
			{
				name: 'cutoff_env_curve',
				detail:
					'Select the shape of the curve between levels in the cutoff envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff_min',
				detail: 'The minimum cutoff value.',
				default: '30',
				can_slide: true,
			},
			{
				name: 'rate',
				detail:
					'Rate with which to play back - default is 1. Playing the sample at rate 2 will play it back at double the normal speed. This will have the effect of doubling the frequencies in the sample and halving the playback time. Use rates lower than 1 to slow the sample down. Negative rates will play the sample in reverse.',
				default: '1',
			},
			{
				name: 'start',
				detail:
					'A fraction (between 0 and 1) representing where in the sample to start playback. 1 represents the end of the sample, 0.5 half-way through etc.',
				default: '0',
			},
			{
				name: 'finish',
				detail:
					'A fraction (between 0 and 1) representing where in the sample to finish playback. 1 represents the end of the sample, 0.5 half-way through etc.',
				default: '1',
			},
			{
				name: 'res',
				detail:
					'Filter resonance as a value between 0 and 1. Only functional if a cutoff value is specified. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'norm',
				detail:
					'Normalise the audio (make quieter parts of the sample louder and louder parts quieter) - this is similar to the normaliser FX. This may emphasise any clicks caused by clipping.',
				default: '0',
			},
			{
				name: 'pitch',
				detail: 'write me',
				default: '0',
				can_slide: true,
			},
		],
		id: 'stereo_player',
		detail: '',
	},
	{
		name: 'Blade Runner style strings',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'vibrato_rate',
				detail:
					'Number of wobbles per second. For realism this should be between 6 and 8, maybe even faster for really high notes.',
				default: '6',
				can_slide: true,
			},
			{
				name: 'vibrato_depth',
				detail:
					'Amount of variation around the central note. 1 is the sensible maximum (but you can go up to 5 if you want a special effect), 0 would mean no vibrato. Works well around 0.15 but you can experiment.',
				default: '0.15',
				can_slide: true,
			},
			{
				name: 'vibrato_delay',
				detail: 'How long in seconds before the vibrato kicks in.',
				default: '0.5',
			},
		],
		id: 'blade',
		detail:
			'Straight from the 70s, evoking the mists of Blade Runner, this simple electro-style string synth is based on filtered saw waves and a variable vibrato.',
	},
	{
		name: 'SynthPiano',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`. Note that the piano synth can only play whole tones such as 60 and does not handle floats such as 60.3',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'vel',
				detail: 'Velocity of keypress.',
				default: '0.2',
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. With the piano synth, this opt can only have the effect of shortening the attack phase, not prolonging it.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level). With the piano synth, this opt can only have the effect of controlling the amp within the natural duration of the note and can not prolong the sound.',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. With the piano synth, this opt can only have the effect of controlling the amp within the natural duration of the note and can not prolong the sound.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. With the piano synth, this opt can only have the effect of controlling the amp within the natural duration of the note and can not prolong the sound.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'hard',
				detail: 'Hardness of keypress.',
				default: '0.5',
			},
		],
		id: 'piano',
		detail:
			'A basic piano synthesiser. Note that due to the plucked nature of this synth the envelope opts such as `attack:`, `sustain:` and `release:` do not work as expected. They can only shorten the natural length of the note, not prolong it. Also, the `note:` opt will only honour whole tones.',
	},
	{
		name: 'SynthPluck',
		options: [
			{
				name: 'note',
				detail:
					'Note to play. Either a MIDI number or a symbol representing a note. For example: `30`, `52`, `:C`, `:C2`, `:Eb4`, or `:Ds3`. Note that the piano synth can only play whole tones such as 60 and does not handle floats such as 60.3',
				default: '52',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. With the piano synth, this opt can only have the effect of controlling the amp within the natural duration of the note and can not prolong the sound.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. With the piano synth, this opt can only have the effect of controlling the amp within the natural duration of the note and can not prolong the sound.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level). With the piano synth, this opt can only have the effect of controlling the amp within the natural duration of the note and can not prolong the sound.',
				default: '0',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'noise_amp',
				detail: 'Amplitude of source (pink) noise.',
				default: '0.8',
			},
			{
				name: 'max_delay_time',
				detail: 'Maximum length of the delay line buffer.',
				default: '0.125',
			},
			{
				name: 'pluck_decay',
				detail:
					"How long the pluck takes to stabilise on a note. This doesn't have a dramatic effect on the sound.",
				default: '30',
			},
		],
		id: 'pluck',
		detail:
			'A basic plucked string synthesiser that uses Karplus-Strong synthesis. Note that due to the plucked nature of this synth the envelope opts such as `attack:`, `sustain:` and `release:` do not work as expected. They can only shorten the natural length of the note, not prolong it. Also, the `note:` opt will only honour whole tones.',
	},
	{
		name: 'Sound In',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
		],
		id: 'sound_in',
		detail: 'Please write documentation!',
	},
	{
		name: 'Noise',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '110',
				can_slide: true,
			},
		],
		id: 'noise',
		detail:
			'Noise that contains equal amounts of energy at every frequency - comparable to radio static. Useful for generating percussive sounds such as snares and hand claps. Also useful for simulating wind or sea effects.',
	},
	{
		name: 'Pink Noise',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '110',
				can_slide: true,
			},
		],
		id: 'pnoise',
		detail:
			'Noise whose spectrum falls off in power by 3 dB per octave. Useful for generating percussive sounds such as snares and hand claps. Also useful for simulating wind or sea effects.',
	},
	{
		name: 'Brown Noise',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '110',
				can_slide: true,
			},
		],
		id: 'bnoise',
		detail:
			'Noise whose spectrum falls off in power by 6 dB per octave. Useful for generating percussive sounds such as snares and hand claps. Also useful for simulating wind or sea effects.',
	},
	{
		name: 'Grey Noise',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '110',
				can_slide: true,
			},
		],
		id: 'gnoise',
		detail:
			'Generates noise which results from flipping random bits in a word. The spectrum is emphasised towards lower frequencies. Useful for generating percussive sounds such as snares and hand claps. Also useful for simulating wind or sea effects.',
	},
	{
		name: 'Clip Noise',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'attack',
				detail:
					'Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'decay',
				detail:
					'Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).',
				default: '0',
			},
			{
				name: 'sustain',
				detail:
					'Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.',
				default: '0',
			},
			{
				name: 'release',
				detail:
					'Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.',
				default: '1',
			},
			{
				name: 'attack_level',
				detail: 'Amplitude level reached after attack phase and immediately before decay phase',
				default: '1',
			},
			{
				name: 'decay_level',
				detail:
					'Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set',
				default: 'sustain_level',
			},
			{
				name: 'sustain_level',
				detail: 'Amplitude level reached after decay phase and immediately before release phase.',
				default: '1',
			},
			{
				name: 'env_curve',
				detail:
					'Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed',
				default: '2',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '110',
				can_slide: true,
			},
		],
		id: 'cnoise',
		detail:
			'Generates noise whose values are either -1 or 1. This produces the maximum energy for the least peak to peak amplitude. Useful for generating percussive sounds such as snares and hand claps. Also useful for simulating wind or sea effects.',
	},
	{
		name: 'Basic Mono Sample Player (no env)',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'rate',
				detail: 'write me',
				default: '1',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '0',
				can_slide: true,
			},
		],
		id: 'basic_mono_player',
		detail: '',
	},
	{
		name: 'Basic Stereo Sample Player (no env)',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pan',
				detail:
					'Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'rate',
				detail: 'write me',
				default: '1',
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '0',
				can_slide: true,
			},
		],
		id: 'basic_stereo_player',
		detail: '',
	},
	{
		name: 'Basic Mixer',
		options: [],
		id: 'basic_mixer',
		detail: 'Please write documentation!',
	},
]

export const fx: BuiltIn[] = [
	{
		name: 'Bitcrusher',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'sample_rate',
				detail:
					'The sample rate the audio will be resampled at. This represents the number of times per second the audio is sampled. The higher the sample rate, the closer to the original the sound will be, the lower the more low-fi it will sound. The highest sample rate is 44100 (full quality) and the lowest is ~100 (extremely low quality). Try values in between such as 1000, 3000, 8000...',
				default: '10000',
				can_slide: true,
			},
			{
				name: 'bits',
				detail:
					'The bit depth of the resampled audio. Lower bit depths make the audio sound grainy and less defined. The highest bit depth is 16 (full quality) and the lowest is 1 (lowest quality).',
				default: '8',
				can_slide: true,
			},
		],
		id: 'bitcrusher',
		detail:
			'Creates lo-fi output by decimating and deconstructing the incoming audio by lowering both the sample rate and bit depth. The default sample rate for CD audio is 44100, so use values less than that for that crunchy chip-tune sound full of artefacts and bitty distortion. Similarly, the default bit depth for CD audio is 16, so use values less than that for lo-fi sound.',
	},
	{
		name: 'krush',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'gain',
				detail: 'Amount of crushing to serve',
				default: '5',
				can_slide: true,
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'krush',
		detail: 'Krush that sound!',
	},
	{
		name: 'Reverb',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '0.4',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'room',
				detail: 'The room size - a value between 0 (no reverb) and 1 (maximum reverb).',
				default: '0.6',
				can_slide: true,
			},
		],
		id: 'reverb',
		detail:
			'Make the incoming signal sound more spacious or distant as if it were played in a large room or cave. Signal may also be dampened by reducing the amplitude of the higher frequencies.',
	},
	{
		name: 'GVerb',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '0.4',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'spread',
				detail:
					'Stereo spread. Amount of stereo spread the reverb has over the left and right channels. A value of 0 means no spread at all - left and right stereo values of the incoming signal are preserved. A value of 1 means full spread - the left and right channels are fully mixed within the reverb - bleeding into each other.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'damp',
				detail:
					'High frequency rolloff. 0 is no damping (the reverb will ring out more) and 1 dampens the reverb signal completely',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'pre_damp',
				detail:
					'High frequency rolloff of input signal. 0 is no damping (the reverb will ring out more) and 1 dampens the reverb signal completely',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'dry',
				detail: 'Amount of original dry signal present in the effect. This is distinct from mix.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'room',
				detail: 'The room size in squared metres',
				default: '10',
			},
			{
				name: 'release',
				detail: 'Time for reverberation to complete in seconds',
				default: '3',
			},
			{
				name: 'ref_level',
				detail: 'Reflection level',
				default: '0.7',
			},
		],
		id: 'gverb',
		detail:
			'Make the incoming signal sound more spacious or distant as if it were played in a large room or cave. Similar to reverb but with a more spacious feel.',
	},
	{
		name: 'Level Amplifier',
		options: [],
		id: 'level',
		detail:
			"Amplitude modifier. All FX have their own amp built in, so it may be the case that you don't specifically need an isolated amp FX. However, it is useful to be able to control the overall amplitude of a number of running synths. All sounds created in the FX block will have their amplitudes multipled by the amp level of this FX. For example, use an amp of 0 to silence all internal synths.",
	},
	{
		name: 'Echo',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'phase',
				detail: 'The time between echoes in beats.',
				default: '0.25',
				can_slide: true,
			},
			{
				name: 'decay',
				detail: 'The time it takes for the echoes to fade away in beats.',
				default: '2',
				can_slide: true,
			},
		],
		id: 'echo',
		detail:
			"Standard echo with variable phase duration (time between echoes) and decay (length of echo fade out). If you wish to have a phase duration longer than 2s, you need to specify the longest phase duration you'd like with the arg max_phase. Be warned, echo FX with very long phases can consume a lot of memory and take longer to initialise.",
	},
	{
		name: 'Slicer',
		options: [
			{
				name: 'amp',
				detail: 'The amplitude of the resulting effect.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'phase',
				detail: 'The phase duration (in beats) of the slices',
				default: '0.25',
				can_slide: true,
			},
			{
				name: 'amp_min',
				detail: 'Minimum amplitude of the slicer',
				default: '0',
				can_slide: true,
			},
			{
				name: 'amp_max',
				detail: 'Maximum amplitude of the slicer',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pulse_width',
				detail:
					'The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'phase_offset',
				detail: 'Initial phase offset.',
				default: '0',
			},
			{
				name: 'wave',
				detail: 'Control waveform used to modulate the amplitude. 0=saw, 1=pulse, 2=tri, 3=sine',
				default: '1',
			},
			{
				name: 'invert_wave',
				detail:
					'Invert control waveform (i.e. flip it on the y axis). 0=uninverted wave, 1=inverted wave.',
				default: '0',
			},
			{
				name: 'probability',
				detail:
					'Probability (as a value between 0 and 1) that a given slice will be replaced by the value of the  prob_pos opt (which defaults to 0, i.e. silence)',
				default: '0',
				can_slide: true,
			},
			{
				name: 'prob_pos',
				detail:
					'Position of the slicer that will be jumped to when the probability test passes as a value between 0 and 1',
				default: '0',
				can_slide: true,
			},
			{
				name: 'seed',
				detail: 'Seed value for rand num generator used for probability test',
				default: '0',
			},
			{
				name: 'smooth',
				detail:
					'Amount of time in seconds to transition from the current value to the next. Allows you to round off harsh edges in the slicer wave which may cause clicks.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'smooth_up',
				detail:
					'Amount of time in seconds to transition from the current value to the next only when the value is going up. This smoothing happens before the main smooth mechanism.',
				default: '0',
				can_slide: true,
			},
		],
		id: 'slicer',
		detail:
			'Modulates the amplitude of the input signal with a specific control wave and phase duration. With the default pulse wave, slices the signal in and out, with the triangle wave, fades the signal in and out and with the saw wave, phases the signal in and then dramatically out. Control wave may be inverted with the arg invert_wave for more variety.',
	},
	{
		name: 'Pan Slicer',
		options: [
			{
				name: 'amp',
				detail: 'The amplitude of the resulting effect.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'phase',
				detail: 'The phase duration (in beats) of the slices',
				default: '0.25',
				can_slide: true,
			},
			{
				name: 'pan_min',
				detail: 'Minimum pan value (-1 is the left speaker only)',
				default: '-1',
				can_slide: true,
			},
			{
				name: 'pan_max',
				detail: 'Maximum pan value (+1 is the right speaker only)',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pulse_width',
				detail:
					'The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'phase_offset',
				detail: 'Initial phase offset.',
				default: '0',
			},
			{
				name: 'wave',
				detail: 'Control waveform used to modulate the amplitude. 0=saw, 1=pulse, 2=tri, 3=sine',
				default: '1',
			},
			{
				name: 'invert_wave',
				detail:
					'Invert control waveform (i.e. flip it on the y axis). 0=uninverted wave, 1=inverted wave.',
				default: '0',
			},
			{
				name: 'probability',
				detail:
					'Probability (as a value between 0 and 1) that a given slice will be replaced by the value of the  prob_pos opt (which defaults to 0, i.e. silence)',
				default: '0',
				can_slide: true,
			},
			{
				name: 'prob_pos',
				detail:
					'Position of the slicer that will be jumped to when the probability test passes as a value between 0 and 1',
				default: '0',
				can_slide: true,
			},
			{
				name: 'seed',
				detail: 'Seed value for rand num generator used for probability test',
				default: '0',
			},
			{
				name: 'smooth',
				detail:
					'Amount of time in seconds to transition from the current value to the next. Allows you to round off harsh edges in the slicer wave which may cause clicks.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'smooth_up',
				detail:
					'Amount of time in seconds to transition from the current value to the next only when the value is going up. This smoothing happens before the main smooth mechanism.',
				default: '0',
				can_slide: true,
			},
		],
		id: 'panslicer',
		detail:
			'Slice the pan automatically from left to right. Behaves similarly to slicer and wobble FX but modifies stereo panning of sound in left and right speakers. Default slice wave form is square (hard slicing between left and right) however other wave forms can be set with the `wave:` opt.',
	},
	{
		name: 'Wobble',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'phase',
				detail: 'The phase duration (in beats) for filter modulation cycles',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'cutoff_min',
				detail:
					'Minimum (MIDI) note that filter will move to whilst wobbling. Choose a lower note for a higher range of movement. Full range of movement is the distance between cutoff_max and cutoff_min',
				default: '60',
				can_slide: true,
			},
			{
				name: 'cutoff_max',
				detail:
					'Maximum (MIDI) note that filter will move to whilst wobbling. Choose a higher note for a higher range of movement. Full range of movement is the distance between cutoff_max and cutoff_min',
				default: '120',
				can_slide: true,
			},
			{
				name: 'res',
				detail:
					'Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.',
				default: '0.8',
				can_slide: true,
			},
			{
				name: 'phase_offset',
				detail: 'Initial modulation phase offset (a value between 0 and 1).',
				default: '0',
			},
			{
				name: 'wave',
				detail:
					'Wave shape of wobble. Use 0 for saw wave, 1 for pulse, 2 for triangle wave and 3 for a sine wave.',
				default: '0',
			},
			{
				name: 'invert_wave',
				detail:
					'Invert control waveform (i.e. flip it on the y axis). 0=uninverted wave, 1=inverted wave.',
				default: '0',
			},
			{
				name: 'pulse_width',
				detail: 'Only valid if wave is type pulse.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'filter',
				detail:
					'Filter used for wobble effect. Use 0 for a resonant low pass filter or 1 for a resonant high pass filter',
				default: '0',
			},
			{
				name: 'probability',
				detail:
					'Probability (as a value between 0 and 1) that a given wobble will be replaced by the value of the  prob_pos opt (which defaults to 0, i.e. min_cutoff)',
				default: '0',
				can_slide: true,
			},
			{
				name: 'prob_pos',
				detail:
					'Position of the wobble that will be jumped to when the probability test passes as a value between 0 and 1',
				default: '0',
				can_slide: true,
			},
			{
				name: 'seed',
				detail: 'Seed value for rand num generator used for probability test',
				default: '0',
			},
			{
				name: 'smooth',
				detail:
					'Amount of time in seconds to transition from the current value to the next. Allows you to round off harsh edges in the slicer wave which may cause clicks.',
				default: '0',
				can_slide: true,
			},
			{
				name: 'smooth_up',
				detail:
					'Amount of time in seconds to transition from the current value to the next only when the value is going up. This smoothing happens before the main smooth mechanism.',
				default: '0',
				can_slide: true,
			},
		],
		id: 'wobble',
		detail:
			'Versatile wobble FX. Will repeatedly modulate a range of filters (rlpf, rhpf) between two cutoff values using a range of control wave forms (saw, pulse, tri, sine). You may alter the phase duration of the wobble, and the resonance of the filter. Combines well with the dsaw synth for crazy dub wobbles. Cutoff value is at cutoff_min at the start of phase',
	},
	{
		name: 'Techno from IXI Lang',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'phase',
				detail: 'The phase duration (in beats) for filter modulation cycles',
				default: '4',
				can_slide: true,
			},
			{
				name: 'phase_offset',
				detail: 'Initial modulation phase offset (a value between 0 and 1).',
				default: '0',
			},
			{
				name: 'cutoff_min',
				detail:
					'Minimum (MIDI) note that filter will move to whilst wobbling. Choose a lower note for a higher range of movement. Full range of movement is the distance between cutoff_max and cutoff_min',
				default: '60',
				can_slide: true,
			},
			{
				name: 'cutoff_max',
				detail:
					'Maximum (MIDI) note that filter will move to whilst wobbling. Choose a higher note for a higher range of movement. Full range of movement is the distance between cutoff_max and cutoff_min',
				default: '120',
				can_slide: true,
			},
		],
		id: 'ixi_techno',
		detail:
			'Moving resonant low pass filter between min and max cutoffs. Great for sweeping effects across long synths or samples.',
	},
	{
		name: 'Compressor',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'threshold',
				detail: 'Threshold value determining the break point between slope_below and slope_above.',
				default: '0.2',
				can_slide: true,
			},
			{
				name: 'clamp_time',
				detail:
					'Time taken for the amplitude adjustments to kick in fully (in seconds). This is usually pretty small (not much more than 10 milliseconds). Also known as the time of the attack phase',
				default: '0.01',
				can_slide: true,
			},
			{
				name: 'slope_above',
				detail:
					'Slope of the amplitude curve above the threshold. A value of 1 means that the output of signals with amplitude above the threshold will be unaffected. Greater values will magnify and smaller values will attenuate the signal.',
				default: '0.5',
				can_slide: true,
			},
			{
				name: 'slope_below',
				detail:
					'Slope of the amplitude curve below the threshold. A value of 1 means that the output of signals with amplitude below the threshold will be unaffected. Greater values will magnify and smaller values will attenuate the signal.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'compressor',
		detail:
			"Compresses the dynamic range of the incoming signal. Equivalent to automatically turning the amp down when the signal gets too loud and then back up again when it's quiet. Useful for ensuring the containing signal doesn't overwhelm other aspects of the sound. Also a general purpose hard-knee dynamic range processor which can be tuned via the opts to both expand and compress the signal.",
	},
	{
		name: 'Whammy',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'transpose',
				detail: 'This is how much to transpose the input, expressed as a midi pitch.',
				default: '12',
				can_slide: true,
			},
			{
				name: 'max_delay_time',
				detail: "The max delay time to be used for the effect. This shouldn't need to be adjusted.",
				default: '1',
			},
			{
				name: 'deltime',
				detail: "The delay time to be used for the effect. This shouldn't need to be adjusted.",
				default: '0.05',
			},
		],
		id: 'whammy',
		detail:
			"A cheap sounding transposition effect, with a slightly robotic edge. Good for adding alien sounds and harmonies to everything from beeps to guitar samples. It's similar to pitch shift although not as smooth sounding.",
	},
	{
		name: 'Resonant Low Pass Filter',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'rlpf',
		detail:
			'Dampens the parts of the signal that are higher than the cutoff point (typically the crunchy fizzy harmonic overtones) and keeps the lower parts (typically the bass/mid of the sound). The resonant part of the resonant low pass filter emphasises/resonates the frequencies around the cutoff point. The amount of emphasis is controlled by the res opt with a higher res resulting in greater resonance. High amounts of resonance (rq ~1) can create a whistling sound around the cutoff frequency.',
	},
	{
		name: 'Normalised Resonant Low Pass Filter',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'nrlpf',
		detail:
			'Dampens the parts of the signal that are higher than the cutoff point (typically the crunchy fizzy harmonic overtones) and keeps the lower parts (typically the bass/mid of the sound). The resonant part of the resonant low pass filter emphasises/resonates the frequencies around the cutoff point. The amount of emphasis is controlled by the res opt with a higher res resulting in greater resonance. High amounts of resonance (rq ~1) can create a whistling sound around the cutoff frequency.',
	},
	{
		name: 'Resonant High Pass Filter',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'rhpf',
		detail:
			'Dampens the parts of the signal that are lower than the cutoff point (typically the bass of the sound) and keeps the higher parts (typically the crunchy fizzy harmonic overtones). The resonant part of the resonant high pass filter emphasises/resonates the frequencies around the cutoff point. The amount of emphasis is controlled by the res opt with a higher res resulting in greater resonance. High amounts of resonance (rq ~1) can create a whistling sound around the cutoff frequency.',
	},
	{
		name: 'Normalised Resonant High Pass Filter',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'cutoff',
				detail:
					'MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'nrhpf',
		detail:
			'Dampens the parts of the signal that are lower than the cutoff point (typically the bass of the sound) and keeps the higher parts (typically the crunchy fizzy harmonic overtones). The resonant part of the resonant high pass filter emphasises/resonates the frequencies around the cutoff point. The amount of emphasis is controlled by the res opt with a higher res resulting in greater resonance. High amounts of resonance (rq ~1) can create a whistling sound around the cutoff frequency.',
	},
	{
		name: 'High Pass Filter',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'hpf',
		detail:
			'Dampens the parts of the signal that are lower than the cutoff point (typically the bass of the sound) and keeps the higher parts (typically the crunchy fizzy harmonic overtones). Choose a lower cutoff to keep more of the bass/mid and a higher cutoff to make the sound more light and crispy.',
	},
	{
		name: 'Normalised High Pass Filter',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'nhpf',
		detail:
			'A high pass filter chained to a normaliser. Ensures that the signal is both filtered by a standard high pass filter and then normalised to ensure the amplitude of the final output is constant. A high pass filter will reduce the amplitude of the resulting signal (as some of the sound has been filtered out) the normaliser can compensate for this loss (although will also have the side effect of flattening all dynamics). See doc for hpf.',
	},
	{
		name: 'Low Pass Filter',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'lpf',
		detail:
			'Dampens the parts of the signal that are higher than the cutoff point (typically the crunchy fizzy harmonic overtones) and keeps the lower parts (typically the bass/mid of the sound). Choose a higher cutoff to keep more of the high frequences/treble of the sound and a lower cutoff to make the sound more dull and only keep the bass.',
	},
	{
		name: 'Normalised Low Pass Filter.',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'nlpf',
		detail:
			'A low pass filter chained to a normaliser. Ensures that the signal is both filtered by a standard low pass filter and then normalised to ensure the amplitude of the final output is constant. A low pass filter will reduce the amplitude of the resulting signal (as some of the sound has been filtered out) the normaliser can compensate for this loss (although will also have the side effect of flattening all dynamics). See doc for lpf.',
	},
	{
		name: 'Normaliser',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'normaliser',
		detail:
			'Raise or lower amplitude of sound to a specified level. Evens out the amplitude of incoming sound across the frequency spectrum by flattening all dynamics.',
	},
	{
		name: 'Distortion',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'distortion',
		detail: 'Distorts the signal reducing clarity in favour of raw crunchy noise.',
	},
	{
		name: 'Pan',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'pan',
		detail:
			'Specify where in the stereo field the sound should be heard. A value of -1 for pan will put the sound in the left speaker, a value of 1 will put the sound in the right speaker and values in between will shift the sound accordingly.',
	},
	{
		name: 'Band Pass Filter',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'centre',
				detail: 'Centre frequency for the filter as a MIDI note.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'bpf',
		detail:
			"Combines low pass and high pass filters to only allow a 'band' of frequencies through. If the band is very narrow (a low res value like 0.0001) then the BPF will reduce the original sound, almost down to a single frequency (controlled by the centre opt).",
	},
	{
		name: 'Normalised Band Pass Filter',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'centre',
				detail: 'Centre frequency for the filter as a MIDI note.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'nbpf',
		detail:
			'Like the Band Pass Filter but normalised. The normaliser is useful here as some volume is lost when filtering the original signal.',
	},
	{
		name: 'Resonant Band Pass Filter',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'centre',
				detail: 'Centre frequency for the filter as a MIDI note.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'rbpf',
		detail:
			'Like the Band Pass Filter but with a resonance (slight volume boost) around the target frequency. This can produce an interesting whistling effect, especially when used with larger values for the res opt.',
	},
	{
		name: 'Normalised Resonant Band Pass Filter',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'centre',
				detail: 'Centre frequency for the filter as a MIDI note.',
				default: '100',
				can_slide: true,
			},
		],
		id: 'nrbpf',
		detail:
			'Like the Band Pass Filter but normalised, with a resonance (slight volume boost) around the target frequency. This can produce an interesting whistling effect, especially when used with larger values for the res opt.',
	},
	{
		name: 'Band EQ Filter',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'freq',
				detail: 'Centre frequency of the band in MIDI.',
				default: '100',
				can_slide: true,
			},
			{
				name: 'res',
				detail: 'Width of the band as a value between 0 and 1',
				default: '0.6',
				can_slide: true,
			},
		],
		id: 'band_eq',
		detail: 'Attenuate or Boost a frequency band',
	},
	{
		name: 'Hyperbolic Tangent',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'tanh',
		detail: 'Please write documentation!',
	},
	{
		name: 'Pitch shift',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'pitch_shift',
		detail:
			'Changes the pitch of a signal without affecting tempo. Does this mainly through the pitch parameter which takes a midi number to transpose by. You can also play with the other params to produce some interesting textures and sounds.',
	},
	{
		name: 'Ring Modulator',
		options: [
			{
				name: 'freq',
				detail: 'Frequency of the carrier signal (as a midi note).',
				default: '30',
				can_slide: true,
			},
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
		],
		id: 'ring_mod',
		detail:
			"Attack of the Daleks! Ring mod is a classic effect often used on soundtracks to evoke robots or aliens as it sounds hollow or metallic. We take a 'carrier' signal (a sine wave controlled by the freq opt) and modulate its amplitude using the signal given inside the fx block. This produces a wide variety of sounds - the best way to learn is to experiment!",
	},
	{
		name: 'Octaver',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'mix',
				detail:
					'The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'super_amp',
				detail: 'Volume of the signal 1 octave above the input',
				default: '1',
				can_slide: true,
			},
			{
				name: 'sub_amp',
				detail: 'Volume of the signal 1 octave below the input',
				default: '1',
				can_slide: true,
			},
		],
		id: 'octaver',
		detail:
			'This effect adds three pitches based on the input sound. The first is the original sound transposed up an octave (super_amp), the second is the original sound transposed down an octave (sub_amp) and the third is the original sound transposed down two octaves (subsub_amp).',
	},
	{
		name: 'Vowel',
		options: [
			{
				name: 'amp',
				detail:
					"The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)",
				default: '1',
				can_slide: true,
			},
			{
				name: 'pre_amp',
				detail:
					'Amplification applied to the input signal immediately before it is passed to the FX.',
				default: '1',
				can_slide: true,
			},
			{
				name: 'vowel_sound',
				detail: '1,2,3,4,5 => A,E,I,O,U',
				default: '1',
			},
		],
		id: 'vowel',
		detail:
			'This effect filters the input to match a human voice singing a certain vowel sound. Human singing voice sounds are easily achieved with a source of a saw wave with a little vibrato.',
	},
].map((f) => ({
	...f,
	options: [
		...f.options,
		{
			name: 'reps',
			default: '1',
			detail: 'Number of times to repeat this effect segment',
		},
	],
}))

const _samples: string[] = [
	'drum_heavy_kick',
	'drum_tom_mid_soft',
	'drum_tom_mid_hard',
	'drum_tom_lo_soft',
	'drum_tom_lo_hard',
	'drum_tom_hi_soft',
	'drum_tom_hi_hard',
	'drum_splash_soft',
	'drum_splash_hard',
	'drum_snare_soft',
	'drum_snare_hard',
	'drum_cymbal_soft',
	'drum_cymbal_hard',
	'drum_cymbal_open',
	'drum_cymbal_closed',
	'drum_cymbal_pedal',
	'drum_bass_soft',
	'drum_bass_hard',
	'elec_triangle',
	'elec_snare',
	'elec_lo_snare',
	'elec_hi_snare',
	'elec_mid_snare',
	'elec_cymbal',
	'elec_soft_kick',
	'elec_filt_snare',
	'elec_fuzz_tom',
	'elec_chime',
	'elec_bong',
	'elec_twang',
	'elec_wood',
	'elec_pop',
	'elec_beep',
	'elec_blip',
	'elec_blip2',
	'elec_ping',
	'elec_bell',
	'elec_flip',
	'elec_tick',
	'elec_hollow_kick',
	'elec_twip',
	'elec_plip',
	'elec_blup',
	'guit_harmonics',
	'guit_e_fifths',
	'guit_e_slide',
	'guit_em9',
	'misc_burp',
	'perc_bell',
	'perc_snap',
	'perc_snap2',
	'ambi_soft_buzz',
	'ambi_swoosh',
	'ambi_drone',
	'ambi_glass_hum',
	'ambi_glass_rub',
	'ambi_haunted_hum',
	'ambi_piano',
	'ambi_lunar_land',
	'ambi_dark_woosh',
	'ambi_choir',
	'bass_hit_c',
	'bass_hard_c',
	'bass_thick_c',
	'bass_drop_c',
	'bass_woodsy_c',
	'bass_voxy_c',
	'bass_voxy_hit_c',
	'bass_dnb_f',
	'sn_dub',
	'sn_dolf',
	'sn_zome',
	'bd_ada',
	'bd_pure',
	'bd_808',
	'bd_zum',
	'bd_gas',
	'bd_sone',
	'bd_haus',
	'bd_zome',
	'bd_boom',
	'bd_klub',
	'bd_fat',
	'bd_tek',
	'loop_industrial',
	'loop_compus',
	'loop_amen',
	'loop_amen_full',
	'loop_garzul',
	'loop_mika',
	'loop_breakbeat',
]

const sample_player = synths.find((synth) => synth.id === 'mono_player')

export const samples: BuiltIn[] = _samples.map((sample) => ({
	id: sample,
	detail: '',
	name: '',
	options: sample_player!.options,
}))
