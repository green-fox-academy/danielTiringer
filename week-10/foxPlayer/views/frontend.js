'use strict';

let track01 = document.querySelector('#track-01');

let playPauseButton = document.querySelector('.play-pause');

playPauseButton.addEventListener('click', (event) => {
	console.log('You clicked on the pause/play button');
	console.log(event);
	togglePlayPause();
});


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
