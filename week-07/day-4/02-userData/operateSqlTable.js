'use strict';

const removeSqlTable = `DROP TABLE IF EXISTS user_data`;

const createSqlTable = `CREATE TABLE IF NOT EXISTS user_data (
	id INTEGER NOT NULL AUTO_INCREMENT,
	prefix VARCHAR(100),
	first_name VARCHAR(255) NOT NULL,
	last_name VARCHAR(255) NOT NULL,
	address VARCHAR(255),
	height DECIMAL(4,1),
	bitcoin_address VARCHAR(255),
	color_preference VARCHAR(7),
	PRIMARY KEY(id)
);`

const writeSqlTable = (csvData) => {
	csvData.forEach(csvRow => {`INSERT INTO customers VALUES (
		${csvRow.prefix},
		${csvRow.first_name},
		${csvRow.last_name},
		${csvRow.address},
		${csvRow.height},
		${csvRow.bitcoin_address},
		${csvRow.color_preference}
	)`;
		console.log(csvRow)});
};

module.exports = { removeSqlTable, createSqlTable, writeSqlTable };
