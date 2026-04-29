import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";

const players = {};

export function applyState(scene, state) {
  state.forEach(p => {
    if (!players[p.id]) {
      const mesh = new THREE.Mesh(
        new THREE.BoxGeometry(),
        new THREE.MeshStandardMaterial({ color: 0x00ffff })
      );
      scene.add(mesh);
      players[p.id] = mesh;
    }

    const m = players[p.id];
    m.position.lerp(
      new THREE.Vector3(p.x, p.y, p.z),
      0.2
    );
  });
}
