// Rock Paper Scissors (RPS)

// Function that returns 1 of the 3 predefined choices
function computerPlay() {

    // Generate and store a random number between 0 and 2
    randomNum = Math.floor(Math.random() * 3);

    // Return one of the 3 strings based on the number
    if (randomNum === 0) {
        return "rock";
    } else if (randomNum === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

// Function that takes player and computer choices,
// compares them and returns the outcome
function playRound(playerSelection, computerSelection) {

    // If both choices are the same:
    if (playerSelection === computerSelection) {
        return "Draw!";
    }

    // If player's choice is "rock":
    else if (playerSelection === "rock") {
        // and computer's is either "paper" or "scissors":
        if (computerSelection === "paper") {
            return "You loose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    }
    // If player's choice is "paper":
    else if (playerSelection === "paper") {
        // and computer's is either "rock" or "scissors":
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock";
        } else {
            return "You loose! Scissors beat Paper";
        }
    }
    // If player's choice is "scissors":
    else if (playerSelection === "scissors") {
        // and computer's is either "rock" or "paper":
        if (computerSelection === "rock") {
            return "You loose! Rock beats scissors";
        } else {
            return "You win! Scissors beat Paper";
        }
    }
    // In case of incorrect input:
    else {
        return "Something went wrong";
    }
}

// Function that plays 5 rounds and returns the final score and outcome of the game
function game() {

    // Create the scoreboard
    let playerScore = 0;
    let computerScore = 0;

    // Start looping through the 5 rounds
    for (let i = 0; i < 5; i++) {

        // Ask user for input
        let playerSelection = prompt(
            "Round " + (i + 1) + " - Type Rock, Paper or Scissors to play:"
        );

        // If user clicks cancel:
        if (playerSelection === null) {
            console.log("Round " + (i + 1) + ": Canceled. You clicked cancel.");
        }
        // If user clicks OK without entering something:
        else if (playerSelection === "") {
            console.log("Round " + (i + 1) + ": Invalidated. You did not enter a value.");
        }
        // If user enters a value:
        else {

            // Convert input to lower case
            playerSelection = playerSelection.toLowerCase();

            // If the value entered is incorrect:
            if (playerSelection !== "rock" &&
                playerSelection !== "paper" &&
                playerSelection !== "scissors") {
                console.log("Round " + (i + 1) + ": Invalidated. Value entered is not allowed.");
            }
            // If the value entered is correct:
            else {

                // Get a random choice and store it
                let computerSelection = computerPlay();

                // Initialize a round and return the resulting string
                let gameRound = playRound(playerSelection, computerSelection);
                console.log("Round " + (i + 1) + " :" + gameRound);

                // If the resulting string includes the word "win", increase player's win count and display current score:
                if (gameRound.includes("win")) {
                    playerScore += 1;
                    console.log("Wins: " + playerScore + " | " + "Losses: " + computerScore);
                }
                // If the resulting string includes the word "loose", increase computer's win count and display current score:
                else if (gameRound.includes("loose")) {
                    computerScore += 1;
                    console.log("Wins: " + playerScore + " | " + "Losses: " + computerScore);
                }
            }
        }
    }

    // Once the loops are complete, compare player's score with computer's
    // If player has more wins:
    if (playerScore > computerScore) {
        console.log("----- GAME COMPLETE -----");
        console.log("Wins: " + playerScore + " | " + "Losses: " + computerScore);
        console.log("Congratulations! You won the game!");
    }
    // If computer has more wins:
    else if (playerScore < computerScore) {
        console.log("----- GAME COMPLETE -----");
        console.log("Wins: " + playerScore + " | " + "Losses: " + computerScore);
        console.log("Oh no... You've lost the game!");
    }
    // If both have equal or no wins:
    else {
        console.log("----- GAME COMPLETE -----");
        console.log("Wins: " + playerScore + " | " + "Losses: " + computerScore);
        console.log("The game ended with draw.");
    }
}
