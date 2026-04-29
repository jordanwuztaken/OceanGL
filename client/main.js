import { initGame, update } from "./core/game.js";
import { connectSocket } from "./net/socket.js";
import { initRTC } from "./net/rtc.js";
import { initUI } from "./ui/ui.js";

await initRTC();
connectSocket();
initUI();
initGame();

function loop() {
  requestAnimationFrame(loop);
  update();
}
loop();
