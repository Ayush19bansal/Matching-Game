import React, { useRef } from 'react'
import "./intropage.css"
import { useNavigate } from 'react-router-dom';
import next from "../images/next.png"
import back from "../images/back.png"
import happymonkey from "../images/happyMonkey.png"
import backsounds from "../images/backsound.mp3"
import starts from "../images/start.mp3"


function Introsecond() {
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
        
         <img src={happymonkey} id="monkeyhappy"></img>
            <div className='texts smallborder'>
                <h1>Hi , I am Mizo !
                    and I love bananas 🍌
                </h1>
            </div>
            <button className='btn' onClick={()=>navigate('/next')}>
                <img src={next} alt='start button' onClick={()=>playSoundEffect("start")} />
            </button>
            <button className='back' onClick={()=>navigate('/')} >
                <img src={back} alt='back button' onClick={()=>playSoundEffect("back")} />
            </button>
        </div>
  )
}

export default Introsecond
