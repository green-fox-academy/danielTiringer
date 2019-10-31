'use strict';

const mysql = require('mysql');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('assets'));
app.user(express.json());

let conn = mysql.createConnection ({
  host: 'localhost',
  user: 'generic',
  password: 'password',
  database: 'data.sql',
});

conn.connect(function(err) {
  if (err) {
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

conn.end();

app.get('/', function(req, res) {
  conn.query('SELECT book_name FROM book_mast;', function(err, rows) {
    if (err) {
      console.log(err.toString());
      res.status(500).send('Database error');
      return;
    }
    res.send(rows);
  });
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

