'use strict';

const express = require('express');
const mysql = require('mysql');
const mm = require('musicmetadata');
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
let musicLibrary = [];

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

async function readDirectory (filePath) {
	let response = await fs.readdir(filePath, (err, files) => {
		if (err) {
			console.log(err)
		} else {
			// console.log(files);
			files.forEach(file => {
				let newPromise = readTagData(filePath, file)
					.then((result) => {
						let object = {
							'title': result.title,
							'artist': result.artist,
							'album': result.album,
							'duration': result.duration
						}
						musicLibrary.push(object);
					})
			});
		}
	})
};
readDirectory(pathToMusicDirectory);

let promise1 = readTagData(pathToMusicDirectory, 'Ars_Sonor_-_02_-_Never_Give_Up.mp3')
	// .then(result => console.log(result))

function readTagData (filePath, fileName) {
	return new Promise((resolve, reject) => {
		let readStream = fs.createReadStream(`${filePath}/${fileName}`);
		let parser = mm(readStream, { duration: true }, function (err, metadata) {
			if (err) throw err;
			resolve(metadata);
		});
		// readStream.close();
	})
};

//create a new parser from a node ReadStream

//listen for the metadata event
module.exports = app;
