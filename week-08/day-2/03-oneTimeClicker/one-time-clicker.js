'use strict';

let button = document.querySelector('button');

button.onclick = () => {
	console.log(`The current timestamp is: ${Date.now()}`);
	// The first way of solving this: disable the button
	button.disabled = true;
	// Another way of disabling the button, by setting an attribute for it:
	button.setAttribute('onclick', this.disabled = true);
};
