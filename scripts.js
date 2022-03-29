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

// Function that plays 5 rounds and returns the winner of the game
function game() {

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt(
      "Round " + (i + 1) + " - Type Rock, Paper or Scissors to play:"
    );
    let computerSelection = computerPlay();

    if (!playerSelection) {
      alert("You must enter a value.");
    } else {
      let gameRound = playRound(playerSelection, computerSelection);
      console.log(gameRound);

      if (gameRound.includes("win")) {
        playerScore += 1;
        console.log("Wins: " + playerScore);
        console.log("Losses: " + computerScore);
      } else if (gameRound.includes("loose")) {
        computerScore += 1;
        console.log("Wins: " + playerScore);
        console.log("Losses: " + computerScore);
      }
    }
  }

  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (playerScore < computerScore) {
    console.log("Oh no... You've lost the game!");
  } else {
    console.log("The game ended with draw.");
  }
}

game();
