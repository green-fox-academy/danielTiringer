'use strict';

let currentTrack = document.querySelector('#track-01');

const playPauseButton = document.querySelector('.play-pause');
const trackElapsedTimeDisplay = document.querySelector('#elapsed-time');
const trackLengthDisplay = document.querySelector('#total-length');
const progressBar = document.querySelector('#progress');
const volume = document.querySelector('#volume-bar');
const playlists = document.querySelector('#playlists');

let globalVolume = currentTrack.volume;

const keyboardEvents = document.addEventListener('keydown', (event) => {
	switch (event.code) {
		case 'Space':
			togglePlayPause();
			break;
		case 'Escape':
			toggleMute();
			break;
		case 'ArrowRight':
			seekTrack(5);
			break;
		case 'ArrowLeft':
			seekTrack(-5);
			break;
		case 'KeyN':
			jumpTrack(1);
			break;
		case 'KeyP':
			jumpTrack(-1);
			break;
		case 'ArrowUp':
			setVolume(0.1);
			break;
		case 'ArrowDown':
			setVolume(-0.1);
			break;
		default:
			break;
	}
});

const getPlaylists = () => {
	console.log('Starting the function.');
	fetch('http://localhost:3000/playlists', {
		method:'GET',
		headers: {
			'Accept': 'application/json',
		}
	})
		.then(result => result.json())
		.then(result => {
			result.forEach(playlist => {
				generatePlaylist(playlist);
			});
    })
    .catch(err => console.log(`Error: ${err.message}`))
};

getPlaylists();

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


const seekTrack = (time) => {
	currentTrack.currentTime += time;
	progressBar.value += time;
};

const jumpTrack = (direction) => {
	direction === 1 ? console.log('Jumping to the next track') : console.log('Jumping to the previous track');
};

const setVolume = (amount) => {
	if (!amount) {
		currentTrack.volume = volume.value;
		globalVolume = currentTrack.volume;
	} else if ((amount > 0 && (globalVolume + amount) <= 1) || (amount < 0 && (globalVolume + amount) >= 0)) {
		currentTrack.volume += amount;
		globalVolume += amount;
		volume.value = globalVolume;
	}
};

const toggleMute = () => {
	if (currentTrack.muted) {
		currentTrack.muted = false;
		volume.value = globalVolume;
	} else {
		currentTrack.muted = true;
		volume.value = 0;
	}
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

const generatePlaylist = (playlist) => {
	let listItem = document.createElement('li');
	listItem.setAttribute('onclick', `loadPlaylist(${playlist.playlist_id})`);
	listItem.textContent = playlist.title;

	playlists.appendChild(listItem);
};

