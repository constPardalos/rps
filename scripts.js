// Rock Paper Scissors

// Randomly return 1 of the 3 predefined strings
function computerPlay() {
    randomNum = Math.floor(Math.random() * 3);

    if (randomNum === 0) {
        return "Rock";
    } else if (randomNum === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
    
}

console.log('Computer played: ' + computerPlay());
