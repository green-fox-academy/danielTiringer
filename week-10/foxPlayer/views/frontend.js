'use strict';


const playPauseButton = document.querySelector('.play-pause');
const trackElapsedTimeDisplay = document.querySelector('#elapsed-time');
const trackLengthDisplay = document.querySelector('#total-length');
const progressBar = document.querySelector('#progress');
const volume = document.querySelector('#volume-bar');
const playlists = document.querySelector('#playlists');
const trackList = document.getElementById('track-list');

let currentTrack = document.querySelector('#audio');
let currentSource = document.getElementById('source');
console.log(currentSource);

currentTrack.addEventListener('progress', (event) => {
	console.log(event);
	trackLengthDisplay.textContent = durationConverter(currentTrack.duration);
	progressBar.max = Math.floor(event.target.duration);
});

let globalVolume = 1;

currentTrack.ontimeupdate = () => {
	trackElapsedTimeDisplay.textContent = durationConverter(currentTrack.currentTime);
	progressBar.value = Math.floor(currentTrack.currentTime);
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
	listItem.setAttribute('id', `playlist-${playlist.playlist_id}`);

	let paragraph = document.createElement('p');
	paragraph.setAttribute('onclick', `loadPlaylist(${playlist.playlist_id})`);
	paragraph.textContent = playlist.title;

	listItem.appendChild(paragraph);

	if (playlist.system_list != 1) {
		let deleteButton = document.createElement('nav');
		deleteButton.setAttribute('class', 'control-button');
		deleteButton.setAttribute('id', 'remove');
		deleteButton.setAttribute('onclick', `removePlaylist(${playlist.playlist_id})`);

		listItem.appendChild(deleteButton);
	}

	playlists.appendChild(listItem);
};

const generateSong = (song, id) => {
	let listItem = document.createElement('li');
	listItem.className = 'list-item';
	listItem.id = `list-${id}`;
	listItem.textContent = song.title;
	listItem.setAttribute('onclick', `switchSongPlayed(${id}, '${song.path}')`);

	let sourceItem = document.createElement('source');
	sourceItem.src = song.path;
	sourceItem.id = `track-${id}`;
	sourceItem.type = 'audio/mp3';

	let paragraphItem = document.createElement('p');
	paragraphItem.textContent = song.title;

	let timeItem = document.createElement('a');
	timeItem.className = 'time'
	timeItem.textContent = durationConverter(song.duration);


	listItem.appendChild(sourceItem);
	listItem.appendChild(timeItem);

	trackList.appendChild(listItem);
};

const getPlaylists = () => {
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

const getSongs = () => {
	fetch('http://localhost:3000/playlist-tracks', {
		method:'GET',
		headers: {
			'Accept': 'application/json',
		}
	})
		.then(result => result.json())
		.then(result => {
			result.forEach((song, index) => {
				generateSong(song, index + 1);
			});
    })
    .catch(err => console.log(`Error: ${err.message}`))
};

getSongs();

const mouseEvent = document.addEventListener('wheel', (event) => {
	if (!event.path.some(tag => tag.nodeName === 'MAIN')) {
		switch(event.deltaY) {
			case 53:
				setVolume(-0.1);
				break;
			case -53:
				setVolume(0.1);
				break;
			default:
				break;
		}
	}
});

const keyboardEvents = document.addEventListener('keydown', (event) => {
	if (event.target.nodeName == 'INPUT' && event.key == 'Enter') {
		addPlaylist();
	} else if (event.target.nodeName != 'INPUT') {
		switch (event.key) {
			case ' ':
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
			case 'n':
			case 'N':
				jumpTrack(1);
				break;
			case 'p':
			case 'P':
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
	}
});

progressBar.addEventListener('click', (event) => {
	currentTrack.currentTime = event.target.value;
});

const toggleAddFavorites = () => {
	let favoritesArea = document.querySelector('#add-favorites-area');

	if (favoritesArea.getAttribute('class') == 'hidden') {
		favoritesArea.setAttribute('class', '');
	} else {
		favoritesArea.setAttribute('class', 'hidden');
	}
};

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

async function switchSongPlayed (trackId, url) {
	console.log('switch request registered');
		let targetSong = document.querySelector(`#track-${trackId}`)
	await currentTrack.pause();
	await function switchTrack () {
		console.log(url)
		currentSource.src = url;
	};
	console.log(currentSource);
	await function trackDetails () {
		trackElapsedTimeDisplay.textContent = durationConverter(currentTrack.currentTime);
		progressBar.value = Math.floor(currentTrack.currentTime);
		trackLengthDisplay.textContent = durationConverter(currentTrack.duration);
		progressBar.max = Math.floor(event.target.duration);
		currentTrack.volume = globalVolume;
	}
	currentTrack.play();
};

async function removePlaylist (playlistId) {
	let playlistToRemove = document.querySelector(`#playlist-${playlistId}`);
	playlists.removeChild(playlistToRemove);

	let remove = await fetch(`http://localhost:3000/playlists/${playlistId}`, {
		method: 'delete',
		headers: {
      'Content-Type': 'application/json'
    }
	})
};

async function addPlaylist () {
	let newPlaylistField = document.querySelector('#add-favorites');
	let newPlaylistName = newPlaylistField.value;

	let response = await fetch('http://localhost:3000/playlists', {
		method: 'post',
		headers: {
      'Content-Type': 'application/json'
    },
		body: JSON.stringify( { 'title': newPlaylistName } )
	})
		.then(response => response.json())
		.then(data => {
				generatePlaylist( { playlist_id: data.id, title: newPlaylistName  } );
			})

	newPlaylistField.value = '';
	toggleAddFavorites();
}
