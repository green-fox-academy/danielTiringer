'use strict';

const jsmediatags = require("jsmediatags");
const fs = require('fs');

let pathToMusicDirectory = './assets/music';

fs.readdir(pathToMusicDirectory, (err, files) => {
	if(err) {
		console.log(err);
	} else {
		console.log(files);
		files.forEach(file => {
			readTagData(file);
		});
	}
});

const readTagData = (track) => {
	jsmediatags.read(`./assets/music/${track}`, {
		onSuccess: (tag) => {
			console.log(tag.tags.title);
			console.log(tag.tags.artist);
			console.log(tag.tags.album);
		},
		onError: (error) => {
			console.log('Unable to read the media tags of the selected file.', error.type, error.info);
		}
	});
};
