const buttons = document.querySelectorAll("button");
const resultParagraph = document.getElementById("result");
const scoreParagraph = document.getElementById("score");
        
let playerScore = 0;
let computerScore = 0;
        
buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const userChoice = button.id;
        const computerChoice = getComputerChoice();
        const result = determineWinner(userChoice, computerChoice);
        updateScore(result);
        displayResult(result, computerChoice);
        checkForGameEnd();
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
        playerScore++;
        return "You win!";
    } else {
        computerScore++;
        return "Computer wins!";
    }
}
        
function displayResult(result, computerChoice) {
    resultParagraph.innerHTML = `Computer chose ${computerChoice}. ${result}`;
}
        
function updateScore(result) {
    scoreParagraph.innerHTML = `Player: ${playerScore} | Computer: ${computerScore}`;
}
        
function checkForGameEnd() {
    if (playerScore === 5 || computerScore === 5) {
                endGame();
    }
}
        
function endGame() {
    if (playerScore > computerScore) {
        resultParagraph.innerHTML = "Congratulations! You won the game!";
    } else if (playerScore < computerScore) {
        resultParagraph.innerHTML = "Computer wins the game!";
    } else {
        resultParagraph.innerHTML = "It's a tie game!";
    }
            // Disable buttons to prevent further plays
    buttons.forEach(button => button.disabled = true);
}