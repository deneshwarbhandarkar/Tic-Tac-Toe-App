import { useState } from "react";
import "./Player.css";

function Player(props) {
    let [playerName, setPlayerName] = useState(props.name);
    let [isEditing, setIsEditing] = useState(false);
    function handleChange(event) {
        setPlayerName(event.target.value);
    }
    function handleClick() {
        if (isEditing === true) {
            props.setPlayer(playerName);
            setIsEditing(false);
        }
        else {
            setIsEditing(true);
        }
    };
    let editablePlayerName = <span className="player-name">{playerName}</span>;
    if (isEditing === true) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
    }
    return (
        <div className="player-container">
            {editablePlayerName}
            <span className="symbol">{props.playerSymbol}</span>
            <button onClick={handleClick}>{isEditing ? "Save" : "Edit"}</button>
        </div>
    );
}

export default Player;