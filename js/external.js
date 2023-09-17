const buttons = document.querySelectorAll("button");
const resultParagraph = document.getElementById("result");
let userScore = 0;
let computerScore = 0;
let turns = 0;

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        if (turns < 5) {
            const userChoice = button.id;
            const computerChoice = getComputerChoice();
            const result = determineWinner(userChoice, computerChoice);
            displayResult(result, computerChoice);
            updateScores(result);
            turns++;
            if (turns === 5) {
                displayFinalResult();
            }
        }
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function determineWinner(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        return "It's a tie!";
    } else if (
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper")
    ) {
        return "You win!";
    } else {
        return "Computer wins!";
    }
}

function displayResult(result, computerChoice) {
    resultParagraph.innerHTML = `Computer chose ${computerChoice}. ${result}`;
}

function updateScores(result) {
    if (result === "You win!") {
        userScore++;
    } else if (result === "Computer wins!") {
        computerScore++;
    }
}

function displayFinalResult() {
    resultParagraph.innerHTML = `Game Over! Your Score: ${userScore}, Computer Score: ${computerScore}`;
}