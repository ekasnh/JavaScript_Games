const cells = document.querySelectorAll('[data-cell]');
const board = document.getElementById('board');
const resultScreen = document.getElementById('resultScreen');
const resultMessage = document.getElementById('resultMessage');
const newGameButton = document.getElementById('newGameButton');
let isXTurn = true;
let gameActive = true;

const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const handleClick = (e) => {
    const cell = e.target;
    const currentClass = isXTurn ? 'X' : 'O';

    if (cell.textContent !== '' || !gameActive) {
        return;
    }

    cell.textContent = currentClass;
    cell.classList.add(currentClass);

    if (checkWin(currentClass)) {
        endGame(false, currentClass);
    } else if (isDraw()) {
        endGame(true);
    } else {
        isXTurn = !isXTurn;
    }
};

const checkWin = (currentClass) => {
    return winningCombinations.some(combination => {
        return combination.every(index => {
            return cells[index].classList.contains(currentClass);
        });
    });
};

const isDraw = () => {
    return [...cells].every(cell => {
        return cell.textContent === 'X' || cell.textContent === 'O';
    });
};

const endGame = (draw, winner) => {
    if (draw) {
        resultMessage.textContent = "It's a draw!";
    } else {
        resultMessage.textContent = `${winner} wins!`;
    }
    gameActive = false;
    showResultScreen();
};

const showResultScreen = () => {
    resultScreen.style.display = 'flex';
};

const restartGame = () => {
    isXTurn = true;
    gameActive = true;
    resultScreen.style.display = 'none';
    cells.forEach(cell => {
        cell.textContent = '';
        cell.classList.remove('X', 'O');
    });
};

cells.forEach(cell => {
    cell.addEventListener('click', handleClick);
});

newGameButton.addEventListener('click', restartGame);
