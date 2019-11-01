'use strict';

const express = require('express');
const mysql = require('mysql');
const env = require('dotenv').config();
const readcsv = require('./readcsv');
const parsecsv = require('./parsecsv');
const createSqlTable = require('./createSqlTable');
const removeSqlTable = require('./createSqlTable');
const writeSqlTable = require('./writeSqlTable');
const app = express();
const PORT = 3000;

app.use(express.json());

// Read the CSV file and turn it into an array
let csvData = readcsv('users.csv', parsecsv);
console.log(csvData[0]);

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
    console.log('Error connecting to Db');
    return;
  }
  console.log('Connection established');
});

// Orders to create the MySQL table
/*
let sqlRemoveTable = `DROP TABLE IF EXISTS user_data`;

let sqlCreateTable = `CREATE TABLE IF NOT EXISTS user_data (
	id int(11) NOT NULL AUTO_INCREMENT,
	prefix varchar(100),
	first_name varchar(255) NOT NULL,
	last_name varchar(255) NOT NULL,
	address varchar(255),
	height DECIMAL(4,1),
	bitcoin_address varchar(255),
	color_preference varchar(7),
	PRIMARY KEY(id)
)`;
*/







