import * as Tone from 'tone';

export const keys = [
    { note: 'C4', key: 'A' },
    { note: 'Db4', key: 'W' },
    { note: 'D4', key: 'S' },
    { note: 'Eb4', key: 'E' },
    { note: 'E4', key: 'D' },
    { note: 'F4', key: 'F' },
    { note: 'Gb4', key: 'T' },
    { note: 'G4', key: 'G' },
    { note: 'Ab4', key: 'Y' },
    { note: 'A4', key: 'H' },
    { note: 'Bb4', key: 'U' },
    { note: 'B4', key: 'J' },
    { note: 'C5', key: 'K' }
];

export function playNote(note) {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease(note, "8n");
}

export function handlePressKey(event) {
    const noteToPlay = keys.find(item => item.key.toLowerCase() === event.key.toLowerCase());
    if (noteToPlay) {
        playNote(noteToPlay.note);
    }
}