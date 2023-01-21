import React from "react";
import { useNavigate } from "react-router-dom";
import TicTacToeVsCpu from "../components/game/TicTacToeVsCpu";
import TicTacToeMultiplayer from "../components/game/TicTacToeMultiplayer";
import { useGameContext } from "../context/GameContext";
import { gameModeOptions } from "../constants/gameConstants";

const GameBoard = () => {
  const { setGameModal, gameMode, setGameMode } = useGameContext();
  const navigate = useNavigate();

  const renderGameComponent = () => {
    switch (gameMode) {
      case gameModeOptions.multiPlayerMode:
        return <TicTacToeMultiplayer />;
      case gameModeOptions.cpuMode:
        return <TicTacToeVsCpu />;
      default:
        return navigate("/");
    }
  };

  return <section>{renderGameComponent()}</section>;
};

export default GameBoard;
