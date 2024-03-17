import{ React ,useRef }from 'react'
import { useNavigate} from "react-router-dom";
import yes from "../images/yes.png"
import back from "../images/back.png"
import happymonkey from "../images/happyMonkey.png"
import backsounds from "../images/backsound.mp3"
import starts from "../images/start.mp3"

function FinalIntro() {
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
              <h1>Can you help me get <br/> some ? 🤔</h1>
          </div>
          
          <button className='btn' onClick={()=>playSoundEffect("start")}>
              <img src={yes} alt='start button' onClick={()=>navigate('/letstart')}/>
          </button>
          <button className='back' onClick={()=>navigate('/start')}>
              <img src={back} alt='back button' onClick={()=>playSoundEffect("back")}/>
          </button>
      </div>
  )
}

export default FinalIntro
