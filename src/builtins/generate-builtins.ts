import { writeFileSync } from 'fs'
import { join } from 'path'

const fx = `
# FX

* [Bitcrusher](#bitcrusher)
* [krush](#krush)
* [Reverb](#reverb)
* [GVerb](#gverb)
* [Level Amplifier](#level-amplifier)
* [Echo](#echo)
* [Slicer](#slicer)
* [Pan Slicer](#pan-slicer)
* [Wobble](#wobble)
* [Techno from IXI Lang](#techno-from-ixi-lang)
* [Compressor](#compressor)
* [Whammy](#whammy)
* [Resonant Low Pass Filter](#resonant-low-pass-filter)
* [Normalised Resonant Low Pass Filter](#normalised-resonant-low-pass-filter)
* [Resonant High Pass Filter](#resonant-high-pass-filter)
* [Normalised Resonant High Pass Filter](#normalised-resonant-high-pass-filter)
* [High Pass Filter](#high-pass-filter)
* [Normalised High Pass Filter](#normalised-high-pass-filter)
* [Low Pass Filter](#low-pass-filter)
* [Normalised Low Pass Filter.](#normalised-low-pass-filter.)
* [Normaliser](#normaliser)
* [Distortion](#distortion)
* [Pan](#pan)
* [Band Pass Filter](#band-pass-filter)
* [Normalised Band Pass Filter](#normalised-band-pass-filter)
* [Resonant Band Pass Filter](#resonant-band-pass-filter)
* [Normalised Resonant Band Pass Filter](#normalised-resonant-band-pass-filter)
* [Band EQ Filter](#band-eq-filter)
* [Hyperbolic Tangent](#hyperbolic-tangent)
* [Pitch shift](#pitch-shift)
* [Ring Modulator](#ring-modulator)
* [Octaver](#octaver)
* [Vowel](#vowel)
* [Flanger](#flanger)

## Bitcrusher

### Key:
  :bitcrusher

### Doc:
  Creates lo-fi output by decimating and deconstructing the incoming audio by lowering both the sample rate and bit depth. The default sample rate for CD audio is 44100, so use values less than that for that crunchy chip-tune sound full of artefacts and bitty distortion. Similarly, the default bit depth for CD audio is 16, so use values less than that for lo-fi sound.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * sample_rate:
    - doc: The sample rate the audio will be resampled at. This represents the number of times per second the audio is sampled. The higher the sample rate, the closer to the original the sound will be, the lower the more low-fi it will sound. The highest sample rate is 44100 (full quality) and the lowest is ~100 (extremely low quality). Try values in between such as 1000, 3000, 8000...
    - default: 10000
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * bits:
    - doc: The bit depth of the resampled audio. Lower bit depths make the audio sound grainy and less defined. The highest bit depth is 16 (full quality) and the lowest is 1 (lowest quality).
    - default: 8
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## krush

### Key:
  :krush

### Doc:
  Krush that sound!

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * gain:
    - doc: Amount of crushing to serve
    - default: 5
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Reverb

### Key:
  :reverb

### Doc:
  Make the incoming signal sound more spacious or distant as if it were played in a large room or cave. Signal may also be dampened by reducing the amplitude of the higher frequencies.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 0.4
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * room:
    - doc: The room size - a value between 0 (no reverb) and 1 (maximum reverb).
    - default: 0.6
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * damp:
    - doc: High frequency dampening - a value between 0 (no dampening) and 1 (maximum dampening)
    - default: 0.5
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## GVerb

### Key:
  :gverb

### Doc:
  Make the incoming signal sound more spacious or distant as if it were played in a large room or cave. Similar to reverb but with a more spacious feel.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 0.4
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * spread:
    - doc: Stereo spread. Amount of stereo spread the reverb has over the left and right channels. A value of 0 means no spread at all - left and right stereo values of the incoming signal are preserved. A value of 1 means full spread - the left and right channels are fully mixed within the reverb - bleeding into each other.
    - default: 0.5
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * damp:
    - doc: High frequency rolloff. 0 is no damping (the reverb will ring out more) and 1 dampens the reverb signal completely
    - default: 0.5
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_damp:
    - doc: High frequency rolloff of input signal. 0 is no damping (the reverb will ring out more) and 1 dampens the reverb signal completely
    - default: 0.5
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * dry:
    - doc: Amount of original dry signal present in the effect. This is distinct from mix.
    - default: 1
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * room:
    - doc: The room size in squared metres
    - default: 10
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
  * release:
    - doc: Time for reverberation to complete in seconds
    - default: 3
    - constraints: must be a value greater than 0
    - May be changed whilst playing
  * ref_level:
    - doc: Reflection level
    - default: 0.7
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
  * tail_level:
    - doc: Tail level amount
    - default: 0.5
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing


## Level Amplifier

### Key:
  :level

### Doc:
  Amplitude modifier. All FX have their own amp built in, so it may be the case that you don't specifically need an isolated amp FX. However, it is useful to be able to control the overall amplitude of a number of running synths. All sounds created in the FX block will have their amplitudes multipled by the amp level of this FX. For example, use an amp of 0 to silence all internal synths.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Echo

### Key:
  :echo

### Doc:
  Standard echo with variable phase duration (time between echoes) and decay (length of echo fade out). If you wish to have a phase duration longer than 2s, you need to specify the longest phase duration you'd like with the arg max_phase. Be warned, echo FX with very long phases can consume a lot of memory and take longer to initialise.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * phase:
    - doc: The time between echoes in beats.
    - default: 0.25
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * decay:
    - doc: The time it takes for the echoes to fade away in beats.
    - default: 2
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * max_phase:
    - doc: The maximum phase duration in beats.
    - default: 2
    - constraints: must be greater than zero
    - Can not be changed once set


## Slicer

### Key:
  :slicer

### Doc:
  Modulates the amplitude of the input signal with a specific control wave and phase duration. With the default pulse wave, slices the signal in and out, with the triangle wave, fades the signal in and out and with the saw wave, phases the signal in and then dramatically out. Control wave may be inverted with the arg invert_wave for more variety.

### Opts:
  * amp:
    - doc: The amplitude of the resulting effect.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * phase:
    - doc: The phase duration (in beats) of the slices
    - default: 0.25
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * amp_min:
    - doc: Minimum amplitude of the slicer
    - default: 0
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp_max:
    - doc: Maximum amplitude of the slicer
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pulse_width:
    - doc: The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * phase_offset:
    - doc: Initial phase offset.
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * wave:
    - doc: Control waveform used to modulate the amplitude. 0=saw, 1=pulse, 2=tri, 3=sine
    - default: 1
    - constraints: must be one of the following values: [0, 1, 2, 3]
    - May be changed whilst playing
  * invert_wave:
    - doc: Invert control waveform (i.e. flip it on the y axis). 0=uninverted wave, 1=inverted wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * probability:
    - doc: Probability (as a value between 0 and 1) that a given slice will be replaced by the value of the  prob_pos opt (which defaults to 0, i.e. silence)
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * prob_pos:
    - doc: Position of the slicer that will be jumped to when the probability test passes as a value between 0 and 1
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * seed:
    - doc: Seed value for rand num generator used for probability test
    - default: 0
    - constraints: none
    - Can not be changed once set
  * smooth:
    - doc: Amount of time in seconds to transition from the current value to the next. Allows you to round off harsh edges in the slicer wave which may cause clicks.
    - default: 0
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * smooth_up:
    - doc: Amount of time in seconds to transition from the current value to the next only when the value is going up. This smoothing happens before the main smooth mechanism.
    - default: 0
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * smooth_down:
    - doc: Amount of time in seconds to transition from the current value to the next only when the value is going down. This smoothing happens before the main smooth mechanism.
    - default: 0
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Pan Slicer

### Key:
  :panslicer

### Doc:
  Slice the pan automatically from left to right. Behaves similarly to slicer and wobble FX but modifies stereo panning of sound in left and right speakers. Default slice wave form is square (hard slicing between left and right) however other wave forms can be set with the \`wave:\` opt.

### Opts:
  * amp:
    - doc: The amplitude of the resulting effect.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * phase:
    - doc: The phase duration (in beats) of the slices
    - default: 0.25
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * pan_min:
    - doc: Minimum pan value (-1 is the left speaker only)
    - default: -1
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan_max:
    - doc: Maximum pan value (+1 is the right speaker only)
    - default: 1
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pulse_width:
    - doc: The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * phase_offset:
    - doc: Initial phase offset.
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * wave:
    - doc: Control waveform used to modulate the amplitude. 0=saw, 1=pulse, 2=tri, 3=sine
    - default: 1
    - constraints: must be one of the following values: [0, 1, 2, 3]
    - May be changed whilst playing
  * invert_wave:
    - doc: Invert control waveform (i.e. flip it on the y axis). 0=uninverted wave, 1=inverted wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * probability:
    - doc: Probability (as a value between 0 and 1) that a given slice will be replaced by the value of the  prob_pos opt (which defaults to 0, i.e. silence)
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * prob_pos:
    - doc: Position of the slicer that will be jumped to when the probability test passes as a value between 0 and 1
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * seed:
    - doc: Seed value for rand num generator used for probability test
    - default: 0
    - constraints: none
    - Can not be changed once set
  * smooth:
    - doc: Amount of time in seconds to transition from the current value to the next. Allows you to round off harsh edges in the slicer wave which may cause clicks.
    - default: 0
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * smooth_up:
    - doc: Amount of time in seconds to transition from the current value to the next only when the value is going up. This smoothing happens before the main smooth mechanism.
    - default: 0
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * smooth_down:
    - doc: Amount of time in seconds to transition from the current value to the next only when the value is going down. This smoothing happens before the main smooth mechanism.
    - default: 0
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Wobble

### Key:
  :wobble

### Doc:
  Versatile wobble FX. Will repeatedly modulate a range of filters (rlpf, rhpf) between two cutoff values using a range of control wave forms (saw, pulse, tri, sine). You may alter the phase duration of the wobble, and the resonance of the filter. Combines well with the dsaw synth for crazy dub wobbles. Cutoff value is at cutoff_min at the start of phase

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * phase:
    - doc: The phase duration (in beats) for filter modulation cycles
    - default: 0.5
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * cutoff_min:
    - doc: Minimum (MIDI) note that filter will move to whilst wobbling. Choose a lower note for a higher range of movement. Full range of movement is the distance between cutoff_max and cutoff_min
    - default: 60
    - constraints: must be zero or greater,must be a value less than 130
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff_max:
    - doc: Maximum (MIDI) note that filter will move to whilst wobbling. Choose a higher note for a higher range of movement. Full range of movement is the distance between cutoff_max and cutoff_min
    - default: 120
    - constraints: must be zero or greater,must be a value less than 130
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.8
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * phase_offset:
    - doc: Initial modulation phase offset (a value between 0 and 1).
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * wave:
    - doc: Wave shape of wobble. Use 0 for saw wave, 1 for pulse, 2 for triangle wave and 3 for a sine wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1, 2, 3]
    - May be changed whilst playing
  * invert_wave:
    - doc: Invert control waveform (i.e. flip it on the y axis). 0=uninverted wave, 1=inverted wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * pulse_width:
    - doc: Only valid if wave is type pulse.
    - default: 0.5
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * filter:
    - doc: Filter used for wobble effect. Use 0 for a resonant low pass filter or 1 for a resonant high pass filter
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * probability:
    - doc: Probability (as a value between 0 and 1) that a given wobble will be replaced by the value of the  prob_pos opt (which defaults to 0, i.e. min_cutoff)
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * prob_pos:
    - doc: Position of the wobble that will be jumped to when the probability test passes as a value between 0 and 1
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * seed:
    - doc: Seed value for rand num generator used for probability test
    - default: 0
    - constraints: none
    - Can not be changed once set
  * smooth:
    - doc: Amount of time in seconds to transition from the current value to the next. Allows you to round off harsh edges in the slicer wave which may cause clicks.
    - default: 0
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * smooth_up:
    - doc: Amount of time in seconds to transition from the current value to the next only when the value is going up. This smoothing happens before the main smooth mechanism.
    - default: 0
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * smooth_down:
    - doc: Amount of time in seconds to transition from the current value to the next only when the value is going down. This smoothing happens before the main smooth mechanism.
    - default: 0
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Techno from IXI Lang

### Key:
  :ixi_techno

### Doc:
  Moving resonant low pass filter between min and max cutoffs. Great for sweeping effects across long synths or samples.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * phase:
    - doc: The phase duration (in beats) for filter modulation cycles
    - default: 4
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * phase_offset:
    - doc: Initial modulation phase offset (a value between 0 and 1).
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * cutoff_min:
    - doc: Minimum (MIDI) note that filter will move to whilst wobbling. Choose a lower note for a higher range of movement. Full range of movement is the distance between cutoff_max and cutoff_min
    - default: 60
    - constraints: must be zero or greater,must be a value less than 130
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff_max:
    - doc: Maximum (MIDI) note that filter will move to whilst wobbling. Choose a higher note for a higher range of movement. Full range of movement is the distance between cutoff_max and cutoff_min
    - default: 120
    - constraints: must be zero or greater,must be a value less than 130
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.8
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Compressor

### Key:
  :compressor

### Doc:
  Compresses the dynamic range of the incoming signal. Equivalent to automatically turning the amp down when the signal gets too loud and then back up again when it's quiet. Useful for ensuring the containing signal doesn't overwhelm other aspects of the sound. Also a general purpose hard-knee dynamic range processor which can be tuned via the opts to both expand and compress the signal.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * threshold:
    - doc: Threshold value determining the break point between slope_below and slope_above.
    - default: 0.2
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * clamp_time:
    - doc: Time taken for the amplitude adjustments to kick in fully (in seconds). This is usually pretty small (not much more than 10 milliseconds). Also known as the time of the attack phase
    - default: 0.01
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * slope_above:
    - doc: Slope of the amplitude curve above the threshold. A value of 1 means that the output of signals with amplitude above the threshold will be unaffected. Greater values will magnify and smaller values will attenuate the signal.
    - default: 0.5
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * slope_below:
    - doc: Slope of the amplitude curve below the threshold. A value of 1 means that the output of signals with amplitude below the threshold will be unaffected. Greater values will magnify and smaller values will attenuate the signal.
    - default: 1
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * relax_time:
    - doc: Time taken for the amplitude adjustments to be released. Usually a little longer than clamp_time. If both times are too short, you can get some (possibly unwanted) artefacts. Also known as the time of the release phase.
    - default: 0.01
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Whammy

### Key:
  :whammy

### Doc:
  A cheap sounding transposition effect, with a slightly robotic edge. Good for adding alien sounds and harmonies to everything from beeps to guitar samples. It's similar to pitch shift although not as smooth sounding.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * transpose:
    - doc: This is how much to transpose the input, expressed as a midi pitch.
    - default: 12
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * max_delay_time:
    - doc: The max delay time to be used for the effect. This shouldn't need to be adjusted.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * deltime:
    - doc: The delay time to be used for the effect. This shouldn't need to be adjusted.
    - default: 0.05
    - constraints: must be zero or greater
    - Can not be changed once set
  * grainsize:
    - doc: The size of the initial grain used for transposition. This shouldn't need to be adjusted.
    - default: 0.075
    - constraints: must be zero or greater
    - Can not be changed once set


## Resonant Low Pass Filter

### Key:
  :rlpf

### Doc:
  Dampens the parts of the signal that are higher than the cutoff point (typically the crunchy fizzy harmonic overtones) and keeps the lower parts (typically the bass/mid of the sound). The resonant part of the resonant low pass filter emphasises/resonates the frequencies around the cutoff point. The amount of emphasis is controlled by the res opt with a higher res resulting in greater resonance. High amounts of resonance (rq ~1) can create a whistling sound around the cutoff frequency.

  Choose a higher cutoff to keep more of the high frequences/treble of the sound and a lower cutoff to make the sound more dull and only keep the bass.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.5
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Normalised Resonant Low Pass Filter

### Key:
  :nrlpf

### Doc:
  Dampens the parts of the signal that are higher than the cutoff point (typically the crunchy fizzy harmonic overtones) and keeps the lower parts (typically the bass/mid of the sound). The resonant part of the resonant low pass filter emphasises/resonates the frequencies around the cutoff point. The amount of emphasis is controlled by the res opt with a higher res resulting in greater resonance. High amounts of resonance (rq ~1) can create a whistling sound around the cutoff frequency.

  Choose a higher cutoff to keep more of the high frequences/treble of the sound and a lower cutoff to make the sound more dull and only keep the bass.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.5
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Resonant High Pass Filter

### Key:
  :rhpf

### Doc:
  Dampens the parts of the signal that are lower than the cutoff point (typically the bass of the sound) and keeps the higher parts (typically the crunchy fizzy harmonic overtones). The resonant part of the resonant high pass filter emphasises/resonates the frequencies around the cutoff point. The amount of emphasis is controlled by the res opt with a higher res resulting in greater resonance. High amounts of resonance (rq ~1) can create a whistling sound around the cutoff frequency.

  Choose a lower cutoff to keep more of the bass/mid and a higher cutoff to make the sound more light and crispy.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.5
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Normalised Resonant High Pass Filter

### Key:
  :nrhpf

### Doc:
  Dampens the parts of the signal that are lower than the cutoff point (typically the bass of the sound) and keeps the higher parts (typically the crunchy fizzy harmonic overtones). The resonant part of the resonant high pass filter emphasises/resonates the frequencies around the cutoff point. The amount of emphasis is controlled by the res opt with a higher res resulting in greater resonance. High amounts of resonance (rq ~1) can create a whistling sound around the cutoff frequency.

  Choose a lower cutoff to keep more of the bass/mid and a higher cutoff to make the sound more light and crispy.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.5
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## High Pass Filter

### Key:
  :hpf

### Doc:
  Dampens the parts of the signal that are lower than the cutoff point (typically the bass of the sound) and keeps the higher parts (typically the crunchy fizzy harmonic overtones). Choose a lower cutoff to keep more of the bass/mid and a higher cutoff to make the sound more light and crispy.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Normalised High Pass Filter

### Key:
  :nhpf

### Doc:
  A high pass filter chained to a normaliser. Ensures that the signal is both filtered by a standard high pass filter and then normalised to ensure the amplitude of the final output is constant. A high pass filter will reduce the amplitude of the resulting signal (as some of the sound has been filtered out) the normaliser can compensate for this loss (although will also have the side effect of flattening all dynamics). See doc for hpf.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Low Pass Filter

### Key:
  :lpf

### Doc:
  Dampens the parts of the signal that are higher than the cutoff point (typically the crunchy fizzy harmonic overtones) and keeps the lower parts (typically the bass/mid of the sound). Choose a higher cutoff to keep more of the high frequences/treble of the sound and a lower cutoff to make the sound more dull and only keep the bass.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Normalised Low Pass Filter.

### Key:
  :nlpf

### Doc:
  A low pass filter chained to a normaliser. Ensures that the signal is both filtered by a standard low pass filter and then normalised to ensure the amplitude of the final output is constant. A low pass filter will reduce the amplitude of the resulting signal (as some of the sound has been filtered out) the normaliser can compensate for this loss (although will also have the side effect of flattening all dynamics). See doc for lpf.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Normaliser

### Key:
  :normaliser

### Doc:
  Raise or lower amplitude of sound to a specified level. Evens out the amplitude of incoming sound across the frequency spectrum by flattening all dynamics.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * level:
    - doc: The peak output amplitude level at which to normalise the input.
    - default: 1
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Distortion

### Key:
  :distortion

### Doc:
  Distorts the signal reducing clarity in favour of raw crunchy noise.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * distort:
    - doc: Amount of distortion to be applied (as a value between 0 and 1)
    - default: 0.5
    - constraints: must be a value greater than or equal to 0,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Pan

### Key:
  :pan

### Doc:
  Specify where in the stereo field the sound should be heard. A value of -1 for pan will put the sound in the left speaker, a value of 1 will put the sound in the right speaker and values in between will shift the sound accordingly.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Band Pass Filter

### Key:
  :bpf

### Doc:
  Combines low pass and high pass filters to only allow a 'band' of frequencies through. If the band is very narrow (a low res value like 0.0001) then the BPF will reduce the original sound, almost down to a single frequency (controlled by the centre opt).

  With higher values for res we can simulate other filters e.g. telephone lines, by cutting off low and high frequencies.

Use FX \`:band_eq\` with a negative db for the opposite effect - to attenuate a given band of frequencies.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * centre:
    - doc: Centre frequency for the filter as a MIDI note.
    - default: 100
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.6
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Normalised Band Pass Filter

### Key:
  :nbpf

### Doc:
  Like the Band Pass Filter but normalised. The normaliser is useful here as some volume is lost when filtering the original signal.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * centre:
    - doc: Centre frequency for the filter as a MIDI note.
    - default: 100
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.6
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Resonant Band Pass Filter

### Key:
  :rbpf

### Doc:
  Like the Band Pass Filter but with a resonance (slight volume boost) around the target frequency. This can produce an interesting whistling effect, especially when used with larger values for the res opt.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * centre:
    - doc: Centre frequency for the filter as a MIDI note.
    - default: 100
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.5
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Normalised Resonant Band Pass Filter

### Key:
  :nrbpf

### Doc:
  Like the Band Pass Filter but normalised, with a resonance (slight volume boost) around the target frequency. This can produce an interesting whistling effect, especially when used with larger values for the res opt.

  The normaliser is useful here as some volume is lost when filtering the original signal.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * centre:
    - doc: Centre frequency for the filter as a MIDI note.
    - default: 100
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.5
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Band EQ Filter

### Key:
  :band_eq

### Doc:
  Attenuate or Boost a frequency band

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * freq:
    - doc: Centre frequency of the band in MIDI.
    - default: 100
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Width of the band as a value between 0 and 1
    - default: 0.6
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * db:
    - doc: Amount of boost or attenuation of the frequency band. A positive value boosts frequencies in the band, a negative value attenuates them.
    - default: 0.6
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Hyperbolic Tangent

### Key:
  :tanh

### Doc:
  Please write documentation!

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * krunch:
    - doc: Higher values progressively destroy the sound. Achieved through a balanced manipulation of pre_amp and amp such that the tanh is pushed harder with higher krunch values yet the overall amplitude stays similar.
    - default: 5
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Pitch shift

### Key:
  :pitch_shift

### Doc:
  Changes the pitch of a signal without affecting tempo. Does this mainly through the pitch parameter which takes a midi number to transpose by. You can also play with the other params to produce some interesting textures and sounds.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * window_size:
    - doc: Pitch shift works by chopping the input into tiny slices, then playing these slices at a higher or lower rate. If we make the slices small enough and overlap them, it sounds like the original sound with the pitch changed.

  The window_size is the length of the slices and is measured in seconds. It needs to be around 0.2 (200ms) or greater for pitched sounds like guitar or bass, and needs to be around 0.02 (20ms) or lower for percussive sounds like drum loops. You can experiment with this to get the best sound for your input.
    - default: 0.2
    - constraints: must be a value greater than 5.0e-05
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pitch:
    - doc: Pitch adjustment in semitones. 1 is up a semitone, 12 is up an octave, -12 is down an octave etc. Maximum upper limit of 24 (up 2 octaves). Lower limit of -72 (down 6 octaves). Decimal numbers can be used for fine tuning.
    - default: 0
    - constraints: must be a value greater than or equal to -72,must be a value less than or equal to 24
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pitch_dis:
    - doc: Pitch dispersion - how much random variation in pitch to add. Using a low value like 0.001 can help to "soften up" the metallic sounds, especially on drum loops. To be really technical, pitch_dispersion is the maximum random deviation of the pitch from the pitch ratio (which is set by the pitch param)
    - default: 0.0
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * time_dis:
    - doc: Time dispersion - how much random delay before playing each grain (measured in seconds). Again, low values here like 0.001 can help to soften up metallic sounds introduced by the effect. Large values are also fun as they can make soundscapes and textures from the input, although you will most likely lose the rhythm of the original. NB - This won't have an effect if it's larger than window_size.
    - default: 0.0
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Ring Modulator

### Key:
  :ring_mod

### Doc:
  Attack of the Daleks! Ring mod is a classic effect often used on soundtracks to evoke robots or aliens as it sounds hollow or metallic. We take a 'carrier' signal (a sine wave controlled by the freq opt) and modulate its amplitude using the signal given inside the fx block. This produces a wide variety of sounds - the best way to learn is to experiment!

### Opts:
  * freq:
    - doc: Frequency of the carrier signal (as a midi note).
    - default: 30
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_amp:
    - doc: Amplitude of the modulation
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Octaver

### Key:
  :octaver

### Doc:
  This effect adds three pitches based on the input sound. The first is the original sound transposed up an octave (super_amp), the second is the original sound transposed down an octave (sub_amp) and the third is the original sound transposed down two octaves (subsub_amp).

  The way the transpositions are done adds some distortion/fuzz, particularly to the lower octaves, whilst the upper octave has a 'cheap' quality. This effect is often used in guitar effects pedals but it can work with other sounds too. There's a great description of the science behind this on Wikipedia here: https://en.wikipedia.org/wiki/Octave_effect

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * super_amp:
    - doc: Volume of the signal 1 octave above the input
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * sub_amp:
    - doc: Volume of the signal 1 octave below the input
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * subsub_amp:
    - doc: Volume of the signal 2 octaves below the input
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Vowel

### Key:
  :vowel

### Doc:
  This effect filters the input to match a human voice singing a certain vowel sound. Human singing voice sounds are easily achieved with a source of a saw wave with a little vibrato.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * vowel_sound:
    - doc: 1,2,3,4,5 => A,E,I,O,U
    - default: 1
    - constraints: must be one of the following values: [1, 2, 3, 4, 5]
    - May be changed whilst playing
  * voice:
    - doc: 0,1,2,3,4 => Soprano,Alto,Counter Tenor, Tenor, Bass
    - default: 0
    - constraints: must be one of the following values: [0, 1, 2, 3, 4]
    - May be changed whilst playing


## Flanger

### Key:
  :flanger

### Doc:
  Mix the incoming signal with a copy of itself which has a rate modulating faster and slower than the original. Creates a swirling/whooshing effect.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mix:
    - doc: The amount (percentage) of FX present in the resulting sound represented as a value between 0 and 1. For example, a mix of 0 means that only the original sound is heard, a mix of 1 means that only the FX is heard (typically the default) and a mix of 0.5 means that half the original and half of the FX is heard.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplification applied to the input signal immediately before it is passed to the FX.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * phase:
    - doc: Phase duration in beats of flanger modulation.
    - default: 4
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
* pulse_width:
    - doc: The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * phase_offset:
    - doc: Initial modulation phase offset (a value between 0 and 1).
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * wave:
    - doc: Wave type - 0 saw, 1 pulse, 2 triangle, 3 sine, 4 cubic. Different waves will produce different flanging modulation effects.
    - default: 4
    - constraints: must be one of the following values: [0, 1, 2, 3, 4]
    - May be changed whilst playing
  * invert_wave:
    - doc: Invert flanger control waveform (i.e. flip it on the y axis). 0=uninverted wave, 1=inverted wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * stereo_invert_wave:
    - doc: Make the flanger control waveform in the left ear an inversion of the control waveform in the right ear. 0=uninverted wave, 1=inverted wave. This happens after the standard wave inversion with param :invert_wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * delay:
    - doc: Amount of delay time between original and flanged version of audio.
    - default: 5
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * max_delay:
    - doc: Max delay time. Used to set internal buffer size.
    - default: 20
    - constraints: must be zero or greater
    - Can not be changed once set
  * depth:
    - doc: Flange depth - greater depths produce a more prominent effect.
    - default: 5
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * decay:
    - doc: Flange decay time in ms
    - default: 2
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * feedback:
    - doc: Amount of feedback.
    - default: 0
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * invert_flange:
    - doc: Invert flanger signal. 0=no inversion, 1=inverted signal.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
`

