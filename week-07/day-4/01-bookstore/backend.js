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
		select book_name,\
		aut_name,\
		cate_descrip,\
		pub_name,\
		book_price\
		from book_mast\
		inner join author on book_mast.aut_id  = author.aut_id\
		inner join category on category.cate_id = book_mast.cate_id\
		inner join publisher on publisher.pub_id = book_mast.pub_id\
		;', function(err, rows) {
    if (err) {
      console.log(err.tostring());
      res.status(500).send('database error');
      return;
    }
		console.log(rows[0].cate_descrip.toLowerCase())
		res.send(rows.filter(item => (item.cate_descrip.toLowerCase() == 'science')))
		// res.render('home', {
		//	rows: rows
		// })
  });
});

app.get('/books', function(req, res) {
	conn.query('\
		select book_name,\
		aut_name,\
		cate_descrip,\
		pub_name,\
		book_price\
		from book_mast\
		inner join author on book_mast.aut_id  = author.aut_id\
		inner join category on category.cate_id = book_mast.cate_id\
		inner join publisher on publisher.pub_id = book_mast.pub_id\
		;', function(err, rows) {
    if (err) {
      console.log(err.tostring());
      res.status(500).send('database error');
      return;
    }

		let queryResult = {}
		console.log(Object.keys(req.query)[0]);
		if (Object.keys(req.query)[0] == 'category') {
				queryResult = rows.filter(item => item.cate_descrip.toLowerCase() == req.query.category.toLowerCase())
		} else if (Object.keys(req.query)[0] == 'publisher') {
				queryResult = rows.filter(item => item.pub_name.toLowerCase() == req.query.publisher.toLowerCase())
		} else if (Object.keys(req.query)[0] == 'plt') {
				queryResult = rows.filter(item => item.book_price < req.query.plt)
		} else if (Object.keys(req.query)[0] == 'pgt') {
				queryResult = rows.filter(item => item.book_price > req.query.pgt)
		}

		res.send(queryResult);
	})
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

// conn.end();
