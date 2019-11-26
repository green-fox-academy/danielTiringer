'use strict';

const removeSqlTable = (connection, tableName) => {
	let sqlQuery = `DROP TABLE IF EXISTS ${connection.escape(tableName)};`;
	connection.query(sqlQuery, function(err, res){
		if (err) {
		  console.error(err);
		}
	});
};

module.exports = removeSqlTable;
