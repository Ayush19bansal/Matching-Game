import {useRef} from 'react'
import {useNavigate} from "react-router-dom"
import "./gameinstruction.css"
import apple from "../images/applePink.png";
import pinkcard from "../images/pink-card.png";
import blue from "../images/blue-card.png"
import back from "../images/back.png"
import combo from "../images/cards.png"
import play from "../images/play.png"
import banna2 from "../images/banana-2.png"
import backsounds from "../images/backsound.mp3"
import starts from "../images/start.mp3"

function GameInstruction() {
  const navigate = useNavigate();

  const backsound = useRef(new Audio(backsounds));
  const start = useRef(new Audio(starts));
//   const clockRef = useRef(new Audio(clockSound));

  const playSoundEffect = (soundType) => {
    switch (soundType) {
      case 'back':
        backsound.current.play();
        break;
      case 'start':
        start.current.play();
        break;
      default:
        break;
    }
  };
  

  return (
    <div className='containerIntruction'>
      <div className='bar'>
        <img src={banna2}></img>
      </div>
    <div className='box'>
        <div className='card'>
            <div className='number1'></div>                    
            <img src={pinkcard} alt='pink card' />
            <img src={apple} alt='apple card' className='apple'/>
            <h2>Select a pink card.</h2>
            <p>It has images.</p>
        </div>
        <div className='card'>
            <div className='number2'></div>
            <img src={blue} alt='blue card' />
            <h2>Select a blue card.</h2>
            <p>It has alphabets.</p>
        </div>
        <div className='card'>
            <div className='number3'></div>
            <img src={combo} alt='cards' style={{marginTop:"5px",width:"15rem"}}/>
            <p style={{marginBottom:"5px",fontSize:"25px"}}>If they’re same</p>
            <h2 style={{margin:"2px 12px 2px 25px"}}>Its a match !</h2>
            <p style={{marginBottom:"5px", marginLeft:"25px",fontSize:"25px"}}>otherwise retry :</p>
        </div>
    </div>
    <div className='bottom'></div>
    <button className='btn' onClick={()=>playSoundEffect("start")}>
        <img src={play} alt='play button' onClick={() => navigate('/play')} />
    </button>
    <button className='back' onClick={() => navigate('/next')}>
        <img src={back} alt='back button' onClick={()=>playSoundEffect("back")} />
    </button>
</div>
  )
}

export default GameInstruction
