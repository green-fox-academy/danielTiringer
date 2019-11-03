'use strict';

const express = require('express');
const mysql = require('mysql');
const env = require('dotenv').config();
const createSqlTable = require('./createSqlTable');
const modifySqlTable = require('./modifySqlTable');
const app = express();
const PORT = 3000;

app.use(express.json());

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
// conn.query(createSqlTable.removeSqlTable, function(err, res){
// 	err ? console.log('Unable to remove the table.') : console.log('Table removed.');
// });

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
console.log(Math.floor(Date.now()/1000));
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

app.get('/posts/:username', (req, res) => {
    conn.query(`SELECT * FROM posts\
				WHERE owner = connection.escape(${req.params.username})\
				;`, function (err, rows) {
        if (err) {
					console.error(err);
				} else {
					console.log('Data received.');
          res.set('Content-Type: application/json');
          res.send(rows);
        }
	});
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
