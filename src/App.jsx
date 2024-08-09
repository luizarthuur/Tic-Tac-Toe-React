import { Player } from "./components/player";
import { Gameboard } from "./components/GameBoard";
import { useState } from "react";
import { Log } from "./components/Log";

function App() {
  const [gameTurns, setGameTurns] = useState([]);
  const [activePlayer, setActivePlayer] = useState('X')

  function handleSelectSquare(rowIndex, colIndex) {
    setActivePlayer((currActivePlayer) => currActivePlayer === 'X' ? 'O' : 'X')
    setGameTurns(prevTurns => {
      let updatedTurns = [{ square: {row: rowIndex, col: colIndex}, player:  },...prevTurns]
    })
  }
  
  return (
    <main>
      <div id = "game-container">
      <ol id= "players" className="highlight-player">

      <Player InitialName= "Player 1" symbol = "X" isActive={activePlayer === 'X'}/>
      <Player InitialName= "Player 2" symbol = "O" isActive={activePlayer === 'O'}/>

      </ol>

      <Gameboard onSelectSquare={handleSelectSquare} activeSymbol={activePlayer}/>

      </div>

      <Log />


    </main>
  )
}

export default App
