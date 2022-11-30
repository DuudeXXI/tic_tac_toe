//  CONTEXT
import MainContext from "./Contexts/MainContext";
// STYLING
import "./App.scss";
// COMPONENTS
import Game from "./Components/Game";
import MainMenu from "./Components/MainMenu";
import OptionsMenu from "./Components/OptionsMenu";
import ErrorPage from "./Components/ErrorPage";
// PACKAGES
import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const [matchScore, setMatchScore] = useState(5);
  const [xPlayer, setXPlayer] = useState("default-color");
  const [oPlayer, setOPlayer] = useState("default-color");

  useEffect(() => {
    if (localStorage.getItem("matchScore") !== null)
     {
      setMatchScore(localStorage.getItem("matchScore"));
    } else {
      localStorage.setItem("matchScore", matchScore)
    }
    if ((localStorage.getItem("Player X color") !== null &&
    localStorage.getItem("Player X color") === "default-color") ||
    (localStorage.getItem("Player X color") !== null &&
    localStorage.getItem("Player X color") === "player-purple") ||
    (localStorage.getItem("Player X color") !== null &&
    localStorage.getItem("Player X color") === "player-blue") ||
    (localStorage.getItem("Player X color") !== null &&
    localStorage.getItem("Player X color") === "player-red")) {
      setXPlayer(localStorage.getItem("Player X color"));
    } else {
      localStorage.setItem("Player X color", xPlayer)
    }
    if ((localStorage.getItem("Player O color") !== null &&
    localStorage.getItem("Player O color") === "default-color") ||
    (localStorage.getItem("Player O color") !== null &&
    localStorage.getItem("Player O color") === "player-purple") ||
    (localStorage.getItem("Player O color") !== null &&
    localStorage.getItem("Player O color") === "player-blue") ||
    (localStorage.getItem("Player O color") !== null &&
    localStorage.getItem("Player O color") === "player-red")) {
      setOPlayer(localStorage.getItem("Player O color"));
    } else {
      localStorage.setItem("Player O color", oPlayer)
    }

  }, [matchScore, xPlayer, oPlayer]);

  return (
    <MainContext.Provider
      value={{
        matchScore,
        setMatchScore,
        oPlayer,
        xPlayer,
        setOPlayer,
        setXPlayer,
      }}
    >
      <Routes>
        <Route path="/tic_tac_toe" element={<Game />} />
        <Route path="/tic_tac_toe/menu" element={<MainMenu />} />
        <Route path="/tic_tac_toe/options" element={<OptionsMenu />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </MainContext.Provider>
  );
}

export default App;
