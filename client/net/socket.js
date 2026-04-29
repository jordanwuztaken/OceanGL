import { updateWorld } from "../core/game.js";

let socket;

export function connectSocket() {
  socket = new WebSocket("ws://localhost:3000");

  socket.onmessage = e => {
    const msg = JSON.parse(e.data);

    if (msg.state) {
      updateWorld(msg.state);
    }

    if (msg.chat) {
      chat.innerHTML += `<div>${msg.chat}</div>`;
    }
  };
}

export function send(data) {
  socket.send(JSON.stringify(data));
}
