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
		switch (event.target.getAttribute('data-direction')) {
			case 'right':
				img.horizontalPosition += 10;
				break;
			case 'left':
				img.horizontalPosition -= 10;
				break;
			case 'up':
				img.verticalPosition -= 10;
				break;
			case 'down':
				img.verticalPosition += 10;
				break;
		};
		background.style.backgroundPosition = `${img.horizontalPosition}px ${img.verticalPosition}px`;
	} else if (event.target.getAttribute('data-action') === 'zoom') {
		switch (event.target.getAttribute('data-direction')) {
			case 'in':
				img.aspectRatio += 20;
				break;
			case  'out':
				img.aspectRatio -= 20;
				break;
		};
		background.style.backgroundSize = `${200 * (1 + img.aspectRatio / 100)}%`
	};
});
