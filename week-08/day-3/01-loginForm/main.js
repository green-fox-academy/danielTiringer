'use strict';

let passwordField = document.querySelector('#password');

passwordField.addEventListener('click', (event) => {
	console.log(event);
	if (event.clientX > 580) {
		togglePassword();
	}
});

function togglePassword() {
  passwordField.type === 'password' ? passwordField.type = 'shownPassword' : passwordField.type = 'password';
}
