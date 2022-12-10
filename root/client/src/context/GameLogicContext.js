import React from "react";
import { createContext, useContext, useState, useEffect } from "react";
import { io } from "socket.io-client";
const socket = io("http://localhost:3001", {

});

const GameLogicContext = createContext();

export function useGameLogicContext() {
  return useContext(GameLogicContext);
}

socket.emit("connection", 'username');
export default function GameLogicProvider({ children }) {
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [lastPong, setLastPong] = useState(null);

  useEffect(() => {


    socket.on("connection", () => {
      setIsConnected(true);
    });

    socket.on("disconnect", () => {
      setIsConnected(false);
    });

    socket.on("pong", () => {
      setLastPong(new Date().toISOString());
    });

    return () => {
      socket.off("connect");
      socket.off("disconnect");
      socket.off("pong");
    };
  }, []);

  const sendPing = () => {
    socket.emit("ping");
  };

  return (
    <GameLogicContext.Provider value={{ isConnected, lastPong, sendPing }}>
      {console.log(isConnected, lastPong)}
      {children}
    </GameLogicContext.Provider>
  );
}