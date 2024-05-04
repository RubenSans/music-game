import * as Tone from 'tone';

export function playC4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C4", "8n");
}

export function playDb4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Db4", "8n");
}

export function playD4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("D4", "8n");
}

export function playEb4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Eb4", "8n");
}

export function playE4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("E4", "8n");
}

export function playF4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("F4", "8n");
}

export function playGb4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Gb4", "8n");
}

export function playG4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("G4", "8n");
}

export function playAb4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Ab4", "8n");
}

export function playA4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("A4", "8n");
}

export function playBb4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("Bb4", "8n");
}

export function playB4() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("B4", "8n");
}

export function playC5() {
    const synth = new Tone.Synth().toDestination();
    synth.triggerAttackRelease("C5", "8n");
}

export function handlePressKey(event) {
    switch (event.key.toLowerCase()) {
        case 'a':
            playC4();
            break;
        case 'w':
            playDb4();
            break;
        case 's':
            playD4();
            break;
        case 'e':
            playEb4();
            break;
        case 'd':
            playE4();
            break;
        case 'f':
            playF4();
            break;
        case 't':
            playGb4();
            break;
        case 'g':
            playG4();
            break;
        case 'y':
            playAb4();
            break;
        case 'h':
            playA4();
            break;
        case 'u':
            playBb4();
            break;
        case 'j':
            playB4();
            break;
        case 'k':
            playC5();
            break;
        default:
            break;
    }
}