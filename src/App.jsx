import { Player } from "./components/player"

function App() {
  
  return (
    <main>
      <div id = "game-container">
      <ol id= "players">

      <Player InitialName= "Player 1" symbol = "X"/>
      <Player InitialName= "Player 2" symbol = "O"/>

      </ol>

      <p>Game Board</p>

      </div>


    </main>
  )
}

export default App
