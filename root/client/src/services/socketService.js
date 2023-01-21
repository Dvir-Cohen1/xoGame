import { io } from "socket.io-client";
import { useGameContext } from "../context/GameContext";
const socket = io("http://localhost:3001");


socket.on("countPlayersConnected", function (data) {
  const playersConnected = data;

  // console.log(players);
  console.log("From test method - client" , playersConnected);
});

export function handleMove() {}

export function handleGameState() {}
