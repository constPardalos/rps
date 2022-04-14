const options = Array.from(document.querySelectorAll('.option'));
options.forEach(option => option.addEventListener('click', () => {
    playRound(option.getAttribute('value'));
}));

let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('.results');
results.textContent = "";

const score = document.querySelector('.score');
score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

const reset = document.querySelector('.reset');
reset.addEventListener('click', resetGame);
reset.style.cssText = 'visibility: hidden;';

// Randomly select a choice for the computer
function computerPlay() {
    const randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

// Compare player and computer choices, return the outcome and update the score
function playRound(playerChoice) {

    const playerSelection = playerChoice;
    const computerSelection = computerPlay();

    console.log(playerSelection + " vs " + computerSelection);

    if (playerSelection === computerSelection) {
        results.textContent = "Tie! You both used " + computerSelection;
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            results.textContent = "You lose! Paper beats Rock";
            computerScore += 1;
        } else {
            results.textContent = "You win! Rock beats Scissors";
            playerScore += 1;
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Rock") {
            results.textContent = "You win! Paper beats Rock";
            playerScore += 1;
        } else {
            results.textContent = "You lose! Scissors beat Paper";
            computerScore += 1;
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            results.textContent = "You lose! Rock beats Scissors";
            computerScore += 1;
        } else {
            results.textContent = "You win! Scissors beat Paper";
            playerScore += 1;
        }
    } else {
        results.textContent = "Something went wrong";
    }

    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
    checkScore();
}

// After each round check score to see if someone reached a score of 5
function checkScore() {

    if (playerScore === 5) {
        results.textContent = "Game over. You are the winner!";
        options.forEach(option => {
            option.disabled = true;
        });
        reset.style.cssText = 'visibility: visible;';
    } else if (computerScore === 5) {
        results.textContent = "Game over. You are the loser!";
        options.forEach(option => {
            option.disabled = true;
        });
        reset.style.cssText = 'visibility: visible;';
    }
}

// Reset everything and start new game
function resetGame() {

    playerScore = 0;
    computerScore = 0;

    results.textContent = "";
    score.textContent = `Player: ${playerScore} | Computer: ${computerScore}`;

    options.forEach(option => {
        option.disabled = false;
    });

    reset.style.cssText = 'visibility: hidden;';
}