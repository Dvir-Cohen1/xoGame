import { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

export function useGameContext() {
  return useContext(GameContext);
}

export default function GameProvider(props) {
  const [initGameModal, setGameModal] = useState(true);
    // Mode Selection
    const [gameMode, setGameMode] = useState("");

  const handleInitGameModal = () => {
    setGameModal((prev) => !prev);
  };

  return (
    <GameContext.Provider
      value={{ initGameModal, handleInitGameModal, setGameModal,gameMode,setGameMode }}
    >
      {props.children}
    </GameContext.Provider>
  );
}
