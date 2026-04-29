import { send } from "../net/socket.js";

const keys = {};
onkeydown = e => keys[e.key] = true;
onkeyup = e => keys[e.key] = false;

export function handleInput() {
  const move = { x:0, y:0, z:0 };

  if (keys["w"]) move.z -= 0.1;
  if (keys["s"]) move.z += 0.1;
  if (keys["a"]) move.x -= 0.1;
  if (keys["d"]) move.x += 0.1;

  send({ move });
}
