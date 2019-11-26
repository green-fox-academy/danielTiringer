'use strict';

const readFromSqlTable = (connection, tableName, queryModifier) => {
	let sqlQuery = '';
	switch (tableName) {
		case 'playlists':
			sqlQuery = `SELECT * FROM playlists;`;
			break;
		default:
			break;
	}
	connection.query(sqlQuery/*.concat(queryModifier)*/, function(err, rows){
    if (err) {
			console.error(err);
		} else {
  		response.set('Content-Type: application/json');
			response.status(200);
      response.send(rows);
    }
	})
}

module.exports = readFromSqlTable;
