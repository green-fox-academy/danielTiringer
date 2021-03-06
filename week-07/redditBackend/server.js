'use strict';

const express = require('express');
const mysql = require('mysql');
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const createSqlTable = require('./createSqlTable');
const modifySqlTable = require('./modifySqlTable');
const dataToUseForTesting = require('./dataToUseForTesting');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(bodyParser.json());

// Import the parameters of the MySQL database
let conn = mysql.createConnection ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
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
// let removeTable = createSqlTable.removeSqlTable(conn, 'votes');

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

app.get('/posts', (req, res) => {
	let queryModifier = '';
	req.query.username ? queryModifier = `WHERE users.username = ${conn.escape(req.query.username)}` : queryModifier = ';';
	let query = modifySqlTable.queryFromPostsTable(conn, res, queryModifier);
});

app.post('/posts', (req, res) => {
	let postObject = {
		title: req.body.title,
		url: req.body.url
	};
	let writePostsData = modifySqlTable.insertIntoPostsTable(conn, postObject);
	let queryModifier =	` WHERE posts.post_id = (SELECT MAX(posts.post_id) FROM posts);`;
	let query = modifySqlTable.queryFromPostsTable(conn, res, queryModifier);

});

app.put('/posts/:id/:vote', (req, res) => {
	let executeVote = modifySqlTable.updateScore(conn, req.params.id, req.params.vote);

	let queryModifier = ` WHERE posts.post_id = ${conn.escape(req.params.id)};`
	let query = modifySqlTable.queryFromPostsTable(conn, res, queryModifier);
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