const synths = `
# Synths

* [Dull Bell](#dull-bell)
* [Pretty Bell](#pretty-bell)
* [Sine Wave](#sine-wave)
* [Sine Wave](#sine-wave)
* [Saw Wave](#saw-wave)
* [Pulse Wave](#pulse-wave)
* [Pulse Wave with sub](#pulse-wave-with-sub)
* [Square Wave](#square-wave)
* [Triangle Wave](#triangle-wave)
* [Detuned Saw wave](#detuned-saw-wave)
* [Detuned Pulse Wave](#detuned-pulse-wave)
* [Detuned Triangle Wave](#detuned-triangle-wave)
* [Basic FM synthesis](#basic-fm-synthesis)
* [Basic FM synthesis with frequency modulation.](#basic-fm-synthesis-with-frequency-modulation.)
* [Modulated Saw Wave](#modulated-saw-wave)
* [Modulated Detuned Saw Waves](#modulated-detuned-saw-waves)
* [Modulated Sine Wave](#modulated-sine-wave)
* [Modulated Sine Wave](#modulated-sine-wave)
* [Modulated Triangle Wave](#modulated-triangle-wave)
* [Modulated Pulse](#modulated-pulse)
* [TB-303 Emulation](#tb-303-emulation)
* [Supersaw](#supersaw)
* [Hoover](#hoover)
* [The Prophet](#the-prophet)
* [Zawa](#zawa)
* [Dark Ambience](#dark-ambience)
* [Growl](#growl)
* [Hollow](#hollow)
* [Mono Sample Player](#mono-sample-player)
* [Stereo Sample Player](#stereo-sample-player)
* [Blade Runner style strings](#blade-runner-style-strings)
* [SynthPiano](#synthpiano)
* [SynthPluck](#synthpluck)
* [Sound In](#sound-in)
* [Noise](#noise)
* [Pink Noise](#pink-noise)
* [Brown Noise](#brown-noise)
* [Grey Noise](#grey-noise)
* [Clip Noise](#clip-noise)
* [Basic Mono Sample Player (no env)](#basic-mono-sample-player-(no-env))
* [Basic Stereo Sample Player (no env)](#basic-stereo-sample-player-(no-env))
* [Basic Mixer](#basic-mixer)
* [Main Mixer](#main-mixer)

## Dull Bell

### Key:
  :dull_bell

### Doc:
  A simple dull discordant bell sound.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set


## Pretty Bell

### Key:
  :pretty_bell

### Doc:
  A pretty bell sound. Works well with short attacks and long decays.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set


## Sine Wave

### Key:
  :beep

### Doc:
  A simple pure sine wave. The sine wave is the simplest, purest sound there is and is the fundamental building block of all noise. The mathematician Fourier demonstrated that any sound could be built out of a number of sine waves (the more complex the sound, the more sine waves needed). Have a play combining a number of sine waves to design your own sounds!

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set


## Sine Wave

### Key:
  :sine

### Doc:
  A simple pure sine wave. The sine wave is the simplest, purest sound there is and is the fundamental building block of all noise. The mathematician Fourier demonstrated that any sound could be built out of a number of sine waves (the more complex the sound, the more sine waves needed). Have a play combining a number of sine waves to design your own sounds!

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set


## Saw Wave

### Key:
  :saw

### Doc:
  A saw wave with a low pass filter. Great for using with FX such as the built in low pass filter (available via the cutoff arg) due to the complexity and thickness of the sound.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set


## Pulse Wave

### Key:
  :pulse

### Doc:
  A simple pulse wave with a low pass filter. This defaults to a square wave, but the timbre can be changed dramatically by adjusting the pulse_width arg between 0 and 1. The pulse wave is thick and heavy with lower notes and is a great ingredient for bass sounds.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pulse_width:
    - doc: The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Pulse Wave with sub

### Key:
  :subpulse

### Doc:
  A pulse wave with a sub sine wave passed through a low pass filter. The pulse wave is thick and heavy with lower notes and is a great ingredient for bass sounds - especially with the sub wave.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pulse_width:
    - doc: The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * sub_amp:
    - doc: Amplitude for the additional sine wave.
    - default: 1
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * sub_detune:
    - doc: Amount of detune from the note for the additional sine wave. Default is -12
    - default: -12
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Square Wave

### Key:
  :square

### Doc:
  A simple square wave with a low pass filter. The square wave is thick and heavy with lower notes and is a great ingredient for bass sounds. If you wish to modulate the width of the square wave see the synth pulse.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Triangle Wave

### Key:
  :tri

### Doc:
  A simple triangle wave with a low pass filter.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pulse_width:
    - doc: The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Detuned Saw wave

### Key:
  :dsaw

### Doc:
  A pair of detuned saw waves passed through a low pass filter. Two saw waves with slightly different frequencies generates a nice thick sound which is the basis for a lot of famous synth sounds. Thicken the sound by increasing the detune value, or create an octave-playing synth by choosing a detune of 12 (12 MIDI notes is an octave).

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * detune:
    - doc: Distance (in MIDI notes) between components of sound. Affects thickness, sense of tuning and harmony. Tiny values such as 0.1 create a thick sound. Larger values such as 0.5 make the tuning sound strange. Even bigger values such as 5 create chord-like sounds.
    - default: 0.1
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Detuned Pulse Wave

### Key:
  :dpulse

### Doc:
  A pair of detuned pulse waves passed through a low pass filter. Two pulse waves with slightly different frequencies generates a nice thick sound which can be used as a basis for some nice bass sounds. Thicken the sound by increasing the detune value, or create an octave-playing synth by choosing a detune of 12 (12 MIDI notes is an octave). Each pulse wave can also have individual widths (although the default is for the detuned pulse to mirror the width of the main pulse).

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * detune:
    - doc: Distance (in MIDI notes) between components of sound. Affects thickness, sense of tuning and harmony. Tiny values such as 0.1 create a thick sound. Larger values such as 0.5 make the tuning sound strange. Even bigger values such as 5 create chord-like sounds.
    - default: 0.1
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pulse_width:
    - doc: The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * dpulse_width:
    - doc: The width of the second detuned pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.
    - default: pulse_width
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Detuned Triangle Wave

### Key:
  :dtri

### Doc:
  A pair of detuned triangle waves passed through a low pass filter. Two pulse waves with slightly different frequencies generates a nice thick sound which can be used as a basis for some nice bass sounds. Thicken the sound by increasing the detune value, or create an octave-playing synth by choosing a detune of 12 (12 MIDI notes is an octave).

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * detune:
    - doc: Distance (in MIDI notes) between components of sound. Affects thickness, sense of tuning and harmony. Tiny values such as 0.1 create a thick sound. Larger values such as 0.5 make the tuning sound strange. Even bigger values such as 5 create chord-like sounds.
    - default: 0.1
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Basic FM synthesis

### Key:
  :fm

### Doc:
  A sine wave with a fundamental frequency which is modulated at audio rate by another sine wave with a specific modulation, division and depth. Useful for generating a wide range of sounds by playing with the divisor and depth params. Great for deep powerful bass and crazy 70s sci-fi sounds.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * divisor:
    - doc: Modifies the frequency of the modulator oscillator relative to the carrier. Don't worry too much about what this means - just try different numbers out!
    - default: 2
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * depth:
    - doc: Modifies the depth of the carrier wave used to modify fundamental frequency. Don't worry too much about what this means - just try different numbers out!
    - default: 1
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Basic FM synthesis with frequency modulation.

### Key:
  :mod_fm

### Doc:
  The FM synth modulating between two notes - the duration of the modulation can be modified using the mod_phase arg, the range (number of notes jumped between) by the mod_range arg and the width of the jumps by the mod_width param. The FM synth is a sine wave with a fundamental frequency which is modulated at audio rate by another sine wave with a specific modulation, division and depth. Useful for generating a wide range of sounds by playing with the \`:divisor\` and \`:depth\` params. Great for deep powerful bass and crazy 70s sci-fi sounds.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * divisor:
    - doc: Modifies the frequency of the modulator oscillator relative to the carrier. Don't worry too much about what this means - just try different numbers out!
    - default: 2
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * depth:
    - doc: Modifies the depth of the carrier wave used to modify fundamental frequency. Don't worry too much about what this means - just try different numbers out!
    - default: 1
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase:
    - doc: Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.
    - default: 0.25
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
  * mod_range:
    - doc: The size of gap between modulation notes. A gap of 12 is one octave.
    - default: 5
    - constraints: none
    - May be changed whilst playing
  * mod_pulse_width:
    - doc: The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
  * mod_phase_offset:
    - doc: Initial modulation phase offset (a value between 0 and 1).
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * mod_invert_wave:
    - doc: Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * mod_wave:
    - doc: Wave shape of mod wave. 0=saw wave, 1=pulse, 2=triangle wave and 3=sine wave.
    - default: 1
    - constraints: must be one of the following values: [0, 1, 2, 3]
    - May be changed whilst playing


## Modulated Saw Wave

### Key:
  :mod_saw

### Doc:
  A saw wave passed through a low pass filter which modulates between two separate notes via a variety of control waves.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase:
    - doc: Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.
    - default: 0.25
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * mod_range:
    - doc: The size of gap between modulation notes. A gap of 12 is one octave.
    - default: 5
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_pulse_width:
    - doc: The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase_offset:
    - doc: Initial modulation phase offset (a value between 0 and 1).
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * mod_invert_wave:
    - doc: Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * mod_wave:
    - doc: Wave shape of mod wave. 0=saw wave, 1=pulse, 2=triangle wave and 3=sine wave.
    - default: 1
    - constraints: must be one of the following values: [0, 1, 2, 3]
    - May be changed whilst playing


## Modulated Detuned Saw Waves

### Key:
  :mod_dsaw

### Doc:
  A pair of detuned saw waves (see the dsaw synth) which are modulated between two fixed notes at a given rate.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase:
    - doc: Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.
    - default: 0.25
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * mod_range:
    - doc: The size of gap between modulation notes. A gap of 12 is one octave.
    - default: 5
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_pulse_width:
    - doc: The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase_offset:
    - doc: Initial modulation phase offset (a value between 0 and 1).
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * mod_invert_wave:
    - doc: Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * mod_wave:
    - doc: Wave shape of mod wave. 0=saw wave, 1=pulse, 2=triangle wave and 3=sine wave.
    - default: 1
    - constraints: must be one of the following values: [0, 1, 2, 3]
    - May be changed whilst playing
  * detune:
    - doc: Distance (in MIDI notes) between components of sound. Affects thickness, sense of tuning and harmony. Tiny values such as 0.1 create a thick sound. Larger values such as 0.5 make the tuning sound strange. Even bigger values such as 5 create chord-like sounds.
    - default: 0.1
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Modulated Sine Wave

### Key:
  :mod_sine

### Doc:
  A sine wave passed through a low pass filter which modulates between two separate notes via a variety of control waves.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase:
    - doc: Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.
    - default: 0.25
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * mod_range:
    - doc: The size of gap between modulation notes. A gap of 12 is one octave.
    - default: 5
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_pulse_width:
    - doc: The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase_offset:
    - doc: Initial modulation phase offset (a value between 0 and 1).
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * mod_invert_wave:
    - doc: Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * mod_wave:
    - doc: Wave shape of mod wave. 0=saw wave, 1=pulse, 2=triangle wave and 3=sine wave.
    - default: 1
    - constraints: must be one of the following values: [0, 1, 2, 3]
    - May be changed whilst playing


## Modulated Sine Wave

### Key:
  :mod_beep

### Doc:
  A sine wave passed through a low pass filter which modulates between two separate notes via a variety of control waves.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase:
    - doc: Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.
    - default: 0.25
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * mod_range:
    - doc: The size of gap between modulation notes. A gap of 12 is one octave.
    - default: 5
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_pulse_width:
    - doc: The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase_offset:
    - doc: Initial modulation phase offset (a value between 0 and 1).
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * mod_invert_wave:
    - doc: Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * mod_wave:
    - doc: Wave shape of mod wave. 0=saw wave, 1=pulse, 2=triangle wave and 3=sine wave.
    - default: 1
    - constraints: must be one of the following values: [0, 1, 2, 3]
    - May be changed whilst playing


## Modulated Triangle Wave

### Key:
  :mod_tri

### Doc:
  A triangle wave passed through a low pass filter which modulates between two separate notes via a variety of control waves.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase:
    - doc: Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.
    - default: 0.25
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * mod_range:
    - doc: The size of gap between modulation notes. A gap of 12 is one octave.
    - default: 5
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_pulse_width:
    - doc: The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase_offset:
    - doc: Initial modulation phase offset (a value between 0 and 1).
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * mod_invert_wave:
    - doc: Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * mod_wave:
    - doc: Wave shape of mod wave. 0=saw wave, 1=pulse, 2=triangle wave and 3=sine wave.
    - default: 1
    - constraints: must be one of the following values: [0, 1, 2, 3]
    - May be changed whilst playing


## Modulated Pulse

### Key:
  :mod_pulse

### Doc:
  A pulse wave with a low pass filter modulating between two notes via a variety of control waves (see mod_wave: arg). The pulse wave defaults to a square wave, but the timbre can be changed dramatically by adjusting the pulse_width arg between 0 and 1.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase:
    - doc: Phase duration in beats of oscillations between the two notes. Time it takes to switch between the notes.
    - default: 0.25
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * mod_range:
    - doc: The size of gap between modulation notes. A gap of 12 is one octave.
    - default: 5
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_pulse_width:
    - doc: The width of the modulated pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Only valid if mod wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * mod_phase_offset:
    - doc: Initial modulation phase offset (a value between 0 and 1).
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * mod_invert_wave:
    - doc: Invert mod waveform (i.e. flip it on the y axis). 0=normal wave, 1=inverted wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * mod_wave:
    - doc: Wave shape of mod wave. 0=saw wave, 1=pulse, 2=triangle wave and 3=sine wave.
    - default: 1
    - constraints: must be one of the following values: [0, 1, 2, 3]
    - May be changed whilst playing
  * pulse_width:
    - doc: The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## TB-303 Emulation

### Key:
  :tb303

### Doc:
  Emulation of the classic Roland TB-303 Bass Line synthesiser. Overdrive the res (i.e. use very large values) for that classic late 80s acid sound.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: The maximum cutoff value as a MIDI note
    - default: 120
    - constraints: must be a value less than or equal to 130
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff_min:
    - doc: The minimum cutoff value.
    - default: 30
    - constraints: must be a value less than or equal to 130
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff_attack:
    - doc: Attack time for cutoff filter. Amount of time (in beats) for sound to reach full cutoff value. Default value is set to match amp envelope's attack value.
    - default: attack
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * cutoff_decay:
    - doc: Decay time for cutoff filter. Amount of time (in beats) for sound to move from full cutoff value (cutoff attack level) to the cutoff sustain level. Default value is set to match amp envelope's decay value.
    - default: decay
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * cutoff_sustain:
    - doc: Amount of time for cutoff value to remain at sustain level in beats. Default value is set to match amp envelope's sustain value.
    - default: sustain
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * cutoff_release:
    - doc: Amount of time (in beats) for sound to move from cutoff sustain value to cutoff min value. Default value is set to match amp envelope's release value.
    - default: release
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * cutoff_attack_level:
    - doc: The peak cutoff (value of cutoff at peak of attack) as a value between 0 and 1 where 0 is the :cutoff_min and 1 is the :cutoff value
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * cutoff_decay_level:
    - doc: The level of cutoff after the decay phase as a value between 0 and 1 where 0 is the :cutoff_min and 1 is the :cutoff value
    - default: cutoff_sustain_level
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * cutoff_sustain_level:
    - doc: The sustain cutoff (value of cutoff at sustain time) as a value between 0 and 1 where 0 is the :cutoff_min and 1 is the :cutoff value.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.9
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * wave:
    - doc: Wave type - 0 saw, 1 pulse, 2 triangle. Different waves will produce different sounds.
    - default: 0
    - constraints: must be one of the following values: [0, 1, 2]
    - May be changed whilst playing
  * pulse_width:
    - doc: The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Supersaw

### Key:
  :supersaw

### Doc:
  Thick swirly saw waves sparkling and moving about to create a rich trancy sound.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 130
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.7
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Hoover

### Key:
  :hoover

### Doc:
  Classic early 90's rave synth - 'a sort of slurry chorussy synth line like the classic Dominator by Human Resource'. Based on Dan Stowell's implementation in SuperCollider and Daniel Turczanski's port to Overtone. Works really well with portamento (see docs for the 'control' method).

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0.05
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 130
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.1
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## The Prophet

### Key:
  :prophet

### Doc:
  Dark and swirly, this synth uses Pulse Width Modulation (PWM) to create a timbre which continually moves around. This effect is created using the pulse ugen which produces a variable width square wave. We then control the width of the pulses using a variety of LFOs - sin-osc and lf-tri in this case. We use a number of these LFO modulated pulse ugens with varying LFO type and rate (and phase in some cases) to provide the LFO with a different starting point. We then mix all these pulses together to create a thick sound and then feed it through a resonant low pass filter (rlpf). For extra bass, one of the pulses is an octave lower (half the frequency) and its LFO has a little bit of randomisation thrown into its frequency component for that extra bit of variety.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 110
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.7
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Zawa

### Key:
  :zawa

### Doc:
  Saw wave with oscillating timbre. Produces moving saw waves with a unique character controllable with the control oscillator (usage similar to mod synths).

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.9
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * phase:
    - doc: Phase duration in beats of timbre modulation.
    - default: 1
    - constraints: must be greater than zero
    - May be changed whilst playing
    - Scaled with current BPM value
    - Has slide parameters for shaping changes
  * phase_offset:
    - doc: Initial phase offset of the sync wave (a value between 0 and 1).
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * wave:
    - doc: Wave shape controlling freq sync saw wave. 0=saw wave, 1=pulse, 2=triangle wave and 3=sine wave.
    - default: 3
    - constraints: must be one of the following values: [0, 1, 2, 3]
    - May be changed whilst playing
  * invert_wave:
    - doc: Invert sync freq control waveform (i.e. flip it on the y axis). 0=uninverted wave, 1=inverted wave.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * range:
    - doc: Range of the associated sync saw in MIDI notes from the main note. Modifies timbre.
    - default: 24
    - constraints: must be a value between 0 and 90 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * disable_wave:
    - doc: Enable and disable sync control wave (setting to 1 will stop timbre movement).
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * pulse_width:
    - doc: The width of the pulse wave as a value between 0 and 1. A width of 0.5 will produce a square wave. Different values will change the timbre of the sound. Only valid if wave is type pulse.
    - default: 0.5
    - constraints: must be a value between 0 and 1 exclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Dark Ambience

### Key:
  :dark_ambience

### Doc:
  A slow rolling bass with a sparkle of light trying to escape the darkness. Great for an ambient sound.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 110
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.7
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * detune1:
    - doc: Distance (in MIDI notes) between the main note and the second component of sound. Affects thickness, sense of tuning and harmony.
    - default: 12
    - constraints: none
    - Can not be changed once set
    - Has slide parameters for shaping changes
  * detune2:
    - doc: Distance (in MIDI notes) between the main note and the third component of sound. Affects thickness, sense of tuning and harmony. Tiny values such as 0.1 create a thick sound.
    - default: 24
    - constraints: none
    - Can not be changed once set
    - Has slide parameters for shaping changes
  * noise:
    - doc: Noise source. Has a subtle effect on the timbre of the sound. 0=pink noise (the default), 1=brown noise, 2=white noise, 3=clip noise and 4=grey noise
    - default: 0
    - constraints: must be one of the following values: [0, 1, 2, 3, 4]
    - May be changed whilst playing
  * ring:
    - doc: Amount of ring in the sound. Lower values create a more rough sound, higher values produce a sound with more focus.
    - default: 0.2
    - constraints: must be a value between 0.1 and 50 inclusively
    - May be changed whilst playing
  * room:
    - doc: Room size in squared metres used to calculate the reverb.
    - default: 70
    - constraints: must be a value greater than or equal to 0.1,must be a value less than or equal to 300
    - Can not be changed once set
  * reverb_time:
    - doc: How long in beats the reverb should go on for.
    - default: 100
    - constraints: must be zero or greater
    - Can not be changed once set


## Growl

### Key:
  :growl

### Doc:
  A deep rumbling growl with a bright sine shining through at higher notes.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0.1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 130
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.7
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Hollow

### Key:
  :hollow

### Doc:
  A hollow breathy sound constructed from random noise

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 90
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Only functional if a cutoff value is specified. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0.99
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * noise:
    - doc: Noise source. Has a subtle effect on the timbre of the sound. 0=pink noise, 1=brown noise (the default), 2=white noise, 3=clip noise and 4=grey noise
    - default: 1
    - constraints: must be one of the following values: [0, 1, 2, 3, 4]
    - May be changed whilst playing
  * norm:
    - doc: Normalise the audio (make quieter parts of the sample louder and louder parts quieter) - this is similar to the normaliser FX. This may emphasise any clicks caused by clipping.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing


## Mono Sample Player

### Key:
  :mono_player

### Doc:


### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplitude multiplier which takes place immediately before any internal FX such as the low pass filter, compressor or pitch modification. Use this opt if you want to overload the compressor.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Duration of the attack phase of the envelope.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay:
    - doc: Duration of the decay phase of the envelope.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain:
    - doc: Duration of the sustain phase of the envelope. When -1 (the default) will auto-stretch.
    - default: -1
    - constraints: must either be a positive value or -1
    - Can not be changed once set
  * release:
    - doc: Duration of the release phase of the envelope.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff_attack:
    - doc: Attack time for cutoff filter. Amount of time (in beats) for sound to reach full cutoff value. Default value is set to match amp envelope's attack value.
    - default: attack
    - constraints: must be zero or greater
    - Can not be changed once set
  * cutoff_decay:
    - doc: Decay time for cutoff filter. Amount of time (in beats) for sound to move from full cutoff value (cutoff attack level) to the cutoff sustain level. Default value is set to match amp envelope's decay value.
    - default: decay
    - constraints: must be zero or greater
    - Can not be changed once set
  * cutoff_sustain:
    - doc: Amount of time for cutoff value to remain at sustain level in beats. When -1 (the default) will auto-stretch.
    - default: sustain
    - constraints: must either be a positive value or -1
    - Can not be changed once set
  * cutoff_release:
    - doc: Amount of time (in beats) for sound to move from cutoff sustain value to cutoff min value. Default value is set to match amp envelope's release value.
    - default: release
    - constraints: must be zero or greater
    - Can not be changed once set
  * cutoff_attack_level:
    - doc: The peak cutoff (value of cutoff at peak of attack) as a MIDI note.
    - default: cutoff
    - constraints: must be a value between 0 and 130 inclusively
    - Can not be changed once set
  * cutoff_decay_level:
    - doc: The level of cutoff after the decay phase as a MIDI note.
    - default: cutoff
    - constraints: must be a value between 0 and 130 inclusively
    - Can not be changed once set
  * cutoff_sustain_level:
    - doc: The sustain cutoff (value of cutoff at sustain time) as a MIDI note.
    - default: cutoff
    - constraints: must be a value between 0 and 130 inclusively
    - Can not be changed once set
  * cutoff_env_curve:
    - doc: Select the shape of the curve between levels in the cutoff envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff_min:
    - doc: The minimum cutoff value.
    - default: 30
    - constraints: must be a value less than or equal to 130
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * rate:
    - doc: Rate with which to play back - default is 1. Playing the sample at rate 2 will play it back at double the normal speed. This will have the effect of doubling the frequencies in the sample and halving the playback time. Use rates lower than 1 to slow the sample down. Negative rates will play the sample in reverse.
    - default: 1
    - constraints: must not be zero
    - Can not be changed once set
  * start:
    - doc: A fraction (between 0 and 1) representing where in the sample to start playback. 1 represents the end of the sample, 0.5 half-way through etc.
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * finish:
    - doc: A fraction (between 0 and 1) representing where in the sample to finish playback. 1 represents the end of the sample, 0.5 half-way through etc.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * res:
    - doc: Filter resonance as a value between 0 and 1. Only functional if a cutoff value is specified. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * norm:
    - doc: Normalise the audio (make quieter parts of the sample louder and louder parts quieter) - this is similar to the normaliser FX. This may emphasise any clicks caused by clipping.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * pitch:
    - doc: write me
    - default: 0
    - constraints: none
    - Can not be changed once set
    - Has slide parameters for shaping changes
  * window_size:
    - doc: Pitch shift works by chopping the input into tiny slices, then playing these slices at a higher or lower rate. If we make the slices small enough and overlap them, it sounds like the original sound with the pitch changed.
The window_size is the length of the slices and is measured in seconds. It needs to be around 0.2 (200ms) or greater for pitched sounds like guitar or bass, and needs to be around 0.02 (20ms) or lower for percussive sounds like drum loops. You can experiment with this to get the best sound for your input.
    - default: 0.2
    - constraints: must be a value greater than 5.0e-05
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pitch_dis:
    - doc: Pitch dispersion - how much random variation in pitch to add. Using a low value like 0.001 can help to "soften up" the metallic sounds, especially on drum loops. To be really technical, pitch_dispersion is the maximum random deviation of the pitch from the pitch ratio (which is set by the pitch param)
    - default: 0.0
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * time_dis:
    - doc: Time dispersion - how much random delay before playing each grain (measured in seconds). Again, low values here like 0.001 can help to soften up metallic sounds introduced by the effect. Large values are also fun as they can make soundscapes and textures from the input, although you will most likely lose the rhythm of the original. NB - This won't have an effect if it's larger than window_size.
    - default: 0.0
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * compress:
    - doc: Enable the compressor. This sits at the end of the internal FX chain immediately before the \`amp:\` opt. Therefore to drive the compressor use the \`pre_amp:\` opt which will amplify the signal before it hits any internal FX. The compressor compresses the dynamic range of the incoming signal. Equivalent to automatically turning the amp down when the signal gets too loud and then back up again when it's quiet. Useful for ensuring the containing signal doesn't overwhelm other aspects of the sound. Also a general purpose hard-knee dynamic range processor which can be tuned via the opts to both expand and compress the signal.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * threshold:
    - doc: Threshold value determining the break point between slope_below and slope_above. Only valid if the compressor is enabled by turning on the compress: opt.
    - default: 0.2
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * clamp_time:
    - doc: Time taken for the amplitude adjustments to kick in fully (in seconds). This is usually pretty small (not much more than 10 milliseconds). Also known as the time of the attack phase. Only valid if the compressor is enabled by turning on the compress: opt.
    - default: 0.01
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * slope_above:
    - doc: Slope of the amplitude curve above the threshold. A value of 1 means that the output of signals with amplitude above the threshold will be unaffected. Greater values will magnify and smaller values will attenuate the signal. Only valid if the compressor is enabled by turning on the compress: opt.
    - default: 0.5
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * slope_below:
    - doc: Slope of the amplitude curve below the threshold. A value of 1 means that the output of signals with amplitude below the threshold will be unaffected. Greater values will magnify and smaller values will attenuate the signal. Only valid if the compressor is enabled by turning on the compress: opt.
    - default: 1
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * relax_time:
    - doc: Time taken for the amplitude adjustments to be released. Usually a little longer than clamp_time. If both times are too short, you can get some (possibly unwanted) artefacts. Also known as the time of the release phase. Only valid if the compressor is enabled by turning on the compress: opt.
    - default: 0.01
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Stereo Sample Player

### Key:
  :stereo_player

### Doc:


### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: Amplitude multiplier which takes place immediately before any internal FX such as the low pass filter, compressor or pitch modification. Use this opt if you want to overload the compressor.
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Duration of the attack phase of the envelope.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay:
    - doc: Duration of the decay phase of the envelope.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain:
    - doc: Duration of the sustain phase of the envelope. When -1 (the default) will auto-stretch.
    - default: -1
    - constraints: must either be a positive value or -1
    - Can not be changed once set
  * release:
    - doc: Duration of the release phase of the envelope.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff_attack:
    - doc: Attack time for cutoff filter. Amount of time (in beats) for sound to reach full cutoff value. Default value is set to match amp envelope's attack value.
    - default: attack
    - constraints: must be zero or greater
    - Can not be changed once set
  * cutoff_decay:
    - doc: Decay time for cutoff filter. Amount of time (in beats) for sound to move from full cutoff value (cutoff attack level) to the cutoff sustain level. Default value is set to match amp envelope's decay value.
    - default: decay
    - constraints: must be zero or greater
    - Can not be changed once set
  * cutoff_sustain:
    - doc: Amount of time for cutoff value to remain at sustain level in beats. When -1 (the default) will auto-stretch.
    - default: sustain
    - constraints: must either be a positive value or -1
    - Can not be changed once set
  * cutoff_release:
    - doc: Amount of time (in beats) for sound to move from cutoff sustain value to cutoff min value. Default value is set to match amp envelope's release value.
    - default: release
    - constraints: must be zero or greater
    - Can not be changed once set
  * cutoff_attack_level:
    - doc: The peak cutoff (value of cutoff at peak of attack) as a MIDI note.
    - default: cutoff
    - constraints: must be a value between 0 and 130 inclusively
    - Can not be changed once set
  * cutoff_decay_level:
    - doc: The level of cutoff after the decay phase as a MIDI note.
    - default: cutoff
    - constraints: must be a value between 0 and 130 inclusively
    - Can not be changed once set
  * cutoff_sustain_level:
    - doc: The sustain cutoff (value of cutoff at sustain time) as a MIDI note.
    - default: cutoff
    - constraints: must be a value between 0 and 130 inclusively
    - Can not be changed once set
  * cutoff_env_curve:
    - doc: Select the shape of the curve between levels in the cutoff envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff_min:
    - doc: The minimum cutoff value.
    - default: 30
    - constraints: must be a value less than or equal to 130
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * rate:
    - doc: Rate with which to play back - default is 1. Playing the sample at rate 2 will play it back at double the normal speed. This will have the effect of doubling the frequencies in the sample and halving the playback time. Use rates lower than 1 to slow the sample down. Negative rates will play the sample in reverse.
    - default: 1
    - constraints: must not be zero
    - Can not be changed once set
  * start:
    - doc: A fraction (between 0 and 1) representing where in the sample to start playback. 1 represents the end of the sample, 0.5 half-way through etc.
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * finish:
    - doc: A fraction (between 0 and 1) representing where in the sample to finish playback. 1 represents the end of the sample, 0.5 half-way through etc.
    - default: 1
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * res:
    - doc: Filter resonance as a value between 0 and 1. Only functional if a cutoff value is specified. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * norm:
    - doc: Normalise the audio (make quieter parts of the sample louder and louder parts quieter) - this is similar to the normaliser FX. This may emphasise any clicks caused by clipping.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * pitch:
    - doc: write me
    - default: 0
    - constraints: none
    - Can not be changed once set
    - Has slide parameters for shaping changes
  * window_size:
    - doc: Pitch shift works by chopping the input into tiny slices, then playing these slices at a higher or lower rate. If we make the slices small enough and overlap them, it sounds like the original sound with the pitch changed.

  The window_size is the length of the slices and is measured in seconds. It needs to be around 0.2 (200ms) or greater for pitched sounds like guitar or bass, and needs to be around 0.02 (20ms) or lower for percussive sounds like drum loops. You can experiment with this to get the best sound for your input.
    - default: 0.2
    - constraints: must be a value greater than 5.0e-05
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pitch_dis:
    - doc: Pitch dispersion - how much random variation in pitch to add. Using a low value like 0.001 can help to "soften up" the metallic sounds, especially on drum loops. To be really technical, pitch_dispersion is the maximum random deviation of the pitch from the pitch ratio (which is set by the pitch param)
    - default: 0.0
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * time_dis:
    - doc: Time dispersion - how much random delay before playing each grain (measured in seconds). Again, low values here like 0.001 can help to soften up metallic sounds introduced by the effect. Large values are also fun as they can make soundscapes and textures from the input, although you will most likely lose the rhythm of the original. NB - This won't have an effect if it's larger than window_size.
    - default: 0.0
    - constraints: must be a value greater than or equal to 0
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * compress:
    - doc: Enable the compressor. This sits at the end of the internal FX chain immediately before the \`amp:\` opt. Therefore to drive the compressor use the \`pre_amp:\` opt which will amplify the signal before it hits any internal FX. The compressor compresses the dynamic range of the incoming signal. Equivalent to automatically turning the amp down when the signal gets too loud and then back up again when it's quiet. Useful for ensuring the containing signal doesn't overwhelm other aspects of the sound. Also a general purpose hard-knee dynamic range processor which can be tuned via the opts to both expand and compress the signal.
    - default: 0
    - constraints: must be one of the following values: [0, 1]
    - May be changed whilst playing
  * threshold:
    - doc: Threshold value determining the break point between slope_below and slope_above. Only valid if the compressor is enabled by turning on the compress: opt.
    - default: 0.2
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * clamp_time:
    - doc: Time taken for the amplitude adjustments to kick in fully (in seconds). This is usually pretty small (not much more than 10 milliseconds). Also known as the time of the attack phase. Only valid if the compressor is enabled by turning on the compress: opt.
    - default: 0.01
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * slope_above:
    - doc: Slope of the amplitude curve above the threshold. A value of 1 means that the output of signals with amplitude above the threshold will be unaffected. Greater values will magnify and smaller values will attenuate the signal. Only valid if the compressor is enabled by turning on the compress: opt.
    - default: 0.5
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * slope_below:
    - doc: Slope of the amplitude curve below the threshold. A value of 1 means that the output of signals with amplitude below the threshold will be unaffected. Greater values will magnify and smaller values will attenuate the signal. Only valid if the compressor is enabled by turning on the compress: opt.
    - default: 1
    - constraints: none
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * relax_time:
    - doc: Time taken for the amplitude adjustments to be released. Usually a little longer than clamp_time. If both times are too short, you can get some (possibly unwanted) artefacts. Also known as the time of the release phase. Only valid if the compressor is enabled by turning on the compress: opt.
    - default: 0.01
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Blade Runner style strings

### Key:
  :blade

### Doc:
  Straight from the 70s, evoking the mists of Blade Runner, this simple electro-style string synth is based on filtered saw waves and a variable vibrato.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 100
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * vibrato_rate:
    - doc: Number of wobbles per second. For realism this should be between 6 and 8, maybe even faster for really high notes.
    - default: 6
    - constraints: must be a value greater than or equal to 0.0,must be a value less than or equal to 20.0
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * vibrato_depth:
    - doc: Amount of variation around the central note. 1 is the sensible maximum (but you can go up to 5 if you want a special effect), 0 would mean no vibrato. Works well around 0.15 but you can experiment.
    - default: 0.15
    - constraints: must be a value greater than or equal to 0.0,must be a value less than or equal to 5.0
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * vibrato_delay:
    - doc: How long in seconds before the vibrato kicks in.
    - default: 0.5
    - constraints: must be zero or greater
    - Can not be changed once set
  * vibrato_onset:
    - doc: How long in seconds before the vibrato reaches full power.
    - default: 0.1
    - constraints: must be zero or greater
    - Can not be changed once set


## SynthPiano

### Key:
  :piano

### Doc:
  A basic piano synthesiser. Note that due to the plucked nature of this synth the envelope opts such as \`attack:\`, \`sustain:\` and \`release:\` do not work as expected. They can only shorten the natural length of the note, not prolong it. Also, the \`note:\` opt will only honour whole tones.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`. Note that the piano synth can only play whole tones such as 60 and does not handle floats such as 60.3
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * vel:
    - doc: Velocity of keypress.
    - default: 0.2
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. With the piano synth, this opt can only have the effect of shortening the attack phase, not prolonging it.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level). With the piano synth, this opt can only have the effect of controlling the amp within the natural duration of the note and can not prolong the sound.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. With the piano synth, this opt can only have the effect of controlling the amp within the natural duration of the note and can not prolong the sound.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. With the piano synth, this opt can only have the effect of controlling the amp within the natural duration of the note and can not prolong the sound.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * hard:
    - doc: Hardness of keypress.
    - default: 0.5
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * stereo_width:
    - doc: Width of the stereo effect (which makes low notes sound towards the left, high notes towards the right). 0 to 1.
    - default: 0
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set


