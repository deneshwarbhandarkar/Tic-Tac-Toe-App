import "./App.css";
// import logo from "./images/logo.png";
import vslogo from "./images/vslogo.png";
import Player from "./components/Player";
import Game_Board from "./components/Game_Board";
import { useState } from "react";

function App() {

    let [player1, setPlayer1] = useState("Player 1");
    let [player2, setPlayer2] = useState("Player 2");
    return (
        <div>
            <h1 className="game-heading">Tic Tac Toe</h1>
            {/* <div className="img-container">
                <img src={logo} alt="" height="100px" width="100px" />
            </div> */}

            <div className="main-container">
                <div className="game-container">
                    <div className="player-section">
                        <Player playerSymbol="X" name="Player 1" setPlayer={setPlayer1} />
                        <img src={vslogo} alt="" height="100px" />
                        <Player playerSymbol="O" name="Player 2" setPlayer={setPlayer2} />
                    </div>

                    <div className="game-section">
                        <Game_Board player1={player1} player2={player2} />
                    </div>
                </div>
            </div>
        </div>
    );

}

export default App;