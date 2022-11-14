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
  const [movement, setMovement] = useState({})
  let scoreLimit = 5

  //GAME LOGIC
  useEffect(() => {
    if (checkWin()) {
      setResult({winner: player === "X" ? "O" : "X", state: "Won"})
    } else {
      checkTie()
    };
    if (xxx === scoreLimit) {
      alert(`Winner ${result.winner}${result.state}`)
      setXxx(0)
      setOoo(0)
      setResult({winner: "none", state: "none"})
    } else if (ooo === scoreLimit) {
      alert(`Winner ${result.winner}${result.state}`)
      setXxx(0)
      setOoo(0)
      setResult({winner: "none", state: "none"})
    }
  }, [board])
  
  useEffect(() => {
    if(result.winner === "none"){
      return;
    }
    if (result.winner === "X") {
      setXxx(x => ++x)
      restartGame()
    } else if (result.winner === "O"){
      setOoo(o => ++o)
      restartGame()
    } else {
      restartGame()
    }

  }, [result])

  const chooseSquare = (square) => {
    setBoard(
      board.map((value, index) => {
        if (index === square && value === "") {
          if ((xxx !== scoreLimit) || (ooo !== scoreLimit)) {
            setPlayer(x => x === "X" ? "O" : "X")
          }
            return player;
        }
        return value;
      })
    );
  };

  const checkWin = () => {
    let x = false
    Patterns.forEach((currPattern) => {
      let foundWinningPattern = true

      const firstPlayer = board[currPattern[0]];
      if (firstPlayer === "") return;
      currPattern.forEach((index) => {
        if (board[index] !== firstPlayer) {
          foundWinningPattern = false
        }
      })
      if (foundWinningPattern) {
        return x = true;
      }
    })
    return x
  }

  const checkTie = () => {
    let filled = true;
    board.forEach((square) => {
      if (square === "") {
        filled = false
      }
    })
    if (filled) {
      alert("lygios")
      setResult({winner: "No one", state: "Tie"})
    }
  }

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""])
    setPlayer("X")
  }
  //GAME LOGIC END
  
  // MOVEMENT
  const myFunction = () => {
    // your logic here
    console.log('pressed Esc ✅');
  };

  useEffect(() => {
    const keyDownHandler = event => {

      if (event.key === 'a' || event.key === 'A') {
        console.log('kaire');
      } else if (event.key === 'd' || event.key === 'D'){
        console.log('desine');
      } else if (event.key === 'w' || event.key === 'W') {
        console.log('aukstyn');
      } else if (event.key === 's' || event.key === 'S') {
        console.log('zemyn');
      }
      if (event.key === 'Escape') {
        event.preventDefault();

        // 👇️ your logic here
        myFunction();
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    // 👇️ clean up event listener
    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, []);

  // MOVEMENT END

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
