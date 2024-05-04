import { Piano, KeyboardShortcuts, MidiNumbers } from 'react-piano';
import 'react-piano/dist/styles.css';
import SoundfontProvider from './SoundfontProvider';
import useWindowSize from './hooks/Dimensions';

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

export default function App() {

  const windowSize = useWindowSize();

  return (
    <div className='min-h-screen grid place-content-center'>
      {/* <div className="my-box">
        <BasicPiano className="MyPiano" />
      </div> */}

      <div className="my-box">
        <ResponsivePiano className="MyPiano" />
      </div>

      {/* <div className="mt-5">
        <p>Piano with custom styling - see styles.css</p>
        <ResponsivePiano className="MyPiano" />
      </div>  */}
    </div>
  );
}

function BasicPiano(props) {
  return (
    <SoundfontProvider
      instrumentName="acoustic_grand_piano"
      audioContext={audioContext}
      hostname={soundfontHostname}
      render={({ isLoading, playNote, stopNote }) => (
        <Piano
          noteRange={noteRange}
          width={1000}
          playNote={playNote}
          stopNote={stopNote}
          disabled={isLoading}
          keyboardShortcuts={keyboardShortcuts}
          {...props}
        />
      )}
    />
  );
}

function ResponsivePiano(props) {
  return (
    <SoundfontProvider
      instrumentName="acoustic_grand_piano"
      audioContext={audioContext}
      hostname={soundfontHostname}
      render={({ isLoading, playNote, stopNote }) => (
        <Piano
          noteRange={noteRange}
          width={window.innerWidth / 1.5}
          playNote={playNote}
          stopNote={stopNote}
          disabled={isLoading}
          keyboardShortcuts={keyboardShortcuts}
          {...props}
        />
      )}
    />
  );
}
