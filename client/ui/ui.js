import { send } from "../net/socket.js";
import { toggleMute } from "../net/rtc.js";

export function initUI() {
  sendBtn.onclick = () => {
    if (input.value.trim()) {
      send({ chat: input.value });
      input.value = "";
    }
  };

  input.onkeydown = e => {
    if (e.key === "Enter") sendBtn.onclick();
  };

  muteBtn.onclick = () => toggleMute(muteBtn);
}
