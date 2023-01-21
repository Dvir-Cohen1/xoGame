import { io } from "socket.io-client";
const socket = io("http://localhost:3001");

socket.on("test", function (data) {

const players = data.data
  console.log(players);



});

export function handleMove() {}

export function handleGameState() {}
