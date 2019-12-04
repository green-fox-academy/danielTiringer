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
		createJSON()
			.then(result => res.send(result))
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

function createJSON () {
	let musicLibrary = []
	readDirectory(pathToMusicDirectory).forEach(fileName => {
		musicLibrary.push(
			new Promise (async function (resolve, reject) {
				let tagData = await readTagData(pathToMusicDirectory, fileName)
				let result = {
					id: tagData.id,
					title: tagData.title,
					artist: tagData.artist[0],
					duration: tagData.duration,
					path: `${pathToMusicDirectory}/${fileName}`
				};
				resolve(result);
			})
		)
	})
	return Promise.all(musicLibrary)
}


function readDirectory (filePath) {
	let response = fs.readdirSync(filePath);
	return response;
};

function readTagData (filePath, fileName) {
	return new Promise((resolve, reject) => {
		let readStream = fs.createReadStream(`${filePath}/${fileName}`);
		let parser = mm(readStream, { duration: true }, function (err, metadata) {
			if (err) throw err;
			resolve(metadata);
		});
	})
};

module.exports = app;
