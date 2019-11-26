'use strict';

const express = require('express');
const mysql = require('mysql');
const jsmediatags = require('jsmediatags');
const fs = require('fs');
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

// Verifying server functionality
app.get('/hello/', (req, res) => {
	res.send('Hello World!');
});

// Load main page
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/playlists', (req, res) => {
	readFromSqlTable(conn, res, 'playlists');
});

app.post('/playlists', (req, res) => {
	let playListObject = {
		playListName: req.body.title,
		system_list: 0
	};
	addToSqlTable(conn, res, 'playlists', playListObject);
});

app.delete('/playlists/:id', (req, res) => {
	if (req.params.id > 0 && req.params.id % 1 == 0 ) {
		deleteFromSqlTable(conn, 'playlists', req.params.id);
		res.status(200);
		res.send();
	} else {
		console.log('Invalid ID.');
		res.status(400);
		res.send();
	}
});

let pathToMusicDirectory = './assets/music';

fs.readdir(pathToMusicDirectory, (err, files) => {
	if(err) {
		console.log(err);
	} else {
		files.forEach(file => {
			readTagData(file);
		});
	}
});

const readTagData = (track) => {
	jsmediatags.read(`./assets/music/${track}`, {
		onSuccess: (tag) => {
			// console.log(tag.tags.title);
			// console.log(tag.tags.artist);
			// console.log(tag.tags.album);
		},
		onError: (error) => {
			console.log('Unable to read the media tags of the selected file.', error.type, error.info);
		}
	});
};

module.exports = app;
