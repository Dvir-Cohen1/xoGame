import React from "react";

import { useGameContext } from "../context/GameContext";
const GameBoard = () => {
  const { initGameModal, handleInitGameModal } = useGameContext();
  return (
    <>
      <button
        onClick={() => {
          handleInitGameModal();
        }}
        className="mt-10 bg-blue-500 py-2.5 px-5 rounded"
      >
        {" "}
        Click
      </button>

    </>
  );
};

export default GameBoard;
