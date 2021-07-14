import * as synthsJSON from './synths.json'
import * as fxJSON from './fx.json'

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
	{ token: 'live_loop', description: 'Create a loop running in a new thread with a given name' },
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
		default?: string
		can_slide?: boolean
	}[]
}

export const synths: BuiltIn[] = synthsJSON

export const fx: BuiltIn[] = fxJSON.map((f) => ({
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
