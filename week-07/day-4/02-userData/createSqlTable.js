'use strict';

const removeSqlTable = `DROP TABLE IF EXISTS user_data`;

const createSqlTable = `CREATE TABLE IF NOT EXISTS user_data (
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

module.exports = { removeSqlTable, createSqlTable };
