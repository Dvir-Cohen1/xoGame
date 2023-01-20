import React from "react";
import TicTacToe from "../components/game/TicTacToe";
import { useGameLogicContext } from "../context/GameLogicContext";
import { useGameContext } from "../context/GameContext";
import NewGameModal from "../components/NewGameModal";

const GameBoard = () => {
  const { initGameModal, handleInitGameModal } = useGameContext();
  const isConnected = useGameLogicContext();

  return (
    <section>
      {initGameModal && (
        <NewGameModal
          initGameModal={initGameModal}
          handleInitGameModal={handleInitGameModal}
        />
      )}
      <TicTacToe />
    </section>
  );
};

export default GameBoard;
