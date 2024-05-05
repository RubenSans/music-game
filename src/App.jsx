import { MusicGame } from "./components/MusicGame";

export default function App() {

  return (
    <div className='min-h-screen grid place-content-center'>
      <div className="my-box">
        <MusicGame className="MyPiano" />
      </div>
    </div>
  );
}

