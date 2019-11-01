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

const writeSqlTable = (csvData) => {
	csvData.forEach(csvRow => {`INSERT INTO user_data (prefix, first_name, last_name, address, height, bitcoin_address, color_preference) VALUES (
		${csvRow.prefix},
		${csvRow.first_name},
		${csvRow.last_name},
		${csvRow.address},
		${csvRow.height},
		${csvRow.bitcoin_address},
		${csvRow.color_preference}
	);`})
};

module.exports = { removeSqlTable, createSqlTable, writeSqlTable };
