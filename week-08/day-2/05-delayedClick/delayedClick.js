'use strict';

let button = document.querySelector('button');
let paragraph = document.querySelector('p');

button.onclick = () => {
	setTimeout(() => {
		paragraph.textContent = '2 seconds elapsed';
	}, 2000)
};
