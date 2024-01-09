"use strict";

const mainInit = document.querySelector(".main");

const main = document.createElement("main");
main.classList.add("main__false");
mainInit.appendChild(main);

const mainContent = document.querySelector(".main__content");
const options = document.querySelectorAll(".container-option");
const scoreContainer = document.querySelector(".header__content__score-container__number");

let score = 0;
scoreContainer.textContent = score;
let playerSelection;

const computerSelection = () => {
  let resultSelectionComputer;

  const randomNumber = Math.floor(Math.random() * 5) + 1;

  if (randomNumber === 1) {
    resultSelectionComputer = 'rock';
  } else if (randomNumber === 2) {
    resultSelectionComputer = 'paper';
  } else if (randomNumber === 3) {
    resultSelectionComputer = 'scissors';
  } else if (randomNumber === 4) {
    resultSelectionComputer = 'lizard';
  } else if (randomNumber === 5) {
    resultSelectionComputer = 'spock';
  }

  return resultSelectionComputer;
}

const waiting = document.createElement('section');

const waitingSection = () => {
  const borderShadow = document.createElement('div');
  const textWaiting = document.createElement('p');

  textWaiting.textContent = "the house picked";
  waiting.classList.add("waiting");
  borderShadow.classList.add("waiting__border");
  textWaiting.classList.add("round__text");

  main.appendChild(waiting);
  waiting.appendChild(borderShadow);
  waiting.appendChild(textWaiting);

  waiting.classList.add("waiting");
}

const round = document.createElement('section');
const containerRound = document.createElement("div");
const roundBorder = document.createElement("div");
const roundButtonsContainer = document.createElement("div");
const roundImage = document.createElement("img");
const roundText = document.createElement('p');

const createOptionRound = (section, text) => {
  main.appendChild(round);
  round.appendChild(containerRound);
  containerRound.appendChild(roundBorder);
  roundBorder.appendChild(roundButtonsContainer);
  roundButtonsContainer.appendChild(roundImage);
  containerRound.appendChild(roundText);

  round.classList.add("round");
  containerRound.classList.add("container-round");
  roundButtonsContainer.classList.add("main__content__buttons__container");
  roundImage.classList.add("option");
  roundText.classList.add("round__text");

  roundText.textContent = text;
  roundBorder.classList.remove("rock-border", "paper-border", "scissors-border", "spock-border", "lizard-border");
  roundBorder.classList.add(`${section}-border`);
  roundImage.src = `images/icon-${section}.svg`;
}

const round2 = document.createElement('section');
const containerRound2 = document.createElement("div");
const roundBorder2 = document.createElement("div");
const roundButtonsContainer2 = document.createElement("div");
const roundImage2 = document.createElement("img");
const roundText2 = document.createElement('p');

const createOptionRound2 = (section, text) => {
  main.appendChild(round2);
  round2.appendChild(containerRound2);
  containerRound2.appendChild(roundBorder2);
  roundBorder2.appendChild(roundButtonsContainer2);
  roundButtonsContainer2.appendChild(roundImage2);
  containerRound2.appendChild(roundText2);

  round2.classList.add("round2");
  containerRound2.classList.add("container-round2");
  roundButtonsContainer2.classList.add("main__content__buttons__container");
  roundImage2.classList.add("option");
  roundText2.classList.add("round__text");

  roundText2.textContent = text;
  roundBorder2.classList.remove("rock-border", "paper-border", "scissors-border", "spock-border", "lizard-border");
  roundBorder2.classList.add(`${section}-border`);
  roundImage2.src = `images/icon-${section}.svg`;
}


const containerButtons = document.createElement('section');
const buttonAgain = document.createElement('button');
const textButtons = document.createElement('strong');

containerButtons.classList.add("container-buttons", "hidden");
textButtons.classList.add("container-buttons__text");
buttonAgain.classList.add("container-buttons__button");

buttonAgain.textContent = "play again";

main.appendChild(containerButtons);
containerButtons.appendChild(textButtons);
containerButtons.appendChild(buttonAgain);

const playRound = (computerRes) => {
  mainContent.classList.add("hidden");
  createOptionRound(playerSelection, 'you picked');
  waitingSection();

  setTimeout(() => {
    waiting.classList.add("hidden");
    createOptionRound2(computerRes, 'the house picked');
    result(computerRes);

    if (result(computerRes) == 'win') {
      score++;
      scoreContainer.textContent = score;
      containerButtons.classList.remove("hidden");
      textButtons.textContent = "you win";
    } else {
      textButtons.textContent = "you lose";
      containerButtons.classList.remove("hidden");
    }
  }, 1000);
}

const result = (computerRes) => {
  if (playerSelection === computerRes) {
    return 'tie';
  } else if (playerSelection === 'rock') {
    return (computerRes === 'scissors' || computerRes === 'lizard') ? 'win' : 'lose';
  } else if (playerSelection === 'paper') {
    return (computerRes === 'rock' || computerRes === 'spock') ? 'win' : 'lose';
  } else if (playerSelection === 'scissors') {
    return (computerRes === 'paper' || computerRes === 'lizard') ? 'win' : 'lose';
  } else if (playerSelection === 'lizard') {
    return (computerRes === 'spock' || computerRes === 'paper') ? 'win' : 'lose';
  } else if (playerSelection === 'spock') {
    return (computerRes === 'scissors' || computerRes === 'rock') ? 'win' : 'lose';
  }
}

options.forEach(opt => {
  opt.addEventListener("click", () => {
    main.style.display = "flex"
    playerSelection = opt.id;
    const res = computerSelection()
    playRound(res);
  })
});

main.style.display = "none"

buttonAgain.addEventListener("click", () => {
  containerButtons.classList.add("hidden");
  main.style.display = "none"
  mainContent.classList.remove("hidden");
  playerSelection = '';
})