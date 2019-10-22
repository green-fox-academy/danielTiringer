'use strict';

let button = document.querySelector('button');
let body = document.querySelector('body');

button.onclick = () => {
	body.getAttribute('class') != 'party' ? body.setAttribute('class', 'party') : body.setAttribute('class', '');
}
