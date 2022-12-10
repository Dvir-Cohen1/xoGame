import React from "react";
import TicTacToe from "../components/game/TicTacToe";

import { useGameContext } from "../context/GameContext";
const GameBoard = () => {
  const { initGameModal, handleInitGameModal } = useGameContext();

  return (
    <>{(initGameModal || <TicTacToe />)}
      
    </>
  );
};

export default GameBoard;
