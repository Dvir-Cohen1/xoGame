import { createContext, useContext, useState, useEffect } from "react";

const GameContext = createContext();

export function useGameContext() {
  return useContext(GameContext);
}

export default function GameProvider({ children }) {
  const [initGameModal, setGameModal] = useState(true);

  const handleInitGameModal = () => {
    setGameModal((prev) => !prev);
  };

  return (
    <GameContext.Provider value={{ initGameModal, handleInitGameModal }}>
      {children}
    </GameContext.Provider>
  );
}
