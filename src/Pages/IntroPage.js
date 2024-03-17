import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import "./intropage.css";
import btnimg from "../images/start.png";
import happymonkey from "../images/happyMonkey.png";
import starts from "../images/start.mp3";
import users from "../images/user.mp3";

function IntroPage() {
  const [Name, setName] = useState("Kiddo");
  const navigate = useNavigate();
  const start = useRef(new Audio(starts));
  const user = useRef(new Audio(users));

  const addUsername = () => {
    playSoundEffect("user");
    const input = prompt("Enter Your Name");
    
    if (input !== null) {
      setName(input.toUpperCase());
      
    }
  };

  const playSoundEffect = (soundType) => {
    switch (soundType) {
      case 'user':
        user.current.play();
        break;
      case 'start':
        start.current.play();
        break;
      default:
        break;
    }
  };

  return (
    <div className="containerIntruction">
      <img src={happymonkey} id="monkeyhappy" alt="Happy monkey" />

      <button className="buttonuser" onClick={addUsername}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 24">
          <path d="m18 0 8 12 10-8-4 20H4L0 4l10 8 8-12z"></path>
        </svg>
        Claim Your Username
      </button>

      <div className="text smallborder">
        <h1>Welcome {Name}!</h1>
      </div>

      <button className="btn" onClick={() => { navigate("/start"); playSoundEffect("start"); }}>
        <img src={btnimg} alt="start button" />
      </button>
    </div>
  );
}

export default IntroPage;
