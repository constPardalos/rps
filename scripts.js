// Rock Paper Scissors

// Randomly return 1 of the 3 predefined strings
function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
    
}

// Function that takes player and computer selection,
// compares them and returns the winner
function playRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {

        return "Draw!";

    } else if (playerSelection === "rock") {
        
        if (computerSelection === "paper") {
            return "You loose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }

    } else if (playerSelection === "paper") {
        
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock";
        } else {
            return "You loose! Scissors beat Paper";
        }

    } else if (playerSelection === "scissors") {
        
        if (computerSelection === "rock") {
            return "You loose! Rock beats scissors";
        } else {
            return "You win! Scissors beat Paper";
        }
    } else {
        return "Something went wrong";
    }
}

const playerSelection = "roCk";
const computerSelection = computerPlay();

console.log("You played: " + playerSelection);
console.log("Computer played: " + computerSelection);
console.log(playRound(playerSelection, computerSelection));