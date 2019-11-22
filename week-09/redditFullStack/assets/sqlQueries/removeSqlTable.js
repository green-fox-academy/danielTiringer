'use strict';

const removeSqlTable = (connection, tableName) => {
	let sqlQuery = `DROP TABLE IF EXISTS ${tableName};`;
	connection.query(sqlQuery, function(err, res){
		if (err) {
		  console.error(err);
		}
	});
};

module.exports = removeSqlTable;
