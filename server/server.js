const WebSocket = require("ws");
const { randomUUID } = require("crypto");
const { createPlayer } = require("./world");

const wss = new WebSocket.Server({ port: 3000 });

let players = {};

setInterval(() => {
  const snapshot = Object.values(players);

  wss.clients.forEach(ws => {
    ws.send(JSON.stringify({ state: snapshot }));
  });
}, 50);

wss.on("connection", ws => {
  const id = randomUUID();
  players[id] = createPlayer(id);

  ws.on("message", msg => {
    const data = JSON.parse(msg);

    if (data.move) {
      const p = players[id];
      p.x += data.move.x;
      p.y += data.move.y;
      p.z += data.move.z;
    }

    if (data.chat) {
      wss.clients.forEach(c => {
        c.send(JSON.stringify({ chat: data.chat }));
      });
    }
  });

  ws.on("close", () => {
    delete players[id];
  });
});
