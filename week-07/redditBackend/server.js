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
    conn.query(`SELECT\
				posts.post_id,\
				posts.title,\
				posts.url,\
				posts.timestamp,\
				posts.score,\
				users.username,\
				votes.vote
				FROM posts\
				LEFT JOIN users on users.user_id = posts.owner\
				LEFT JOIN votes on votes.user_id = posts.owner\
				WHERE users.username = ${conn.escape(req.query.username)}\
				;`, function (err, rows) {
        if (err) {
					console.error(err);
				} else {
					console.log('Data received.');
          res.set('Content-Type: application/json');
					console.log(rows);
          res.send(rows);
        }
	});
});

app.post('/posts', (req, res) => {
	let postObject = {
		title: req.body.title,
		url: req.body.url
	}
	let writePostsData = modifySqlTable.insertIntoPostsTable(conn, postObject);
  conn.query(`SELECT\
		posts.post_id,\
		posts.title,\
		posts.url,\
		posts.timestamp,\
		posts.score,\
		users.username,\
		votes.vote
		FROM posts\
		LEFT JOIN users on users.user_id = posts.owner\
		LEFT JOIN votes on votes.user_id = posts.owner\
		WHERE posts.post_id =\
			(SELECT\
				MAX(posts.post_id)\
			FROM posts)\
		;`, function (err, rows) {
      if (err) {
				console.error(err);
			} else {
				console.log('Data written into table.');
        res.set('Content-Type: application/json');
				console.log(rows);
        res.send(rows);
      }
	});
});

app.put('/posts/:id/upvote', (req, res) => {
	let executeVote = modifySqlTable.updateScore(conn, req.params.id, 'upvote');
  conn.query(`SELECT\
		posts.post_id,\
		posts.title,\
		posts.url,\
		posts.timestamp,\
		posts.score,\
		users.username,\
		votes.vote
		FROM posts\
		LEFT JOIN users on users.user_id = posts.owner\
		LEFT JOIN votes on votes.user_id = posts.owner\
		WHERE posts.post_id = ${req.params.id}\
		;`, function (err, rows) {
      if (err) {
				console.error(err);
			} else {
				console.log('Data written into table.');
        res.set('Content-Type: application/json');
				console.log(rows);
        res.send(rows);
      }
	});
});

app.put('/posts/:id/downvote', (req, res) => {
	let executeVote = modifySqlTable.updateScore(conn, req.params.id, 'downvote');
  conn.query(`SELECT\
		posts.post_id,\
		posts.title,\
		posts.url,\
		posts.timestamp,\
		posts.score,\
		users.username,\
		votes.vote\
		FROM posts\
		LEFT JOIN users on users.user_id = posts.owner\
		LEFT JOIN votes on votes.user_id = posts.owner\
		WHERE posts.post_id = ${req.params.id}\
		;`, function (err, rows) {
      if (err) {
				console.error(err);
			} else {
				console.log('Data written into table.');
        res.set('Content-Type: application/json');
				console.log(rows);
        res.send(rows);
      }
	});
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
