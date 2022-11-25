import { useState, useEffect, useContext } from "react";

import MainContext from "../Contexts/MainContext";

const OptionsMenu = () => {

    
    const { matchScore, setMatchScore } = useContext(MainContext)

    const [ score, setScore ] = useState(localStorage.getItem("matchScore") ?? matchScore);

    const applySettings = () => {
       setMatchScore(score)
       localStorage.setItem("matchScore", score)
    }
    
    return ( 
    <>
    <div className="PageOptions">
    <label>Match Score</label>
    <h1>Current score : {matchScore}</h1>
    <input type="text" value={score} onChange={(e) => setScore(e.target.value)} />
    <div className="player-x-settings">
    <button className="player-x-default"></button>
      <button className="player-x-purple"></button>
      <button className="player-x-blue"></button>
      <button className="player-x-red"></button>
    </div>
    <div className="player-o-settings">
      <button className="player-o-default"></button>
      <button className="player-o-purple"></button>
      <button className="player-o-blue"></button>
      <button className="player-o-red"></button>
    </div>
    <button onClick={applySettings} className="options-confirm-btn">Confirm</button>
    </div>
    </>
     );
}
 
export default OptionsMenu;