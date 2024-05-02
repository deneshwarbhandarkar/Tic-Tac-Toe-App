import { useEffect, useState } from "react";
import "./Game_Board.css";

function Game_Board(props) {


    let [GameBoard, setGameBoard] = useState([
        [null, null, null],
        [null, null, null],
        [null, null, null]]);

    let [turn, setTurn] = useState("X");
    let [winner, setWinner] = useState(false);
    let [winnerSymbol, setWinnerSymbol] = useState(null);
    let [conclusion, setConclusion] = useState(null);
    let bulb = false;
    let winnerName = null;
    let gameResult = null;

    function handleClick(event, row_idx, element_idx) {


        if (GameBoard[row_idx][element_idx] == null && winner !== true) {

            let NewGameBoard = [...GameBoard];
            NewGameBoard[row_idx][element_idx] = (turn === "X") ? "X" : "O";
            setGameBoard(NewGameBoard);

            event.target.innerText = turn;

            turn === "X" ? setTurn("O") : setTurn("X");

            checkWinner();
        }
    }
    function checkWinner() {

        for (let i = 0; i < GameBoard.length; i++) {
            if (GameBoard[i][0] === GameBoard[i][1] && GameBoard[i][1] === GameBoard[i][2] && GameBoard[i][0] != null) {
                console.log("Winner");
                setWinner(true);
                setWinnerSymbol(GameBoard[i][0]);
            }
        }

        for (let i = 0; i < GameBoard.length; i++) {
            if (GameBoard[0][i] === GameBoard[1][i] && GameBoard[1][i] === GameBoard[2][i] && GameBoard[0][i] != null) {
                console.log("Winner");
                setWinner(true);
                setWinnerSymbol(GameBoard[0][i]);
            }
        }



        if (GameBoard[0][0] === GameBoard[1][1] && GameBoard[1][1] === GameBoard[2][2] && GameBoard[0][0] != null) {
            console.log("Winner");
            setWinner(true);
            setWinnerSymbol(GameBoard[0][0]);
        }
        else if (GameBoard[0][2] === GameBoard[1][1] && GameBoard[1][1] === GameBoard[2][0] && GameBoard[0][2] != null) {
            console.log("Winner");
            setWinner(true);
            setWinnerSymbol(GameBoard[0][2]);
        }

        GameBoard.map((row) => {
            row.map((element) => {
                if (element == null) {
                    bulb = true;
                }
            });
        });
        if (bulb === false && winner === false) {
            setConclusion("Draw");
        }


    }
    if (winner === true) {
        if (winnerSymbol === "X") {

            winnerName = props.player1;
        }
        else {
            winnerName = props.player2;
        }
        gameResult = <span className="result">Winner is: {winnerName}</span>;
    }
    else {
        if (conclusion === "Draw") {
            gameResult = <span className="result">Draw</span>;
        }
    }

    useEffect(() => {
        console.log(GameBoard);
    }, [GameBoard]);


    function handleReset() {
        setGameBoard([
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ]);

        setWinner(false);
    }

    return (
        <div className="game-board">
            {gameResult}
            {
                GameBoard.map((row, row_idx) => {
                    return (
                        <div className='row' key={row_idx}>
                            {
                                row.map((element, element_idx) => {
                                    return <button onClick={(event) => { handleClick(event, row_idx, element_idx); }} key={element_idx}>{element}</button>;
                                })
                            }
                        </div>);
                })
            }
            <div div className="reset-container">
                <button value="" onClick={handleReset}>Reset</button>
            </div>
        </div>
    );
}
export default Game_Board;