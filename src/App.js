import './App.css';
import IntroPage from './Pages/IntroPage';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introsecond from './Pages/Introsecond';
import FinalIntro from './Pages/FinalIntro';
import GameInstruction from './Pages/GameInstruction';
import GamePlay from './Pages/GamePlay';
import Donepage from './Pages/Donepage';
import Updatecount from './context/Updatecount';


function App() {
  return (
    <Updatecount>
      <BrowserRouter>
    <Routes>
        <Route path="/" element={<IntroPage/>} />
        <Route path="/start" element={<Introsecond />} />
        <Route path="/next" element={<FinalIntro/>} />
        <Route path="/letstart" element={<GameInstruction/>} />
        <Route path="/play" element={<GamePlay/>} />
        <Route path="/final" element={<Donepage/>} />
        <Route path="*" element={"No route available"} />
    </Routes>
  </BrowserRouter>
    </Updatecount>
  );
}

export default App;
