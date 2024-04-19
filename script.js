
let playerCounter = 0;        // increases by one when player wins
let computerCounter = 0;     // increases by one when computer wins
let choices = ["rock", "paper", "scissor"]; //choices for machine to chosse from

// selecting elements by id to add events for dynamic functionality
const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissor = document.getElementById('scissor');

createDiv();
// Adding events
rock.addEventListener('click', playGame);
paper.addEventListener('click', playGame);
scissor.addEventListener('click', playGame);

// FUNCTION FOR PLAYING THE GAME FOR FIVE ROUNDS
function playGame(e) {
  let playerSelection = e.target.id;
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  let finalScore = getFinalResult();
  createPara(result);
  if (finalScore) { createResultBox(finalScore); }

}

// FUNCTION THAT SHOWS AT THE END WHO WHEN THE GAME PLAYER OR COMPUTER WITH SCORES
function getFinalResult() {
  if (playerCounter === 5) {
    let score = (`You Have Won the Game Congratulations! with the Score ${playerCounter}:${computerCounter}`);
    playerCounter = 0;
    computerCounter = 0;
    return score
  } else if (computerCounter === 5) {
    let score = (`Computer Have Won the Game , Try Again... Scores are ${playerCounter}:${computerCounter}`);
    playerCounter = 0;
    computerCounter = 0;
    return score
  }
}

// fuction for computer to make random choices
function getComputerChoice() {
  let indexOfChoice = Math.floor(Math.random() * 3);
  return choices[indexOfChoice];

}

// Creates a div element inside the body
function createDiv() {
  const divContainer = document.querySelector('.text-container');
  const div = document.createElement('div');

  divContainer.appendChild(div);
}

// creates a paragraph inside the created div
function createPara(paragraph) {
  const div = document.querySelector('.text-container div');
  const para = document.createElement('p');
  div.appendChild(para);
  para.textContent = paragraph;

}

// function for the final result to show on the DOM
function createResultBox(winner) {
  const div = document.querySelector('.text-container div');
  const box = document.createElement('h2');
  div.appendChild(box);
  box.textContent = winner;
}



// function that checks who wins player or computer,takes to parameters a player_choice and a computer_choice
function playRound(player, computer) {
  if (player === computer)

    return `The Round is Tied! ${player.toUpperCase()} = ${computer.toUpperCase()} the score is ${playerCounter}:${computerCounter}`;
  else if ((player === "rock" && computer === "scissor") ||
    (player === "scissor" && computer === "paper") ||
    (player === "paper" && computer === "rock")
  ) {
    playerCounter++;
    return `The player Wins the Round ${player.toUpperCase()} Beats ${computer.toUpperCase()} the score is ${playerCounter}:${computerCounter}`;
  }
  else if ((computer === "rock" && player === "scissor") ||
    (computer === "scissor" && player === "paper") ||
    (computer === "paper" && player === "rock")
  ) {
    computerCounter++;
    return `The Computer Wins the Round ${computer.toUpperCase()} Beats ${player.toUpperCase()} the score is ${playerCounter}:${computerCounter}`;
  }
}

// picks a random number between 0 and 255
function randomNumber(number) {
  return Math.floor(Math.random() * number + 1);
}

// changes background randomly of the gievn element
function changeBg(element) {
  document.querySelector(element).style.backgroundColor = `rgb(${randomNumber(255)} ${randomNumber(255)} ${randomNumber(255)})`;
}

setInterval(() => { changeBg('body') }, 1000);

