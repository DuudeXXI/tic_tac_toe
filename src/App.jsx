import "./App.scss";
import { useState, useEffect } from "react";
import Square from "./Components/Square";
import { Patterns } from "./Patterns";

function App() {
  
  const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
  const [player, setPlayer] = useState("O");
  const [result, setResult] = useState({winner: "none", state: "none"})
  const [xxx, setXxx] = useState(0)
  const [ooo, setOoo] = useState(0)

  useEffect(() => {
    checkWin();
    checkTie();
    setPlayer(x => x === "O" ? "X" : "O")
  }, [board])
  
  useEffect(() => {
    if(result.winner === "none"){
      return;
    }
    if (result.winner === "X") {
      setXxx(x => ++x)
    } else if (result.winner !== "No one") {
      setOoo(o => ++o)
      checker(ooo)
    }
    restartGame()
  }, [result])
  const checker = curr => {
    console.log(curr);
    if(curr === 2){
      alert(`Game Finished! Player: ${result.winner} - ${result.state}`)
      setXxx(0)
      setOoo(0)
    }
  }
  console.log(ooo, xxx);
  const chooseSquare = (square) => {
    setBoard(
      board.map((value, index) => {
        if (index === square && value === "") {
          return player;
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
    setPlayer(x => x === "X" ? "O" : "X")
  }

  return (
    <div className="App">
      <div className="points">
        <h1>{ooo} / {xxx}</h1>
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
        </div>
      </div>
    </div>
  );
}

export default App;
