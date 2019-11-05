'use strict';

let button = document.querySelector('button');
let paragraph = document.querySelector('p');

button.setAttribute('onclick', this.disabled = true);

window.onload = () => {
	setTimeout(() => {
		button.setAttribute('onclick', this.disabled = false);
		let clickCount = 0;
		button.onclick = () => {
			clickCount++;
			if (clickCount >=3) {
				paragraph.textContent = '5 seconds elapsed and clicked 3 times';
			}
		};
	}, 5000);
};
