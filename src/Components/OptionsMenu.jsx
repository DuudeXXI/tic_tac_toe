import { useState, useEffect, useContext } from "react";

// FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
// ROUTER
import { Link } from "react-router-dom";
// CONTEXT
import MainContext from "../Contexts/MainContext";

const OptionsMenu = () => {
  const {
    matchScore,
    setMatchScore,
    setXPlayer,
    setOPlayer,
    xPlayer,
    oPlayer,
  } = useContext(MainContext);

  const [score, setScore] = useState(
    localStorage.getItem("matchScore") ?? matchScore
  );
  const [x, setX] = useState(localStorage.getItem("Player X color") ?? xPlayer)
  const [o, setO] = useState(localStorage.getItem("Player O color") ?? oPlayer)

  const applySettings = () => {
    setOPlayer(o)
    setXPlayer(x)
    setMatchScore(score);
    localStorage.setItem("matchScore", score);
    localStorage.setItem("Player X color", x);
    localStorage.setItem("Player O color", o);
    alert("Settings saved")
  };

  return (
    <>
      <div className="PageOptions">
        <h1>Current score : {matchScore}</h1>
        <input
          type="text"
          value={score}
          maxLength={2}
          onChange={(e) => setScore(e.target.value)}
        />
        <h1>Player X color</h1>
        <div className="player-x-settings">
          <button className={`player-general player-x-default ${x === "default-color" ? "selected-color" : null}`} color="default-color" onClick={e => setX(e.target.attributes.color.nodeValue)}></button>
          <button className={`player-general player-x-purple ${x === "player-purple" ? "selected-color" : null}`} color="player-purple" onClick={e => setX(e.target.attributes.color.nodeValue)}></button>
          <button className={`player-general player-x-blue ${x === "player-blue" ? "selected-color" : null}`} color="player-blue" onClick={e => setX(e.target.attributes.color.nodeValue)}></button>
          <button className={`player-general player-x-red ${x === "player-red" ? "selected-color" : null}`} color="player-red" onClick={e => setX(e.target.attributes.color.nodeValue)}></button>
        </div>
        <h1>Player O color</h1>
        <div className="player-o-settings">
          <button className={`player-general player-o-default ${o === "default-color" ? "selected-color" : null}`} color="default-color" onClick={e => setO(e.target.attributes.color.nodeValue)}></button>
          <button className={`player-general player-o-purple ${o === "player-purple" ? "selected-color" : null}`} color="player-purple" onClick={e => setO(e.target.attributes.color.nodeValue)}></button>
          <button className={`player-general player-o-blue ${o === "player-blue" ? "selected-color" : null}`} color="player-blue" onClick={e => setO(e.target.attributes.color.nodeValue)}></button>
          <button className={`player-general player-o-red ${o === "player-red" ? "selected-color" : null}`} color="player-red" onClick={e => setO(e.target.attributes.color.nodeValue)}></button>
        </div>
        <div className="options-confirm-btn">
        <button onClick={applySettings} className="icon">
          Confirm
        </button>
        <Link to="/tic_tac_toe/menu">
          <FontAwesomeIcon icon="fa-solid fa-house" className="icon" />
        </Link>
        </div>
      </div>
    </>
  );
};

export default OptionsMenu;
