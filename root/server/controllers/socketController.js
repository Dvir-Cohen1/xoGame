const players = {};

export function addClient(socket) {
  players[socket.id] = socket.id;
  return players;
}

export function removeClient(socket) {
  //   console.log(`🔥: A user disconnected ${socket.id}`);
  delete players[socket.id];
}

export function getPlayers() {
  return players;
}
