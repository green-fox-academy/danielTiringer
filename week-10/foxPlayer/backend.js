'use strict';

const express = require('express');
const mysql = require('mysql');
const jsmediatags = require('jsmediatags');
const fs = require('fs');
const bodyParser = require('body-parser');
const resetSqlTables = require('./modules/resetSqlTables');
const readFromSqlTable = require('./modules/readFromSqlTable');
const addToSqlTable = require('./modules/addToSqlTable');
const deleteFromSqlTable = require('./modules/deleteFromSqlTable');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));
app.use(function(req, res, next) {
	req.header("Content-Type", "application/json");
	next();
});
app.use(bodyParser.urlencoded( { extended: false } ));

let pathToMusicDirectory = './assets/music';

// The parameters of the MySQL database
let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'generic',
  password: 'password',
  database: 'foxplayer',
});

// Connect the MySQL database
conn.connect(function(err) {
  err ? console.log('Error connecting to the database.') : console.log('Connection established.');
});

// Uncomment if you want to drop and recreate all MySQL tables
// const reset = resetSqlTables(conn);

// Load main page
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/playlists', (req, res) => {
	readFromSqlTable(conn, res, 'playlists');
});

app.post('/playlists', (req, res) => {
	console.log(req.body);
	if (req.body.title) {
		let playListObject = {
			playListName: req.body.title,
			system_list: 0
		};
		addToSqlTable(conn, res, 'playlists', playListObject);
	} else {
		res.status(400);
		res.send( { error: 'No playlist name provided.' } );
	}
});

app.delete('/playlists/:id', (req, res) => {
	if (req.params.id > 0 && req.params.id % 1 == 0 ) {
		let deleteObject = {
			playlistId: req.params.id
		};
		deleteFromSqlTable(conn, res, 'playlists', deleteObject);
	} else {
		res.status(400);
		res.send( { error: 'Invalid ID.' } );
	}
});

app.get('/playlist-tracks/', (req, res) => {
	if (!req.params.id) {
		console.log('Returning all tracks.');
		getAllTracks(pathToMusicDirectory);
	} else {
		console.log(`Returning tracks for playlist ${req.params.id}.`);
	}
});

app.post('/playlist-tracks/:id', (req, res) => {
	let playListObject = {
		playlist_id: req.params.id,
		song_id: req.body.songId
	};
	addToSqlTable(conn, res, 'playlist-songs', playListObject);
});

app.delete('/playlist-tracks/:playlist_id/:track_id', (req, res) => {
	if ((req.params.playlist_id > 0 && req.params.playlist_id % 1 == 0) && (req.params.track_id > 0 && req.params.track_id % 1 == 0)) {
		let deleteObject = {
			playlistId: req.params.playlist_id,
			trackId: req.params.track_id
		};
		deleteFromSqlTable(conn, res, 'tracks', deleteObject);
	} else {
		res.status(400);
		res.send( { error: 'Invalid ID.' } );
	};
});

async function getAllTracks (filepath) {
	let trackList = [];

	await readDirectory(filepath, trackList);

	console.log(trackList);
}

const readDirectory = (filepath, array) => {
	fs.readdir(filepath, (err, files) => {
		if (err) {
			console.log(err)
		} else {
			// console.log(files);
			files.forEach(file => {
				array.push(file);
				console.log(file);
			});
		}
	});
};

const readTagData = (filePath, fileName, array, track) => {
	return new Promise((resolve, reject) => {
		new jsmediatags.Reader(`${filePath}/${fileName}`)
			.read({
				onSuccess: (tag) => {
					console.log('readtagdata kozben');
					resolve(tag);
				},
				onError: (error) => {
					console.log('Unable to read the media tags of the selected file.', error.type, error.info);
					reject(error);
				}
		});
	})
		.then(tagInfo => {
			// handle the onSuccess return
			track.url = `${filePath}/{fileName}`;
			track.title = tagInfo.tags.title;
			track.artist = tagInfo.tags.artist;
			track.album = tagInfo.tags.album;
		})
		.then(array.push(track))
		.catch(error => {
			// handle errors
		});
};


module.exports = app;
