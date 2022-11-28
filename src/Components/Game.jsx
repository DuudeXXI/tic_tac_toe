// FROM REACT
import { useState, useEffect, useContext } from "react";
// COMPONENTS
import Square from "./Square";
import { Patterns } from "../Patterns";
// FONTAWESOME
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faArrowsRotate } from "@fortawesome/free-solid-svg-icons";
// ROUTER
import { Link } from "react-router-dom";
//  CONTEXT
import MainContext from "../Contexts/MainContext"

library.add(faHouse, faArrowsRotate);

const Game = () => {
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({ winner: "none", state: "none" });
  const [xxx, setXxx] = useState(0);
  const [ooo, setOoo] = useState(0);
  const [movement, setMovement] = useState({});

  const { matchScore } = useContext(MainContext)

  let scoreLimit = JSON.parse(localStorage.getItem("matchScore")) ?? matchScore;

  // LOCALSTORAGE
  useEffect(() => {
    if (!xxx && !ooo) {
      return;
    }
    localStorage.setItem("Player X", xxx);
    localStorage.setItem("Player O", ooo);
  }, [xxx, ooo]);

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("Player X")) === scoreLimit ||
      JSON.parse(localStorage.getItem("Player O")) === scoreLimit
    ) {
      localStorage.setItem("Player X", 0);
      localStorage.setItem("Player O", 0);
    }
    if (!xxx && !ooo) {
      setXxx(localStorage.getItem("Player X"));
      setOoo(localStorage.getItem("Player O"));
    }
  }, [result,xxx,ooo]);

  //GAME LOGIC
  useEffect(() => {
    if (checkWin()) {
      setResult({ winner: player === "X" ? "O" : "X", state: "Won" });
    } else {
      checkTie();
    }
    if (xxx === scoreLimit) {
      alert(`Winner ${result.winner}${result.state}`);
      setXxx(0);
      setOoo(0);
      setResult({ winner: "none", state: "none" });
    } else if (ooo === scoreLimit) {
      alert(`Winner ${result.winner}${result.state}`);
      setXxx(0);
      setOoo(0);
      setResult({ winner: "none", state: "none" });
    }
    localStorage.setItem("Player X", xxx);
    localStorage.setItem("Player O", ooo);
  }, [board]);

  useEffect(() => {
    if (result.winner === "none") {
      return;
    }
    if (result.winner === "X") {
      setXxx((x) => ++x);
      restartGame();
    } else if (result.winner === "O") {
      setOoo((o) => ++o);
      restartGame();
    } else {
      restartGame();
    }
  }, [result]);

  const chooseSquare = (square) => {
    setBoard(
      board.map((value, index) => {
        if (index === square && value === "") {
          if (xxx !== scoreLimit || ooo !== scoreLimit) {
            setPlayer((x) => (x === "X" ? "O" : "X"));
          }
          return player;
        }
        return value;
      })
    );
  };

  const checkWin = () => {
    let x = false;
    Patterns.forEach((currPattern) => {
      let foundWinningPattern = true;

      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      currPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinningPattern = false;
        }
      });
      if (foundWinningPattern) {
        return (x = true);
      }
    });
    return x;
  };

  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false;
      }
    });
    if (filled) {
      alert("lygios");
      setResult({ winner: "No one", state: "Tie" });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
  };
  const resetGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    setPlayer("X");
    setXxx(0);
    setOoo(0);
    localStorage.setItem("Player X", 0);
    localStorage.setItem("Player O", 0);


  };
  //GAME LOGIC END

  // MOVEMENT

  useEffect(() => {
    const keyDownHandler = (event) => {

      if (event.key === "a" || event.key === "A") {
      } else if (event.key === "d" || event.key === "D") {
      } else if (event.key === "w" || event.key === "W") {
      } else if (event.key === "s" || event.key === "S") {
      } else if (event.key === " ") {
      } else if (event.ctrlKey && event.key === 'z') {
        alert('Undo!');
      }
      if (event.key === "Escape") {
        event.preventDefault();
        resetGame()
      }
    };

    document.addEventListener("keydown", keyDownHandler);

    // clean up event listener
    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, []);

  // MOVEMENT END

  return (
    <div className="PageGame">
      <div className="points">
        <span>TIC TAC TOE</span>
        <hr />
        <div className="score-Board">
          <h1>{ooo}</h1>
          <h1>|</h1>
          <h1>{xxx}</h1>
        </div>
      </div>
      <div className="board">
        <div className="row">
          <Square
            value={board[0]}
            chooseSquare={() => {
              chooseSquare(0);
            }}
          />
          <Square
            value={board[1]}
            chooseSquare={() => {
              chooseSquare(1);
            }}
          />
          <Square
            value={board[2]}
            chooseSquare={() => {
              chooseSquare(2);
            }}
          />
          <div className="line line-top"></div>
          <div className="line line-vertical-left"></div>
        </div>
        <div className="row">
          <Square
            value={board[3]}
            chooseSquare={() => {
              chooseSquare(3);
            }}
          />
          <Square
            value={board[4]}
            chooseSquare={() => {
              chooseSquare(4);
            }}
          />
          <Square
            value={board[5]}
            chooseSquare={() => {
              chooseSquare(5);
            }}
          />
          <div className="line line-bottom"></div>
        </div>
        <div className="row">
          <Square
            value={board[6]}
            chooseSquare={() => {
              chooseSquare(6);
            }}
          />
          <Square
            value={board[7]}
            chooseSquare={() => {
              chooseSquare(7);
            }}
          />
          <Square
            value={board[8]}
            chooseSquare={() => {
              chooseSquare(8);
            }}
          />
          <div className="line line-vertical-right"></div>
        </div>
      </div>
      <div className="points">
        <h2>Current move: {player}</h2>
        <hr />
      </div>
      <div className="game-menu">
        <Link to="/tic_tac_toe/menu">
          <FontAwesomeIcon icon="fa-solid fa-house" className="icon" />
        </Link>
        <i onClick={resetGame}>
          <FontAwesomeIcon icon="fa-solid fa-arrows-rotate" className="icon" />
        </i>
      </div>
    </div>
  );
};

export default Game;
