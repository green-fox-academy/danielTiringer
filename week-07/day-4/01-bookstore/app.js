'use strict';

const express = require('express');
const mysql = require('mysql');
const env = require('dotenv').config();
const app = express();
const PORT = 3000;

app.use(express.json());
// Set the view engine to EJS
app.set('view engine', 'ejs');

// Inport the parameters of the MySQL database
let conn = mysql.createConnection ({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
});

// Connect the MySQL database
conn.connect(function(err) {
  if (err) {
		console.error(err);
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

// Send in the MySQL query
app.get('/', function(req, res) {
  conn.query('\
		SELECT book_name,\
		aut_name,\
		cate_descrip,\
		pub_name,\
		book_price\
		FROM book_mast\
		INNER JOIN author ON book_mast.aut_id  = author.aut_id\
		INNER JOIN category on category.cate_id = book_mast.cate_id\
		INNER JOIN publisher on publisher.pub_id = book_mast.pub_id\
		;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
		// let queryRows = rows;
    // res.send(queryRows);
		res.render('home', {
			rows: rows
		})
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// conn.end();
