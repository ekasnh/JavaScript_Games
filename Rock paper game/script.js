const homeScreen = document.getElementById('home-screen');
const gameScreen = document.getElementById('game-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const startGameButton = document.getElementById('start-game');
const restartGameButton = document.getElementById('restart-game');
const playAgainButton = document.getElementById('play-again');
const messageElement = document.getElementById('message');
const finalMessageElement = document.getElementById('final-message');
const player1Choices = document.getElementById('player1-choices');
const player2Choices = document.getElementById('player2-choices');

let player1Name, player2Name;
let player1Choice, player2Choice;

function startGame() {
    player1Name = document.getElementById('player1-name').value.trim();
    player2Name = document.getElementById('player2-name').value.trim();
    if (player1Name === '' || player2Name === '') {
        alert('Please enter both player names');
        return;
    }
    document.getElementById('greeting').textContent = `Welcome, ${player1Name} and ${player2Name}!`;
    document.getElementById('player1-greeting').textContent = `${player1Name}, make your choice:`;
    document.getElementById('player2-greeting').textContent = `${player2Name}, make your choice:`;
    homeScreen.style.display = 'none';
    gameScreen.style.display = 'block';
}

function checkWinner() {
    if (player1Choice && player2Choice) {
        let result;
        if (player1Choice === player2Choice) {
            result = 'It\'s a draw!';
        } else if (
            (player1Choice === 'rock' && player2Choice === 'scissors') ||
            (player1Choice === 'scissors' && player2Choice === 'paper') ||
            (player1Choice === 'paper' && player2Choice === 'rock')
        ) {
            result = `${player1Name} wins!`;
        } else {
            result = `${player2Name} wins!`;
        }
        messageElement.textContent = result;
        restartGameButton.style.display = 'block';
    }
}

function handleChoice(e, player) {
    if (player === 'player1') {
        player1Choice = e.target.id.replace('1', '');
    } else if (player === 'player2') {
        player2Choice = e.target.id.replace('2', '');
    }
    checkWinner();
}

function restartGame() {
    player1Choice = null;
    player2Choice = null;
    messageElement.textContent = '';
    restartGameButton.style.display = 'none';
}

startGameButton.addEventListener('click', startGame);
player1Choices.addEventListener('click', (e) => handleChoice(e, 'player1'));
player2Choices.addEventListener('click', (e) => handleChoice(e, 'player2'));
restartGameButton.addEventListener('click', restartGame);
playAgainButton.addEventListener('click', () => {
    gameOverScreen.style.display = 'none';
    homeScreen.style.display = 'block';
});
