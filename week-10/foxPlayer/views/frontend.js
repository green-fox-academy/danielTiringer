'use strict';

let currentTrack = document.querySelector('#track-01');
console.log(currentTrack);

const playPauseButton = document.querySelector('.play-pause');
const trackElapsedTimeDisplay = document.querySelector('#elapsed-time');
const trackLengthDisplay = document.querySelector('#total-length');
const progressBar = document.querySelector('#progress');
const volume = document.querySelector('#volume-bar');

playPauseButton.addEventListener('click', (event) => {
	togglePlayPause();
});

const keyboardEvents = document.addEventListener('keydown', (event) => {
	if (event.code === 'Space') {
		togglePlayPause();
	}
});

currentTrack.addEventListener('loadstart', (event) => {
	console.log(event);
});

currentTrack.addEventListener('play', (event) => {
	console.log(event);
});

currentTrack.addEventListener('ended', (event) => {
	console.log(event);
});


currentTrack.addEventListener('progress', (event) => {
	console.log(event);
	trackLengthDisplay.textContent = durationConverter(currentTrack.duration);
	progressBar.max = Math.floor(event.target.duration);
});

currentTrack.ontimeupdate = () => {
	trackElapsedTimeDisplay.textContent = durationConverter(currentTrack.currentTime);
	progressBar.value = Math.floor(currentTrack.currentTime);
};

progressBar.addEventListener('click', (event) => {
	currentTrack.currentTime = event.target.value;
});

const setVolume = () => {
	currentTrack.volume = volume.value;
};

const toggleMute = () => {
	currentTrack.muted = !currentTrack.muted;
};

const togglePlayPause = () => {
	if (playPauseButton.getAttribute('id') == 'play') {
	// if (currentTrack.paused || currentTrack.ended) {
		playPauseButton.setAttribute('id', 'pause');
		currentTrack.play();
	} else {
		playPauseButton.setAttribute('id', 'play');
		currentTrack.pause();
	}
};

const durationConverter = (duration) => {
	let hours = Math.floor(duration / 3600);
	let minutes = Math.floor(duration / 60);
	let seconds = Math.round(duration % 60);
	seconds / 10 < 1 ? seconds = '0' + seconds : seconds;

	return hours > 0 ? `${hours}:${minutes}:${seconds}` : `${minutes}:${seconds}`
};

