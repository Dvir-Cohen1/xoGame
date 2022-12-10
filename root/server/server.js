import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;

import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const users = {};

//Add this before the app.get() block
io.on("connection", (socket) => {
  //
  console.log(`⚡: ${socket.id} user just connected!`);
  
  socket.on("new-connection", (username) => {
    users[socket.id] = username;
    io.emit("count-online", Object.keys(users).length);
  });

  socket.emit("connection", () => {});

  socket.emit("pong", () => {
    return
  });
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
