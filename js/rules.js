"use strict";

const body = document.body;
const buttonToRules = document.querySelector('.footer__rules');

const ruleContainer = document.createElement('section');
ruleContainer.classList.add('rule-container');
const ruleContent = document.createElement('div');
ruleContent.classList.add('rule-content');

const ruleTitle = document.createElement('h2');
ruleTitle.textContent = 'Rules';
ruleTitle.classList.add('rule-title');

const ruleImage = document.createElement('img');
ruleImage.src = 'images/image-rules-bonus.svg';
ruleImage.alt = "rules image";
ruleImage.classList.add('rule-image');

const ruleExit = document.createElement('img');
ruleExit.src = 'images/icon-close.svg';
ruleExit.alt = 'close';
ruleExit.classList.add('rule-exit');

ruleExit.addEventListener('click', () => {
  ruleContainer.style.display = "none";
})

buttonToRules.addEventListener('click', () => {
  ruleContainer.style.display = "flex";
})

body.appendChild(ruleContainer);
ruleContainer.appendChild(ruleContent);
ruleContent.appendChild(ruleTitle);
ruleContent.appendChild(ruleImage);
ruleContent.appendChild(ruleExit);