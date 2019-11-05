'use strict';

let body = document.querySelector('body');
let h1 = document.querySelector('h1');

body.addEventListener('keyup', function (event) {
	console.log(event);
	h1.textContent = `The last pressed key code is: ${event.keyCode}`;
});
