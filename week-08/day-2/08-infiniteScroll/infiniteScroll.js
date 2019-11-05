'use strict';

let body = document.querySelector('body');
let randomNumber = Math.floor(Math.random() * 10) + 10;
let scrollThreshold = 300;

function randomColor() {
  let hexLetters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const appendDiv = () => {
	let newDiv = document.createElement('div');
	newDiv.style.backgroundColor = randomColor();
	body.appendChild(newDiv);
};

for (let i = 0; i < randomNumber; i++){
	appendDiv();
};



