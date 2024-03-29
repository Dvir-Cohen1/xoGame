import styles from "./TicTacToeVsCpu.module.css";
import { useEffect, useState } from "react";
import Button from "../common/Button";
import { InfoAlert, SuccessAlert } from "../common/Alerts";

const players = {
  CPU: {
    SYM: "O",
    NAME: "CPU",
  },
  HUMAN: {
    SYM: "X",
    NAME: "You",
  },
};

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}

export default function TicTacToeVsCpu() {
  // const [board, setBoard] = useState(Array(9).fill(""));

  const [board, setBoard] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [score, setScore] = useState(0);
  const [isCPUNext, setIsCPUNext] = useState(false);
  const [winner, setWinner] = useState(null);

  function playFn(arrayIndex, index) {
    if (isCPUNext) return;
    if (winner) return;
    if (board[arrayIndex][index] !== '') return
    board[arrayIndex][index] = players?.HUMAN?.SYM;
    setBoard((board) => [...board]);
    checkWinner();
    setIsCPUNext(true);
  }

  useEffect(() => {
    if (winner) return;
    if (isCPUNext) {
      cPUPlay();
    }
  }, [isCPUNext]);

  function cPUPlay() {
    if (winner) return;
    sleep(100);

    const cPUMove = getCPUTurn();

    board[cPUMove.arrayIndex][cPUMove.index] = players?.CPU?.SYM;

    setBoard((board) => [...board]);
    checkWinner();
    setIsCPUNext(false);
  }

  function getCPUTurn() {
    const emptyIndexes = [];
    board.forEach((row, arrayIndex) => {
      row.forEach((cell, index) => {
        if (cell === "") {
          emptyIndexes.push({ arrayIndex, index });
        }
      });
    });
    const randomIndex = Math.floor(Math.random() * emptyIndexes.length);
    return emptyIndexes[randomIndex];
  }

  function checkWinner() {
    // check same row
    for (let index = 0; index < board.length; index++) {
      const row = board[index];
      if (row.every((cell) => cell === players?.CPU?.SYM)) {
        setWinner(players?.CPU?.NAME); 
        return;
      } else if (row.every((cell) => cell === players?.HUMAN?.SYM)) {
        setWinner(players?.HUMAN?.NAME);
        return;
      }
    }

    // check same column
    for (let i = 0; i < 3; i++) {
      const column = board.map((row) => row[i]);
      if (column.every((cell) => cell === players?.CPU?.SYM)) {
        setWinner(players?.CPU?.NAME);
        return;
      } else if (column.every((cell) => cell === players?.HUMAN?.SYM)) {
        setWinner(players?.HUMAN?.NAME);
        return;
      }
    }

    // check same diagonal
    const diagonal1 = [board[0][0], board[1][1], board[2][2]];
    const diagonal2 = [board[0][2], board[1][1], board[2][0]];
    if (diagonal1.every((cell) => cell === players?.CPU?.SYM)) {
      setWinner(players?.CPU?.NAME);
      return;
    } else if (diagonal1.every((cell) => cell === players?.HUMAN?.SYM)) {
      setWinner(players?.HUMAN?.NAME);
      return;
    } else if (diagonal2.every((cell) => cell === players?.CPU?.SYM)) {
      setWinner(players?.CPU?.NAME);
      return;
    } else if (diagonal2.every((cell) => cell === players?.HUMAN?.SYM)) {
      setWinner(players?.HUMAN?.NAME);
      return;
    } else if (board.flat().every((cell) => cell !== "")) {
      setWinner("draw");
      return;
    } else {
      setWinner(null);
      return;
    }
  }

  function displayWinner() {
    if (winner === "draw") {
      return "It's a draw!";
    } else if (winner) {
      return <SuccessAlert message={`${winner} won!`} />;
    }
  }

  function displayTurn() {
    if (isCPUNext) {
      return <InfoAlert message={"CPUs turn!"} />;
    } else {
      return <InfoAlert message={"Your Turn!"} />;
    }
  }

  function playAgainFn() {
    setBoard([
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ]);
    setWinner(null);
    setIsCPUNext(false);
  }

  return (
    <div>
      <h4 className="text-4xl">
        <span className="text-amber-500 font-bold">Xo</span>Vs<span className="font-bold text-blue-400">Cpu</span>
      </h4>

      <div>{!winner && displayTurn()}</div>
      {winner && <h2>{displayWinner()}</h2>}
      {winner && (
        <Button
          className="px-5 py-2.5 mb-10 bg-gradient-to-r from-amber-500 to-amber-400 rounded-md duration-150 text-3xl"
          onClick={playAgainFn}
        >
          Play Again
        </Button>
      )}

      <h4 className="text-xl">Score: {score}</h4>
      <div className={styles.container}>
        <div className={styles.col}>
          <span onClick={() => playFn(0, 0)} className={styles.cell}>
            {board[0][0]}
          </span>
          <span onClick={() => playFn(0, 1)} className={styles.cell}>
            {board[0][1]}
          </span>
          <span onClick={() => playFn(0, 2)} className={styles.cell}>
            {board[0][2]}
          </span>
        </div>
        <div className={styles.col}>
          <span onClick={() => playFn(1, 0)} className={styles.cell}>
            {board[1][0]}
          </span>
          <span onClick={() => playFn(1, 1)} className={styles.cell}>
            {board[1][1]}
          </span>
          <span onClick={() => playFn(1, 2)} className={styles.cell}>
            {board[1][2]}
          </span>
        </div>
        <div className={styles.col}>
          <span onClick={() => playFn(2, 0)} className={styles.cell}>
            {board[2][0]}
          </span>
          <span onClick={() => playFn(2, 1)} className={styles.cell}>
            {board[2][1]}
          </span>
          <span onClick={() => playFn(2, 2)} className={styles.cell}>
            {board[2][2]}
          </span>
        </div>
      </div>
    </div>
  );
}
