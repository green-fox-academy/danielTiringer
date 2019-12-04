'use strict';

const express = require('express');
const mysql = require('mysql');
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const createSqlTable = require('./createSqlTable');
const modifySqlTable = require('./modifySqlTable');
const dataToUseForTesting = require('./dataToUseForTesting');
const app = express();

app.use(express.json());
app.use(express.static(__dirname));
app.use(bodyParser());
app.use(function(req, res, next) {
	req.header("Content-Type", "application/json");
	next();
});
// app.use(bodyParser.urlencoded( { extended: false } ));

// Import the parameters of the MySQL database
let conn = mysql.createConnection ({
	host: 'db',
	port: '3306',
	user: 'generic',
	password: 'password',
	database: 'reddit'
	//host: 'localhost',
	//user: 'generic',
	//password: 'password',
	//database: 'reddit'
});

// Connect the MySQL database
conn.connect(function(err) {
	err ? console.log('Error connecting to the database.') : console.log('Connection established.');
});

// Render a Hello world for verification
app.get('/hello/', (req, res) => {
	res.send('Hello World!');
});

// Remove the MySQL tables
// let removeVotesTable = createSqlTable.removeSqlTable(conn, 'votes');
// let removeUsersTable = createSqlTable.removeSqlTable(conn, 'users');
// let removePostsTable = createSqlTable.removeSqlTable(conn, 'posts');

// Create the MySQL tables
// conn.query(createSqlTable.createPostsSqlTable, function(err, res) {
// 	err ? console.log('Unable to create the new table.') : console.log('The table is ready.');
// });

// conn.query(createSqlTable.createVotesSqlTable, function(err, res) {
// 	err ? console.log('Unable to create the new table.') : console.log('The table is ready.');
// });

// conn.query(createSqlTable.createUsersSqlTable, function(err, res) {
// 	err ? console.log('Unable to create the new table.') : console.log('The table is ready.');
// });

// Write dummy data into MySQL tables
// let writeUserData = dataToUseForTesting.usersDummyData.forEach(user => {
// 	modifySqlTable.insertIntoUsersTable(conn, user)
// });

// let writePostsData = dataToUseForTesting.postsDummyData.forEach(post => {
// 	modifySqlTable.insertIntoPostsTable(conn, post);
// });

// let writeVotesData = dataToUseForTesting.votesDummyData.forEach(vote => {
// 	modifySqlTable.insertIntoVotesTable(conn, vote);
// });

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/newpost', (req, res) => {
	res.sendFile(__dirname + '/views/newpost.html');
});

app.get('/posts', (req, res) => {
	let queryModifier = '';
	req.query.username ? queryModifier = `WHERE users.username = ${conn.escape(req.query.username)}` : queryModifier = ';';
	let query = modifySqlTable.queryFromPostsTable(conn, res, queryModifier);
});

app.post('/posts', (req, res) => {
	req.headers['content-type', 'application/json'];
	console.log(req.body);
	let postObject = {
		title: req.body.title,
		url: req.body.url
	};
	let writePostsData = modifySqlTable.insertIntoPostsTable(conn, postObject);
	let queryModifier =	` WHERE posts.post_id = (SELECT MAX(posts.post_id) FROM posts);`;

	res.redirect('http://localhost:3000');
});

app.put('/posts/:id/:vote', (req, res) => {
	let executeVote = modifySqlTable.updateScore(conn, req.params.id, req.params.vote);

	let queryModifier = ` WHERE posts.post_id = ${conn.escape(req.params.id)};`
	let query = modifySqlTable.queryFromPostsTable(conn, res, queryModifier);
});

module.exports = app;
