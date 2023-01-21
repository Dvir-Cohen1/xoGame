import React from "react";
import TicTacToeVsCpu from "../components/game/TicTacToeVsCpu";
import TicTacToeMultiplayer from "../components/game/TicTacToeMultiplayer"
import { useGameContext } from "../context/GameContext";


const GameBoard = () => {
  const { setGameModal, gameMode, setGameMode } = useGameContext();

  console.log(gameMode);

  return (
    <section>
      {(gameMode === '')}
      <TicTacToeVsCpu />
    </section>
  );
};

export default GameBoard;
