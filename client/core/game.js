import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.160/build/three.module.js";
import { handleInput } from "./player.js";
import { applyState } from "./world.js";

export let scene, camera, renderer;

export function initGame() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x001e3c);

  camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);
  camera.position.z = 5;

  renderer = new THREE.WebGLRenderer({ canvas: game });
  renderer.setSize(innerWidth, innerHeight);

  scene.add(new THREE.PointLight(0xffffff, 1));
}

export function update() {
  handleInput();
  renderer.render(scene, camera);
}

export function updateWorld(state) {
  applyState(scene, state);
}