## SynthPluck

### Key:
  :pluck

### Doc:
  A basic plucked string synthesiser that uses Karplus-Strong synthesis. Note that due to the plucked nature of this synth the envelope opts such as \`attack:\`, \`sustain:\` and \`release:\` do not work as expected. They can only shorten the natural length of the note, not prolong it. Also, the \`note:\` opt will only honour whole tones.

### Opts:
  * note:
    - doc: Note to play. Either a MIDI number or a symbol representing a note. For example: \`30\`, \`52\`, \`:C\`, \`:C2\`, \`:Eb4\`, or \`:Ds3\`. Note that the piano synth can only play whole tones such as 60 and does not handle floats such as 60.3
    - default: 52
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. With the piano synth, this opt can only have the effect of controlling the amp within the natural duration of the note and can not prolong the sound.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. With the piano synth, this opt can only have the effect of controlling the amp within the natural duration of the note and can not prolong the sound.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level). With the piano synth, this opt can only have the effect of controlling the amp within the natural duration of the note and can not prolong the sound.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * noise_amp:
    - doc: Amplitude of source (pink) noise.
    - default: 0.8
    - constraints: must be a value between 0 and 1 inclusively
    - Can not be changed once set
  * max_delay_time:
    - doc: Maximum length of the delay line buffer.
    - default: 0.125
    - constraints: must be a value between 0.125 and 1 inclusively
    - Can not be changed once set
  * pluck_decay:
    - doc: How long the pluck takes to stabilise on a note. This doesn't have a dramatic effect on the sound.
    - default: 30
    - constraints: must be a value between 1 and 100 inclusively
    - Can not be changed once set
  * coef:
    - doc: Coefficient of the internal OnePole filter. Values around zero are resonant and bright, values towards 1 sound more dampened and cutoff. It's a little bit like playing nearer the soundhole/fingerboard for values near zero and more toward the bridge for values approaching one, although this isn't an exact comparison.
    - default: 0.3
    - constraints: must be a value between -1 and 1 inclusively
    - Can not be changed once set


## Sound In

### Key:
  :sound_in

### Doc:
  Please write documentation!

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * input:
    - doc: write me
    - default: 0
    - constraints: none
    - Can not be changed once set


## Noise

### Key:
  :noise

### Doc:
  Noise that contains equal amounts of energy at every frequency - comparable to radio static. Useful for generating percussive sounds such as snares and hand claps. Also useful for simulating wind or sea effects.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 110
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Pink Noise

### Key:
  :pnoise

### Doc:
  Noise whose spectrum falls off in power by 3 dB per octave. Useful for generating percussive sounds such as snares and hand claps. Also useful for simulating wind or sea effects.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 110
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Brown Noise

### Key:
  :bnoise

### Doc:
  Noise whose spectrum falls off in power by 6 dB per octave. Useful for generating percussive sounds such as snares and hand claps. Also useful for simulating wind or sea effects.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 110
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Grey Noise

### Key:
  :gnoise

### Doc:
  Generates noise which results from flipping random bits in a word. The spectrum is emphasised towards lower frequencies. Useful for generating percussive sounds such as snares and hand claps. Also useful for simulating wind or sea effects.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 110
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Clip Noise

### Key:
  :cnoise

### Doc:
  Generates noise whose values are either -1 or 1. This produces the maximum energy for the least peak to peak amplitude. Useful for generating percussive sounds such as snares and hand claps. Also useful for simulating wind or sea effects.

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * attack:
    - doc: Amount of time (in beats) for sound to reach full amplitude (attack_level). A short attack (i.e. 0.01) makes the initial part of the sound very percussive like a sharp tap. A longer attack (i.e 1) fades the sound in gently. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * decay:
    - doc: Amount of time (in beats) for the sound to move from full amplitude (attack_level) to the sustain amplitude (sustain_level).
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * sustain:
    - doc: Amount of time (in beats) for sound to remain at sustain level amplitude. Longer sustain values result in longer sounds. Full length of sound is attack + decay + sustain + release.
    - default: 0
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * release:
    - doc: Amount of time (in beats) for sound to move from sustain level amplitude to silent. A short release (i.e. 0.01) makes the final part of the sound very percussive (potentially resulting in a click). A longer release (i.e 1) fades the sound out gently. Full length of sound is attack + decay + sustain + release.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
    - Scaled with current BPM value
  * attack_level:
    - doc: Amplitude level reached after attack phase and immediately before decay phase
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * decay_level:
    - doc: Amplitude level reached after decay phase and immediately before sustain phase. Defaults to sustain_level unless explicitly set
    - default: sustain_level
    - constraints: must be zero or greater
    - Can not be changed once set
  * sustain_level:
    - doc: Amplitude level reached after decay phase and immediately before release phase.
    - default: 1
    - constraints: must be zero or greater
    - Can not be changed once set
  * env_curve:
    - doc: Select the shape of the curve between levels in the envelope. 1=linear, 2=exponential, 3=sine, 4=welch, 6=squared, 7=cubed
    - default: 2
    - constraints: must be one of the following values: [1, 2, 3, 4, 6, 7]
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 110
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Basic Mono Sample Player (no env)

### Key:
  :basic_mono_player

### Doc:


### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * rate:
    - doc: write me
    - default: 1
    - constraints: must not be zero
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Basic Stereo Sample Player (no env)

### Key:
  :basic_stereo_player

### Doc:


### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * pan:
    - doc: Position of sound in stereo. With headphones on, this means how much of the sound is in the left ear, and how much is in the right ear. With a value of -1, the sound is completely in the left ear, a value of 0 puts the sound equally in both ears and a value of 1 puts the sound in the right ear. Values in between -1 and 1 move the sound accordingly.
    - default: 0
    - constraints: must be a value between -1 and 1 inclusively
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * rate:
    - doc: write me
    - default: 1
    - constraints: must not be zero
    - Can not be changed once set
  * cutoff:
    - doc: MIDI note representing the highest frequencies allowed to be present in the sound. A low value like 30 makes the sound round and dull, a high value like 100 makes the sound buzzy and crispy.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 131
    - May be changed whilst playing
    - Has slide parameters for shaping changes
  * res:
    - doc: Filter resonance as a value between 0 and 1. Large amounts of resonance (a res: near 1) can create a whistling sound around the cutoff frequency. Smaller values produce less resonance.
    - default: 0
    - constraints: must be zero or greater,must be a value less than 1
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Basic Mixer

### Key:
  :basic_mixer

### Doc:
  Please write documentation!

### Opts:
  * amp:
    - doc: The amplitude of the sound. Typically a value between 0 and 1. Higher amplitudes may be used, but won't make the sound louder, they will just reduce the quality of all the sounds currently being played (due to compression.)
    - default: 1
    - constraints: must be zero or greater
    - May be changed whilst playing
    - Has slide parameters for shaping changes


## Main Mixer

### Key:
  :main_mixer

### Doc:
  Please write documentation!

### Opts:
  * amp:
    - doc: write me
    - default: 1
    - constraints: none
    - Can not be changed once set
    - Has slide parameters for shaping changes
  * pre_amp:
    - doc: write me
    - default: 1
    - constraints: none
    - Can not be changed once set
    - Has slide parameters for shaping changes
  * hpf:
    - doc: write me
    - default: 0
    - constraints: none
    - Can not be changed once set
    - Has slide parameters for shaping changes
  * lpf:
    - doc: write me
    - default: 135.5
    - constraints: none
    - Can not be changed once set
    - Has slide parameters for shaping changes
  * hpf_bypass:
    - doc: write me
    - default: 0
    - constraints: none
    - Can not be changed once set
  * lpf_bypass:
    - doc: write me
    - default: 0
    - constraints: none
    - Can not be changed once set
  * force_mono:
    - doc: write me
    - default: 0
    - constraints: none
    - Can not be changed once set
  * invert_stereo:
    - doc: write me
    - default: 0
    - constraints: none
    - Can not be changed once set
  * limiter_bypass:
    - doc: write me
    - default: 0
    - constraints: none
    - Can not be changed once set
  * leak_dc_bypass:
    - doc: write me
    - default: 0
    - constraints: none
    - Can not be changed once set
`

