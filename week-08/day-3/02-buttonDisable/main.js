'use strict';

let loveCatsButton = document.querySelector('#love-cats');
let signupButton = document.querySelector('#sign-up');

let dogButton = document.querySelector('#dog');
let catButton = document.querySelector('#cat');
let goldfishButton = document.querySelector('#goldfish');
let yesButton = document.querySelector('#yes');
let noButton = document.querySelector('#no');
let petSection = document.querySelector('#pets');
let catFactsSection = document.querySelector('#cat-facts');

petSection.addEventListener('click', (event) => {
	if (catButton.checked || dogButton.checked || goldfishButton.checked) {
		signupButton.disabled = false;
	}
});

catFactsSection.addEventListener('click', (event) => {
	yesButton.checked ? loveCatsButton.disabled = false : loveCatsButton.disabled = true;
});

loveCatsButton.addEventListener('click', (event) => {
	alert(`Thank you, you've successfully signed up for cat facts`);
});

signupButton.addEventListener('click', (event) => {
	alert(`Sigh, we still added you to the cat facts list`);
});
