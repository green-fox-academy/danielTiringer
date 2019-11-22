'use strict';

const express = require('express');
const mysql = require('mysql');
const env = require('dotenv').config();
const bodyParser = require('body-parser');
const queryFromPostsTable = require('./assets/sqlQueries/queryFromPostsTable');
const insertIntoPostsTable = require('./assets/sqlQueries/insertIntoPostsTable');
const updateScore = require('./assets/sqlQueries/updateScore');
const updatePost = require('./assets/sqlQueries/updatePost');
const removePost = require('./assets/sqlQueries/removePost');
const resetSqlTables = require('./assets/sqlQueries/resetSqlTables');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(__dirname));
app.use(function(req, res, next) {
	req.header("Content-Type", "application/json");
	next();
});
app.use(bodyParser.urlencoded( { extended: false } ));

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

// Uncomment if you want to reset the SQL tables and populate them with dummy data
// let resetTables = resetSqlTables();

// Render a Hello world for verification
app.get('/hello/', (req, res) => {
	res.send('Hello World!');
});

app.get('/', (req, res) => {
	res.sendFile(__dirname + '/views/index.html');
});

app.get('/newpost', (req, res) => {
	res.sendFile(__dirname + '/views/newpost.html');
});

app.get('/editpost', (req, res) => {
	res.sendFile(__dirname + '/views/editpost.html');
});

app.get('/posts', (req, res) => {
	let queryModifier = '';
	req.query.username ? queryModifier = `WHERE users.username = ${conn.escape(req.query.username)}` : queryModifier = ';';
	let query = queryFromPostsTable(conn, res, queryModifier);
	res.status(200);
});

app.post('/posts', (req, res) => {
	req.headers['content-type', 'application/json'];
	let postObject = {
		title: req.body.title,
		url: req.body.url
	};
	let writePostsData = insertIntoPostsTable(conn, postObject);
	res.status(200);
	res.redirect('http://localhost:3000');
});

app.post('/posts/:id', (req, res) => {
	req.headers['content-type', 'application/json'];
	let putObject = {
		postId: req.params.id,
		title: req.body.title,
		url: req.body.url
	};
	let updatePostData = updatePost(conn, putObject);
	let queryModifier = ` WHERE posts.post_id = ${conn.escape(req.params.id)};`
	let query = queryFromPostsTable(conn, res, queryModifier);
	res.redirect('http://localhost:3000');
});

app.delete('/posts/:id', (req, res) => {
	req.headers['content-type', 'application/json'];
	let removePostData = removePost(conn, req.params.id);
	let queryModifier = ` WHERE posts.post_id = ${conn.escape(req.params.id)};`
	let query = queryFromPostsTable(conn, res, queryModifier);
});

app.put('/posts/:id/:vote', (req, res) => {
	let executeVote = updateScore(conn, req.params.id, req.params.vote);
	let queryModifier = ` WHERE posts.post_id = ${conn.escape(req.params.id)};`
	let query = queryFromPostsTable(conn, res, queryModifier);
});

module.exports = app;
