import React from "react";
import TicTacToe from "../components/game/TicTacToe";
import GameLogicProvider, {
  useGameLogicContext,
} from "../context/GameLogicContext";
import { useGameContext } from "../context/GameContext";
const GameBoard = () => {
  const { initGameModal } = useGameContext();
  const isConnected = useGameLogicContext();
  return (
    <>
      <GameLogicProvider>{initGameModal || <TicTacToe />}</GameLogicProvider>
    </>
  );
};

export default GameBoard;
