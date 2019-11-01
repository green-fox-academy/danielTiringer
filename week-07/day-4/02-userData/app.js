'use strict';

const express = require('express');
const mysql = require('mysql');
const env = require('dotenv').config();
const readcsv = require('./readcsv');
const parsecsv = require('./parsecsv');
const operateSqlTable = require('./operateSqlTable');
const app = express();
const PORT = 3000;

app.use(express.json());

// Read the CSV file and turn it into an array
let csvData = readcsv('users.csv', parsecsv);

// Import the parameters of the MySQL database
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
    console.log('Error connecting to the database.');
    return;
  }
  console.log('Connection established');
});

// Remove the MySQL table
conn.query(operateSqlTable.removeSqlTable);

// Create the MySQL table
conn.query(operateSqlTable.createSqlTable);

// Write into MySQL table
conn.query(operateSqlTable.writeSqlTable(csvData));
