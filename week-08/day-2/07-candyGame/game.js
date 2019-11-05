'use strict';

// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x

let candyCounter = document.querySelector('.candies');
let lollyCounter = document.querySelector('.lollypops');
let candiesPerSecondCounter = document.querySelector('.speed');

let candyButton = document.querySelector('.create-candies');
let lollyButton = document.querySelector('.buy-lollypops');
let machineButton = document.querySelector('.candy-machine');

let lollypop = lollyCounter.textContent.slice(0, 2);

candyButton.onclick = () => {
	candyCounter.textContent++;
};

lollyButton.onclick = () => {
	if (candyCounter.textContent >= 100) {
			candyCounter.textContent = candyCounter.textContent - 100;
			lollyCounter.textContent = lollyCounter.textContent + lollypop;
	};
};

machineButton.onclick = () => {
	candiesPerSecondCounter.textContent = candiesPerSecondCounter.textContent * 10
};

setInterval(() => {
	candyCounter.textContent = parseInt(candyCounter.textContent) + Math.floor(lollyCounter.textContent.length / 20) * candiesPerSecondCounter.textContent;

}, 1000);
