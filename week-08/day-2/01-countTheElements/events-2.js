'use strict';

let button = document.querySelector('button');
let list = document.querySelectorAll('li');
let paragraph = document.querySelector('.result');

button.onclick = () => {
	paragraph.textContent = list.length;
};
