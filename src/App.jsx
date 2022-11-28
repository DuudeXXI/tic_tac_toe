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
    if (localStorage.getItem("matchScore") !== null) {
      setMatchScore(localStorage.getItem("matchScore"));
    }
    if (localStorage.getItem("Player X color") !== null) {
      setXPlayer(localStorage.getItem("Player X color"));
    }
    if (localStorage.getItem("Player O color") !== null) {
      setOPlayer(localStorage.getItem("Player O color"));
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
