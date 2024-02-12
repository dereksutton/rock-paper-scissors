const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const playRound = (playerSelection, computerSelection) => {
    // Convert playerSelection to lower case for case-insensitivity
    const playerChoice = playerSelection.toLowerCase();

    // Function to determine the winner
    const determineWinner = (player, computer) => {
        if (player === computer) {
            return "It's a tie! Let's play again.";
        }
        if (
            (player === 'rock' && computer === 'scissors') ||
            (player === 'scissors' && computer === 'paper') ||
            (player === 'paper' && computer === 'rock')
        ) {
            return `You Win! ${capitalize(player)} beats ${capitalize(computer)}`;
        }
        return `You Lose! ${capitalize(computer)} beats ${capitalize(player)}`;
    }

    // Function to capitalize the first letter (for display purposes)
    const capitalize = (word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
    }

    return determineWinner(playerChoice, computerSelection);
}

const game = () => {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose Rock, Paper, or Scissors:");
        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);

        if (result.includes('Win')) {
            playerScore++;
        } else if (result.includes('Lose')) {
            computerScore++;
        } else {
            // In case of a tie, repeat the round
            i--;
            continue;
        }
        console.log(result);
        console.log(`Score - Player: ${playerScore}, Computer: ${computerScore}`);
    }

    if (playerScore > computerScore) {
        console.log("Congrats! You've won the game!");
    } else {
        console.log("Sorry! You've lost the game. Better luck next time!");
    }
}

game();