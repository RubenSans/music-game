import { MusicGame } from "./components/MusicGame";

// export default function App() {

//   return (
//     <div className='min-h-screen flex'>
//       <div className="my-box flex-1">
//         <MusicGame className="MyPiano" />
//       </div>
//     </div>
//   );
// }
 
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
 
 
function App() {
  return(
    <Router>
      <Routes>
        <Route path='/' element={<MusicGame className="MyPiano" />}/>
      </Routes>
    </Router>
  ) 
}
 
export default App
 