const homeScreen = document.getElementById('home-screen');
const gameScreen = document.getElementById('game-screen');
const gameOverScreen = document.getElementById('game-over-screen');
const startGameButton = document.getElementById('start-game');
const submitGuessButton = document.getElementById('submit-guess');
const restartGameButton = document.getElementById('restart-game');
const playAgainButton = document.getElementById('play-again');
const scrambledWordElement = document.getElementById('scrambled-word');
const guessInput = document.getElementById('guess');
const messageElement = document.getElementById('message');
const greetingElement = document.getElementById('greeting');
const finalMessageElement = document.getElementById('final-message');

let words = ['javascript', 'mobile', 'responsive', 'game', 'scramble', 'coding'];
let currentWord;
let playerName;

function scrambleWord(word) {
    let scrambled = word.split('').sort(() => 0.5 - Math.random()).join('');
    return scrambled === word ? scrambleWord(word) : scrambled;
}

function startGame() {
    playerName = document.getElementById('player-name').value.trim();
    if (playerName === '') {
        alert('Please enter your name');
        return;
    }
    greetingElement.textContent = `Hello, ${playerName}! Unscramble this word:`;
    nextWord();
    homeScreen.style.display = 'none';
    gameScreen.style.display = 'block';
}

function nextWord() {
    currentWord = words[Math.floor(Math.random() * words.length)];
    scrambledWordElement.textContent = scrambleWord(currentWord);
    guessInput.value = '';
    messageElement.textContent = '';
    restartGameButton.style.display = 'none';
}

function checkGuess() {
    if (guessInput.value.trim().toLowerCase() === currentWord) {
        messageElement.textContent = 'Correct! Well done!';
        restartGameButton.style.display = 'block';
    } else {
        messageElement.textContent = 'Try again!';
    }
}

function restartGame() {
    nextWord();
}

function gameOver() {
    finalMessageElement.textContent = `Good try, ${playerName}! Thanks for playing!`;
    gameScreen.style.display = 'none';
    gameOverScreen.style.display = 'block';
}

startGameButton.addEventListener('click', startGame);
submitGuessButton.addEventListener('click', checkGuess);
restartGameButton.addEventListener('click', restartGame);
playAgainButton.addEventListener('click', () => {
    gameOverScreen.style.display = 'none';
    homeScreen.style.display = 'block';
});
