import { MusicGame } from "./components/MusicGame";

export default function App() {

  return (
    <div className='min-h-screen flex'>
      <div className="my-box flex-1">
        <MusicGame className="MyPiano" />
      </div>
    </div>
  );
}

