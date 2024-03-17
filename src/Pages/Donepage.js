import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
import banna2 from "../images/banana-2.png";
import back from "../images/back.png";
import top from "../images/topDesign.png";
import restart from "../images/restart.png";
import happymonkey from "../images/happyMonkey2.png";
import sound from "../images/finalsound.mp3";
import { Getctx } from "../context/Updatecount";

function Donepage() {
  const audioRef = useRef(null);
  const navigate = useNavigate();
  let ctx  = Getctx();

  console.log(ctx);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="containerIntruction">
      
      <audio ref={audioRef} src={sound} />
      <div className="allBlack">

      <div className="remaining">
        <h1>Remaining</h1>
      <p style={{color:"#FFCF25"}} >❤️ {
          ctx.lifecount===1?1:ctx.lifecount
          }</p>

      <p style={{color:"#FFCF25"}}>
        🕰️ {ctx.timecount}
      </p>
      </div>
        <div className="bar">
          <img src={banna2} alt="banana" />
        </div>
        <div className="rewards">
          <img src={top} className="top" alt="top design" />
          <h1 className="earn">Earned</h1>
          <p className="points">{ctx.count} Banana's</p>
         
          <img src={happymonkey} className="happy" alt="happy monkey" />
          <img
            src={restart}
            className="restart"
            alt="restart button"
            onClick={() => {
              navigate("/");
              playAudio();
            }}
          />
        </div>
        <button className="back" onClick={() => navigate("/play")}>
          <img src={back} alt="back button" />
        </button>
      </div>
      
     
    </div>
  );
}

export default Donepage;
