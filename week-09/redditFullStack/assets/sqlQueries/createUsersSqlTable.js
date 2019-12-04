'use strict';

const createUsersSqlTable = `CREATE TABLE IF NOT EXISTS users (
	user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(40) NOT NULL,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255)
)`;

module.exports = createUsersSqlTable;
