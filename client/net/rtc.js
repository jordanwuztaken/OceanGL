let stream;

export async function initRTC() {
  stream = await navigator.mediaDevices.getUserMedia({ audio: true });
}

export function toggleMute(btn) {
  const track = stream.getAudioTracks()[0];
  track.enabled = !track.enabled;

  btn.querySelector("span").textContent =
    track.enabled ? "mic" : "mic_off";
}
