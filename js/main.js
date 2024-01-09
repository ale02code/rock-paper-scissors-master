"use strict";

const main = document.querySelector(".main");
const mainContent = document.querySelector(".main__content");
const options = document.querySelectorAll(".container-option");

let score = 0;
let playerSelection;

let computerSelection = () => {
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  if (randomNumber === 1) {
    return 'rock';
  } else if (randomNumber === 2) {
    return 'paper';
  } else if (randomNumber === 3) {
    return 'scissors';
  } else if (randomNumber === 4) {
    return 'lizard';
  } else if (randomNumber === 5) {
    return 'spock';
  }
}

const round = document.createElement('section');
const containerRound = document.createElement("div");
const roundBorder = document.createElement("div");
const roundButtonsContainer = document.createElement("div");
const roundImage = document.createElement("img");
const roundText = document.createElement('p');

main.appendChild(round);
round.appendChild(containerRound);
containerRound.appendChild(roundBorder);
roundBorder.appendChild(roundButtonsContainer);
roundButtonsContainer.appendChild(roundImage);
containerRound.appendChild(roundText);

round.classList.add("round", "hidden");
containerRound.classList.add("container-round");
roundButtonsContainer.classList.add("main__content__buttons__container");
roundImage.classList.add("option");
roundText.classList.add("round__text");

roundText.textContent = 'You picked';

const playRound = () => {
  mainContent.classList.add("hidden");
  round.classList.remove("hidden");

  const result = computerSelection();
  console.log(result);

  roundBorder.classList.add(`${playerSelection}-border`);
  roundImage.src = `images/icon-${playerSelection}.svg`;
}

options.forEach(opt => {
  opt.addEventListener("click", () => {
    playerSelection = opt.id;
    console.log(playerSelection);
    playRound();
  })
})