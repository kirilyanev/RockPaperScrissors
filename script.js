const options = document.querySelectorAll(".option");
const result = document.querySelector("#result");

options.forEach((option) => {
  option.addEventListener("click", function () {
    const userChoice = this.id;
    const computerChoice = computerPlay();
    const roundResult = playRound(userChoice, computerChoice);

    result.textContent = roundResult;

    function computerPlay() {
      const choices = ["rock", "paper", "scissors"];
      const randomChoice = Math.floor(Math.random() * 3);
      return choices[randomChoice];
    }

    function playRound(playerSelection, computerSelection) {
      if (playerSelection === computerSelection) {
        return "It's a tie!";
      } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
      ) {
        return "You win!";
      } else {
        return "You lose!";
      }
    }
  });
});
