function getComputerChoice() {
    const options = ["rock","papper","scissor"];
    const randoption = options[Math.floor(Math.random()*options.length)];
    return randoption;
}

const buttons = document.querySelectorAll('button');
  buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        let playerchoice = event.target.id;
        console.log(playerchoice);
    });
  });