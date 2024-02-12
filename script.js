const getComputerChoice = () => {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

const capitalize = (word) => {
    return word.charAt(0).toUpperCase() + word.slice(1);
}

let playerScore = 0;
let computerScore = 0;

const updateScore = (result) => {
    if (result.includes('Win')) {
        playerScore++;
    } else if (result.includes('Lose')) {
        computerScore++;
    }

    document.getElementById('score').textContent = `Score - Player: ${playerScore}, Computer: ${computerScore}`;

    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? 'Player' : 'Computer';
        document.getElementById('winner').textContent = `Game Over! ${winner} wins!`;
        playerScore = 0;
        computerScore = 0;
    }
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

    const result = determineWinner(playerChoice, computerSelection);
    document.getElementById('results').textContent = result;
    updateScore(result);
}

document.getElementById('rock').addEventListener('click', () => playRound('rock', getComputerChoice()));
document.getElementById('paper').addEventListener('click', () => playRound('paper', getComputerChoice()));
document.getElementById('scissors').addEventListener('click', () => playRound('scissors', getComputerChoice()));