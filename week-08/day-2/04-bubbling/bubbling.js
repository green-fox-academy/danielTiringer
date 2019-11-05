'use strict';

let background = document.querySelector('.img-inspector');
let navTag = document.querySelector('nav');

let img = {
	verticalPosition: 0,
	horizontalPosition: 0,
	aspectRatio: 0
}

navTag.addEventListener ('click', function (event) {
	if (event.target.getAttribute('data-action') === 'move') {
		if (event.target.getAttribute('data-direction') === 'right') {
				img.horizontalPosition += 10;
		} else if (event.target.getAttribute('data-direction') === 'left') {
				img.horizontalPosition -= 10;
		} else if (event.target.getAttribute('data-direction') === 'up') {
				img.verticalPosition -= 10;
		} else if (event.target.getAttribute('data-direction') === 'down') {
				img.verticalPosition += 10;
		}
		background.style.backgroundPosition = `${img.horizontalPosition}px ${img.verticalPosition}px`;
	} else if (event.target.getAttribute('data-action') === 'zoom') {
		if (event.target.getAttribute('data-direction') === 'in') {
			img.aspectRatio += 20;
		} else if (event.target.getAttribute('data-direction') === 'out') {
			img.aspectRatio -= 20;
		}
		console.log(background.style)
		background.style.backgroundSize = `${200 * (1 + img.aspectRatio / 100)}%`
	};
});
