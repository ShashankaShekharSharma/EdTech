import * as THREE from "https://cdn.skypack.dev/three@0.129.0";

const canvas = document.getElementById('model-canvas');
const rect = canvas.getBoundingClientRect();
canvas.width = rect.width;
canvas.height = rect.height;

// Your Three.js code to set up and render the 3D model goes here
// For example:
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, rect.width / rect.height, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(rect.width, rect.height);

const geometry = new THREE.BoxGeometry();
const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
const cube = new THREE.Mesh(geometry, material);
scene.add(cube);

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;
  renderer.render(scene, camera);
}


animate();

window.addEventListener("scroll", function () {
  const currentTextPosition = document.getElementById("title").getBoundingClientRect().top;
  const scrollDifference = currentTextPosition - initialTextPosition;
  cube.position.y = -scrollDifference * 0.1;
});

document.getElementById("getStartedBtn").addEventListener("click", function() {
  alert("Get Started button clicked!");
});
