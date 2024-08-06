import { useState } from "react";

export function Player({ InitialName, symbol }) {
    const [playerName, setPlayerName] = useState(InitialName);
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClicker () {

    //return setIsEditing((editing) => !editing); 

    if (isEditing === false) {

            return setIsEditing(true)
        }

        else {
            return setIsEditing(false)
        }

    
    }

    function handleChange (event) {
        setPlayerName(event.target.value)
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>
    let btnCaption = 'Edit'

    if (isEditing) {
        editablePlayerName = 
        <input required value = {playerName} onChange={handleChange}></input>
        btnCaption = 'Save'
    }

    return (        
    
    <li>
    <span className="player">
      {editablePlayerName}
        <span className="player-symbol">{symbol}</span>
        <button onClick={handleEditClicker}>{btnCaption}</button>
    </span>
    </li>
)
}