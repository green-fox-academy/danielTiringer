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
  err ? console.log('Error connecting to the database.') : console.log('Connection established.');
});

// Remove the MySQL table
conn.query(operateSqlTable.removeSqlTable, function(err, res){
	err ? console.log('Unable to remove the table.') : console.log('Table removed.');
});

// Create the MySQL table
conn.query(operateSqlTable.createSqlTable, function(err, res) {
	err ? console.log('Unable to create the new table.') : console.log('The table is ready.');
});

// Write into MySQL table
let writeData = operateSqlTable.writeSqlTable(conn, csvData);

// Read back the data from MySQL
let readData = [];
conn.query(operateSqlTable.readSqlTable, function(err, readData){
	err ? console.log('Unable to read the data from the table.') : console.log('Data read complete.');
});

// Compare the two sets of data to one another

// Close the connection
conn.end();
