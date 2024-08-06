import { Player } from "./components/player";
import { Gameboard } from "./components/GameBoard";

function App() {
  
  return (
    <main>
      <div id = "game-container">
      <ol id= "players">

      <Player InitialName= "Player 1" symbol = "X"/>
      <Player InitialName= "Player 2" symbol = "O"/>

      </ol>

      <Gameboard />

      </div>


    </main>
  )
}

export default App
