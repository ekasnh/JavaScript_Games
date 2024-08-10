const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions to be responsive
const tileCount = 20;
let tileSize = canvas.width / tileCount - 2;

// Snake variables
let snake = [{ x: 10, y: 10 }];
let snakeLength = 1;
let direction = 'right';

// Food variables
let food = { x: 5, y: 5 };

// Game variables
let gameSpeed = 100;
let gameOver = false;

// Initialize canvas size
function resizeCanvas() {
    canvas.width = Math.min(window.innerWidth, window.innerHeight) * 0.8;
    canvas.height = canvas.width;
    tileSize = canvas.width / tileCount - 2;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Game loop
function gameLoop() {
    if (gameOver) return;

    setTimeout(() => {
        clearCanvas();
        drawSnake();
        moveSnake();
        checkCollision();
        drawFood();
        gameLoop();
    }, gameSpeed);
}

// Clear canvas
function clearCanvas() {
    ctx.fillStyle = 'white';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
}

// Draw snake
function drawSnake() {
    ctx.fillStyle = 'green';
    snake.forEach(part => {
        ctx.fillRect(part.x * tileCount, part.y * tileCount, tileSize, tileSize);
    });
}

// Move snake
function moveSnake() {
    const head = { ...snake[0] };

    switch (direction) {
        case 'up':
            head.y -= 1;
            break;
        case 'down':
            head.y += 1;
            break;
        case 'left':
            head.x -= 1;
            break;
        case 'right':
            head.x += 1;
            break;
    }

    snake.unshift(head);

    if (snake.length > snakeLength) {
        snake.pop();
    }
}

// Draw food
function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * tileCount, food.y * tileCount, tileSize, tileSize);
}

// Check collision
function checkCollision() {
    const head = snake[0];

    // Check food collision
    if (head.x === food.x && head.y === food.y) {
        snakeLength++;
        food = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
    }

    // Check wall collision
    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount) {
        endGame();
    }

    // Check self collision
    for (let i = 1; i < snake.length; i++) {
        if (head.x === snake[i].x && head.y === snake[i].y) {
            endGame();
        }
    }
}

// Change direction
function changeDirection(newDirection) {
    switch (newDirection) {
        case 'up':
            if (direction !== 'down') direction = 'up';
            break;
        case 'down':
            if (direction !== 'up') direction = 'down';
            break;
        case 'left':
            if (direction !== 'right') direction = 'left';
            break;
        case 'right':
            if (direction !== 'left') direction = 'right';
            break;
    }
}

// Start the game
function startGame() {
    document.getElementById('startScreen').style.display = 'none';
    resetGame();
    gameLoop();
}

// Restart the game
function restartGame() {
    document.getElementById('gameOver').style.display = 'none';
    resetGame();
    gameLoop();
}

// End the game
function endGame() {
    gameOver = true;
    document.getElementById('gameOver').style.display = 'flex';
}

// Reset game
function resetGame() {
    snake = [{ x: 10, y: 10 }];
    snakeLength = 1;
    direction = 'right';
    food = { x: 5, y: 5 };
    gameOver = false;
}

// Display the start screen initially
document.getElementById('startScreen').style.display = 'flex';
