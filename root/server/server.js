import express from "express";
const app = express();
const PORT = process.env.PORT || 3001;
import * as socketController from "./controllers/socketController.js";

import { createServer } from "http";
import { Server } from "socket.io";

const httpServer = createServer();
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

// const users = {};

// //Add this before the app.get() block
io.on("connection", (socket) => {
  // console.log(`⚡: ${socket.id} user just connected!`);
  socketController.addClient(socket);

  socket.on("disconnect", () => {
    // console.log(`🔥: A user disconnected ${socket.id}`);
    socketController.removeClient(socket);
  });


  socket.emit("connected", () => {
    console.log(`🔥: A user disconnected ${socket.id}`);
  });

  socket.emit("countPlayersConnected", Number(socketController.CountPlayersConnected()),
  );

  // socket.on("new-connection", (username) => {
  // users[socket.id] = username;
  // io.emit("count-online", Object.keys(users).length);
  // });

  // socket.emit("connection", () => {});

  // socket.emit("pong", () => {
  //   return
  // });
  // socket.emit("test", () => {
  //   console.log(data);
  // });
  // socket.on("message", (data) => {
  //   console.log(data);
  // });
  // socket.on("disconnect", () => {
  //   console.log("🔥: A user disconnected");
  // });
});

// const clients = {};

// const addClient = (socket) => {
//   console.log("New client connected", socket.id);
//   clients[socket.id] = socket;
// };
// const removeClient = (socket) => {
//   console.log("Client disconnected", socket.id);
//   delete clients[socket.id];
// };

// io.sockets.on("connection", (socket) => {
//   let id = socket.id;

//   addClient(socket);

//   socket.on("mousemove", (data) => {
//     data.id = id;
//     socket.broadcast.emit("moving", data);
//   });

//   socket.on("disconnect", () => {
//     removeClient(socket);
//     socket.broadcast.emit("clientdisconnect", id);
//   });
// });

// var players = {},
//   unmatched;

// function joinGame(socket) {
//   // Add the player to our object of players
//   players[socket.id] = {
//     // The opponent will either be the socket that is
//     // currently unmatched, or it will be null if no
//     // players are unmatched
//     opponent: unmatched,

//     // The symbol will become 'O' if the player is unmatched
//     symbol: "X",

//     // The socket that is associated with this player
//     socket: socket,
//   };

//   if (unmatched) {
//     players[socket.id].symbol = "O";
//     players[unmatched].opponent = socket.id;
//     unmatched = null;
//   } else {
//     unmatched = socket.id;
//   }
// }

// Returns the opponent socket
// function getOpponent(socket) {
//   if (!players[socket.id].opponent) {
//     return;
//   }

//   return players[players[socket.id].opponent].socket;
// }

// io.on("connection", function (socket) {
//   joinGame(socket);

//   // Once the socket has an opponent, we can begin the game
//   if (getOpponent(socket)) {
//     socket.emit("game.begin", {
//       symbol: players[socket.id].symbol,
//     });

//     getOpponent(socket).emit("game.begin", {
//       symbol: players[getOpponent(socket).id].symbol,
//     });
//   }

//   // Listens for a move to be made and emits an event to both
//   // players after the move is completed
//   socket.on("make.move", function (data) {
//     if (!getOpponent(socket)) {
//       return;
//     }

//     socket.emit("move.made", data);
//     getOpponent(socket).emit("move.made", data);
//   });

//   // Emit an event to the opponent when the player leaves
//   socket.on("disconnect", function () {
//     if (getOpponent(socket)) {
//       getOpponent(socket).emit("opponent.left");
//     }
//   });
// });

httpServer.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