type BuiltIn = {
	name: string
	id: string
	detail: string
	options: {
		name: string
		detail: string
		default: string
		can_slide: boolean
	}[]
}

const extractInfo = (doc: string): BuiltIn[] => {
	const lines = doc.split('\n').map((l) => l.trim())

	let building: Partial<BuiltIn> | undefined = undefined

	const info: BuiltIn[] = []
	for (let index = 0; index < lines.length; index++) {
		const line = lines[index]
		if (line.startsWith('## ')) {
			if (building) {
				if (!building.name || !building.detail || !building.id || !building.options) {
					console.error('Missing data: ' + JSON.stringify(building))
				}
				info.push(building as BuiltIn)
			}
			building = { name: line.substring(3), options: [] }
		}

		if (!building) continue

		if (line == '### Key:') {
			index++
			const line = lines[index]
			building.id = line.substring(1)
		} else if (line == '### Doc:') {
			index++
			const line = lines[index]
			building.detail = line
		} else if (line === '### Opts:') {
			index++
			let buildingOption: Partial<BuiltIn['options'][number]> | undefined = undefined
			do {
				const line = lines[index]
				if (line.startsWith('*')) {
					if (buildingOption) {
						if (!buildingOption.name || !buildingOption.detail) {
							throw Error(
								'Missing data: ' + JSON.stringify(buildingOption) + JSON.stringify(building),
							)
						}
						building.options!.push(buildingOption as BuiltIn['options'][number])
					}
					buildingOption = { name: line.substring(2, line.length - 1) }
				}

				if (!buildingOption) continue

				if (line.startsWith('- doc:')) {
					buildingOption.detail = line.substring(7)
				} else if (line.startsWith('- default:')) {
					buildingOption.default = line.substring(11)
				} else if (line === '- Has slide parameters for shaping changes') {
					buildingOption.can_slide = true
				}

				index++
			} while (lines[index] && !lines[index]?.startsWith('#'))
			building.options!.push(buildingOption as BuiltIn['options'][number])
		}
	}
	info.push(building as BuiltIn)

	return info
}
writeFileSync(join(__dirname, 'fx.json'), JSON.stringify(extractInfo(fx), undefined, 2))
writeFileSync(join(__dirname, 'synths.json'), JSON.stringify(extractInfo(synths), undefined, 2))
