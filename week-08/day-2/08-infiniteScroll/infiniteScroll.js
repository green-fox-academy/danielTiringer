'use strict';

let body = document.querySelector('body');
let randomNumber = Math.floor(Math.random() * 10) + 10;
let scrollThreshold = 1000;

function randomColor() {
  let hexLetters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += hexLetters[Math.floor(Math.random() * 16)];
  }
  return color;
}

const appendDivs = (times) => {
	let newDiv = document.createElement('div');
	newDiv.style.backgroundColor = randomColor();
	body.appendChild(newDiv);

	if (times > 1) {
		appendDivs(times - 1);
	}
};

// To draw the initial divs
appendDivs(randomNumber);

// Add more while scrolling
window.addEventListener('scroll', function (event) {
	if (document.body.scrollHeight - scrollThreshold < event.pageY) {
		appendDivs(10);
	}
});

