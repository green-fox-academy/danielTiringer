'use strict';

const removeSqlTable = `DROP TABLE IF EXISTS user_data`;

const createSqlTable = `CREATE TABLE IF NOT EXISTS user_data (
	id INTEGER PRIMARY KEY AUTO_INCREMENT,
	prefix VARCHAR(100),
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	address VARCHAR(255),
	height FLOAT,
	bitcoin_address VARCHAR(255),
	color_preference VARCHAR(7)
);`

// Setting default values (null or 0) to the articles that aren't designated NOT NULL, to ensure it doesn't affect writing into SQL
// Using connection.escape on all variables to avoid an apostrophe interpreted as part of the SQL expression in a last name (or anyting else)

const writeSqlTable = (connection, csvData) => {
	csvData.forEach(csvRow => {
		let sqlQuery = `INSERT INTO user_data (prefix, first_name, last_name, address, height, bitcoin_address, color_preference) VALUES (
		${csvRow.prefix ? connection.escape(csvRow.prefix) : null},
		${connection.escape(csvRow.first_name)},
		${connection.escape(csvRow.last_name)},
		${csvRow.address ? connection.escape(csvRow.address) : null},
		${csvRow.height ? connection.escape(csvRow.height) : 0},
		${csvRow.bitcoin_address ? connection.escape(csvRow.bitcoin_address) : null},
		${csvRow.color_preference ? connection.escape(csvRow.color_preference) : null}
		);`
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : undefined;
		});
	});
	console.log('The data has been written into the database.');
};

const readSqlTable = `SELECT * FROM user_data;`;

module.exports = { removeSqlTable, createSqlTable, writeSqlTable, readSqlTable };
