import "./App.scss";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Patterns";

function App() {
  
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("X");
  const [result, setResult] = useState({winner: "none", state: "none"})
  const [xxx, setXxx] = useState(0)
  const [ooo, setOoo] = useState(0)

  let scoreLimit = 5

  useEffect(() => {
    checkWin();
    checkTie();
    if (xxx === scoreLimit && ooo < scoreLimit) {
      alert(`Winner ${result.winner}`)
      setXxx(0)
      setOoo(0)
    } else if (ooo === scoreLimit && xxx < scoreLimit) {
      alert(`Winner ${result.winner}`)
      setXxx(0)
      setOoo(0)
    }
  }, [board])
  
  useEffect(() => {
    if(result.winner === "none"){
      return;
    }
    if (result.winner === "X") {
      setXxx(x => ++x)
    } else if (result.winner === "O"){
      setOoo(o => ++o)
    } else {
      alert("Lygios")
    }
    restartGame()
    setResult({winner: "none", state: "none"}) // sitas duoda resultata none reikia kazkur ji padet, nes dabar mes gaunam atvirkscia nugaletoja
  }, [result])

  const chooseSquare = (square) => {
    /* Reikia taisyti, darant papildoma tikrinima
    ar langelis yra pilnas ir jeigu pilnas,
    nieko nedaryt,
    jeigu tuscias idet esama zaideja
    ir tik tada pakeist player
    nes paspaudus ant langelio,
    kuris yra pazymetas pasikeicia player'is*/
    setBoard(
      board.map((value, index) => {
        if (index === square && value === "") {
          if(result.winner === "none") {
            setPlayer(x => x === "X" ? "O" : "X")
            return player;
          }
        }
        return value;
      })
    );
  };

  const checkWin = () => {
    Patterns.forEach((currPattern) => {
      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      let foundWinningPattern = true
      currPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinningPattern = false
        }
      })

      if (foundWinningPattern) {
        setResult({winner: player, state: "Won"})
      }
    })
  }

  const checkTie = () => {
    /* reikia taisyti tikrinima, nes kai nera tusciu nebutinai
     reiskia lygiasias, kartais tai yra laimejimas */
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false
      }
    })
    if (filled) {
      setResult({winner: "No one", state: "Tie"})
    }
  }

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""])
    setPlayer("X")
  }

  return (
    <div className="App">
      <div className="points">
        <h1>{ooo} | {xxx}</h1>
        <h2>Current move: {player}</h2>
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
    </div>
  );
}

export default App;
