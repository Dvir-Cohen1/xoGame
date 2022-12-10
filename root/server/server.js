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

//Add this before the app.get() block
io.on("connection", (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);
  socket.on("disconnect", () => {
    console.log("🔥: A user disconnected");
  });
});

httpServer.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
