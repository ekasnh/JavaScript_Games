# Mario Game - In-Browser Version

Welcome to the Mario Game! This is a fun and interactive game built using Vanilla JavaScript and HTML Canvas. It allows you to play the classic Mario game directly in your web browser. This README file will guide you through the setup, features, and gameplay.

## Table of Contents

- [Features](#features)
- [Getting Started](#getting-started)
- [How to Play](#how-to-play)
- [Project Structure](#project-structure)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)

## Features

- Classic Mario gameplay experience.
- Smooth animations and controls.
- Interactive and responsive canvas-based game.
- Scoring and level progression.

## Getting Started

### Prerequisites

To run the game, you only need a modern web browser. No additional software is required.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mario-game.git
Navigate to the project directory:
bash
Copy code
cd mario-game
Open the index.html file in your browser:
bash
Copy code
open index.html
Alternatively, you can open it directly from your file explorer by double-clicking on the index.html file.
Hosting Locally
You can also run the game using a local server for a better experience:

Install a local server (e.g., Live Server for VSCode or http-server):
bash
Copy code
npm install -g http-server
Start the server in the project directory:
bash
Copy code
http-server
Open your browser and navigate to the provided local server address (e.g., http://127.0.0.1:8080).
How to Play
Controls
Arrow Keys: Use the left and right arrow keys to move Mario left and right.
Spacebar: Press the spacebar to make Mario jump.
P Key: Press the P key to pause or resume the game.
Objective
Guide Mario through the levels, avoid obstacles, and collect coins to score points. The game becomes progressively challenging as you advance through the levels.

Project Structure
```bash
    mario-game/
    ├── assets/
    │   ├── images/
    │   │   ├── mario.png
    │   │   ├── enemies.png
    │   │   ├── background.png
    │   │   └── ...
    │   └── sounds/
    │       ├── jump.wav
    │       ├── coin.wav
    │       └── ...
    ├── css/
    │   └── styles.css
    ├── js/
    │   ├── game.js
    │   ├── mario.js
    │   ├── enemy.js
    │   ├── platform.js
    │   └── ...
    ├── index.html
    └── README.md

