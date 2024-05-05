import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import useWindowSize from '../hooks/Dimensions';
import SoundfontProvider from '../SoundfontProvider';
import { handlePlayNote } from '../utils/gameFunctions';
import 'react-piano/dist/styles.css';

const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = 'https://d1pzp51pvbm36p.cloudfront.net';

const noteRange = {
  first: MidiNumbers.fromNote('c4'),
  last: MidiNumbers.fromNote('c5'),
};

const keyboardShortcuts = KeyboardShortcuts.create({
  firstNote: noteRange.first,
  lastNote: noteRange.last,
  keyboardConfig: KeyboardShortcuts.HOME_ROW,
});

export function MusicGame(props) {
    const windowSize = useWindowSize();

    return (
      <div className='flex flex-col items-center gap-8'>
        <h1 className='text-slate-200 text-4xl text-center font-semibold'>Music Game</h1>
        <div className="flex flex-col gap-3 bg-white/20 w-fit p-4 rounded-xl">
          <div className='flex flex-col items-start'>
            <p className='text-slate-300 font-semibold text-center'>1. You have to repeat the notes that the game plays.</p>
            <p className='text-slate-300 font-semibold text-center'>2. Use the keyboard to play the notes.</p>
            <p className='text-slate-300 font-semibold text-center'>3. Press the Start Game button to begin.</p>
          </div>
          <p className='text-slate-200 font-semibold text-center'>Good luck!</p>
        </div>
        <div className='flex gap-4'>
          <button className='p-3 bg-white rounded-lg w-fit' onClick={() => handlePlayNote()}>
            <span>Start Game</span>
          </button>
          <div>
          </div>
        </div>
        <SoundfontProvider
          instrumentName="acoustic_grand_piano"
          audioContext={audioContext}
          hostname={soundfontHostname}
          render={({ isLoading, playNote, stopNote }) => (
            <Piano
              noteRange={noteRange}
              width={windowSize.width / 1.8}
              playNote={(midiNumber) => {
                playNote(midiNumber);
              }}
              stopNote={(midiNumber) => {
                stopNote(midiNumber);
              }}
              disabled={isLoading}
              keyboardShortcuts={keyboardShortcuts}
              {...props}
            />
          )}
        />
      </div>      
    );
}
