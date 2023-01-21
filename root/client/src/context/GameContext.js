import { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { gameModeOptions } from "../constants/gameConstants";

const GameContext = createContext();
export function useGameContext() {
  return useContext(GameContext);
}

export default function GameProvider(props) {
  const [initGameModal, setGameModal] = useState(false);

  // Mode Selection
  const [playersConnected, setPlayersConnected] = useState(0);
  const [gameMode, setGameMode] = useState();

  const handleInitGameModal = () => {
    if (gameMode) {
      if (window.confirm("Are you sure you want to leave this game?")) {
        setGameMode();
        setGameModal((prev) => !prev);
      }
      return;
    }
    setGameModal((prev) => !prev);
  };

  return (
    <GameContext.Provider
      value={{
        initGameModal,
        handleInitGameModal,
        setGameModal,
        gameMode,
        setGameMode,
        playersConnected,
        setPlayersConnected,
      }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
