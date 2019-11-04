'use strict';

const removeSqlTable = (connection, tableName) => {
	let sqlQuery = `DROP TABLE IF EXISTS ${tableName};`;
	connection.query(sqlQuery, function(err, res){
		err? console.error(err) : undefined;
	});
};

const createPostsSqlTable = `CREATE TABLE IF NOT EXISTS posts (
	post_id INTEGER PRIMARY KEY AUTO_INCREMENT,
	title VARCHAR(100) NOT NULL,
	url VARCHAR(255) NOT NULL,
	timestamp VARCHAR(255) NOT NULL,
	score INTEGER,
	owner INTEGER,
	vote INTEGER(2)
);`;

const createUsersSqlTable = `CREATE TABLE IF NOT EXISTS users (
	user_id INTEGER PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(40) NOT NULL,
	first_name VARCHAR(255),
	last_name VARCHAR(255),
	email VARCHAR(255) NOT NULL,
	password VARCHAR(255)
)`;

const createVotesSqlTable = `CREATE TABLE IF NOT EXISTS votes (
	vote_id INTEGER PRIMARY KEY AUTO_INCREMENT,
	user_id INTEGER,
	post_id INTEGER NOT NULL,
	vote INTEGER(2) NOT NULL
);`;

module.exports = { removeSqlTable, createPostsSqlTable, createVotesSqlTable, createUsersSqlTable };
