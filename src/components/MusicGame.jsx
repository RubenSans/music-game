import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import useWindowSize from '../hooks/Dimensions';
import SoundfontProvider from '../SoundfontProvider';
import { handlePlayNote, time, score } from '../utils/gameFunctions';
import 'react-piano/dist/styles.css';
import { useEffect, useState } from 'react';

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

    const [gameTime, setGameTime] = useState(0);
    const [gameScore, setGameScore] = useState(0);

    useEffect(() => {
      let interval = setInterval(() => {
        setGameTime(time);
        setGameScore(score);
      }, 1000);

      return () => clearInterval(interval);
    }, []);

    return (
      <div className='flex flex-col items-center gap-8'>
        <h1 className='text-slate-200 text-4xl text-center font-semibold'>Music Game</h1>
        <div className="flex flex-col gap-3 bg-white/20 w-fit p-4 rounded-xl">
          <div className='flex flex-col items-start'>
            <p className='text-slate-300 font-semibold text-center mb-3'>Instructions:</p>
            <p className='text-slate-300 font-semibold text-center'>1. You have to repeat the notes that the game plays.</p>
            <p className='text-slate-300 font-semibold text-center'>2. Use the keyboard to play the notes. MAYUS DOES NOT WORK!!</p>
            <p className='text-slate-300 font-semibold text-center'>3. Press the Start Game button to begin.</p>
          </div>
          <p className='text-slate-200 font-semibold text-center'>Good luck!</p>
        </div>
        <div className='flex gap-4'>
          <button id='start' className='p-3 bg-white rounded-lg w-fit' onClick={() => handlePlayNote()}>
            <span>Start Game</span>
          </button>
          <div>
            <p className='text-slate-200 font-semibold text-center'>Time: {gameTime}</p>
            <p className='text-slate-200 font-semibold text-center'>Score: {gameScore}</p>
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
        <div id='display' className='fixed bottom-8 left-[47%] transform -translate-x-1/2 text-3xl text-white'></div>
      </div>      
    );
}
