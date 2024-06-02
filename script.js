const canvas = document.getElementById('pongCanvas');
const ctx = canvas.getContext('2d');

// Set initial positions for paddles and ball
let ballX = canvas.width / 2;
let ballY = canvas.height / 2;
let ballSpeedX = 5;
let ballSpeedY = 5;
const paddleWidth = 10;
const paddleHeight = 100;
let paddle1Y = 150;
let paddle2Y = 150;
const paddleSpeed = 10;

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the ball
  ctx.beginPath();
  ctx.arc(ballX, ballY, 10, 0, Math.PI * 2);
  ctx.fillStyle = '#000';
  ctx.fill();

  // Draw paddles
  ctx.fillRect(0, paddle1Y, paddleWidth, paddleHeight);
  ctx.fillRect(canvas.width - paddleWidth, paddle2Y, paddleWidth, paddleHeight);

  // Update ball position
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  // Ball collision with top and bottom walls
  if (ballY > canvas.height || ballY < 0) {
    ballSpeedY = -ballSpeedY;
  }

  // Ball collision with paddles
  if (ballX < paddleWidth) {
    if (ballY > paddle1Y && ballY < paddle1Y + paddleHeight) {
      ballSpeedX = -ballSpeedX;
    }
  } else if (ballX > canvas.width - paddleWidth) {
    if (ballY > paddle2Y && ballY < paddle2Y + paddleHeight) {
      ballSpeedX = -ballSpeedX;
    }
  }

  // Move the second paddle (computer opponent)
  // Add your AI logic here

  requestAnimationFrame(draw);
}

draw();
