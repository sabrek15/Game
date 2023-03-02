const buttons = document.querySelectorAll('.btn');

function getComputerChoice() {
    const options = ["rock","papper","scissor"];
    const randoption = options[Math.floor(Math.random()*options.length)];
    return randoption;
}