'use strict';

let track01 = document.querySelector('#track-01');

const playPauseButton = document.querySelector('.play-pause');
const trackElapsedTimeDisplay = document.querySelector('#elapsed-time');
const trackLengthDisplay = document.querySelector('#total-length');

playPauseButton.addEventListener('click', (event) => {
	console.log('You clicked on the pause/play button');
	console.log(event);
	togglePlayPause();
});

track01.addEventListener('loadstart', (event) => {
	console.log(event);
});

track01.addEventListener('play', (event) => {
	console.log(event);
	console.log(event.target.currentTime);
});

track01.addEventListener('ended', (event) => {
	console.log(event);
});

track01.addEventListener('progress', (event) => {
	console.log(event);
	console.log(event.target.duration);
	console.log(durationConverter(event.target.duration));
	trackLengthDisplay.textContent = durationConverter(event.target.duration);
});

track01.ontimeupdate = function () {
	console.log(track01.currentTime);
	trackElapsedTimeDisplay.textContent = durationConverter(track01.currentTime);
}

const durationConverter = (duration) => {
	let hours = Math.floor(duration / 3600);
	let minutes = Math.floor(duration / 60);
	let seconds = Math.round(duration % 60);

	return hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`
};

const togglePlayPause = () => {
	if (playPauseButton.getAttribute('id') == 'play') {
	//if (audio.paused || audio.ended) {
		playPauseButton.setAttribute('id', 'pause');
		//audio.play();
	} else {
		playPauseButton.setAttribute('id', 'play');
		// audio.pause();
	}
}
