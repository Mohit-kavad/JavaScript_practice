const startGameBtn = document.getElementById("start-game-btn");

const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = ROCK;
const RESULT_PLAYER_WIN = "PLAYER_WIN";
const RESULT_COMPUTER_WIN = "COMPUTER_WIN";
const RESULT_DRAW = "DRAW";

let gameIsRunning = false;

const getPlayerChoice = function () {
  const selection = prompt(
    `${ROCK},${PAPER} OR ${SCISSORS}?`,
    ""
  ).toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSORS) {
    alert(`Invalid choice!we chose ${DEFAULT_USER_CHOICE} for you!`);
    return ;
  }
  return selection;
};

const getComputerChoice = function () {
  const randomValue = Math.random();
  if (randomValue < 0.34) {
    return ROCK;
  } else if (randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSORS;
  }
};

const getWinner = (cChoice, pChoice) => {
  // condition for player win
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSORS) ||
    (cChoice === SCISSORS && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

startGameBtn.addEventListener("click", function () {
//   if (gameIsRunning) {
//     // gameIsRunning === true
//     return;
//   }
//   gameIsRunning = true;
  console.log("game is starting....");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  // console.log(computerSelection);
  const winner = getWinner(computerSelection, playerSelection);
  // console.log(winner);
  let message = `you picked ${playerSelection} ,computer picked ${computerSelection} therefore you`;
  if(winner === RESULT_DRAW){
    message = message + ' had a draw';
  }else if(winner === RESULT_PLAYER_WIN){
    message = message + ' won';
  }else{
    message = message + ' loss'
  }
  alert(message);

});
