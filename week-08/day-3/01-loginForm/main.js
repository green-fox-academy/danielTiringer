'use strict';

	let passwordField = document.querySelector('#password');
	console.log(passwordField);

function togglePassword() {
	let passwordField = document.querySelector('#password');
	console.log(passwordField);
  passwordField.type === "password" ? passwordField.type = 'text' : passwordField.type = 'password;
}
