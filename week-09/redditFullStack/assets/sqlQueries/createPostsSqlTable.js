'use strict';

const createPostsSqlTable = `CREATE TABLE IF NOT EXISTS posts (
	post_id INTEGER PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(100) NOT NULL,
	url VARCHAR(255) NOT NULL,
	timestamp VARCHAR(255) NOT NULL,
	score INTEGER,
	owner INTEGER,
	vote INTEGER(2)
);`;

module.exports = createPostsSqlTable;
