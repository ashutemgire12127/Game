const canvas = document.getElementById('pong');
const ctx = canvas.getContext('2d');

// Game objects
const paddleWidth = 15, paddleHeight = 100;
const ballRadius = 10;
let player = { x: 0, y: canvas.height / 2 - paddleHeight / 2, score: 0 };
let computer = { x: canvas.width - paddleWidth, y: canvas.height / 2 - paddleHeight / 2, score: 0 };
let ball = {
    x: canvas.width / 2,
    y: canvas.height / 2,
    speed: 6,
    velocityX: 6
