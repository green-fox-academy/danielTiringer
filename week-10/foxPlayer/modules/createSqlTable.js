'use strict';

const createSqlTable = (connection, tableName) => {
	if (tableName === 'playlists') {
		let sqlQuery = `CREATE TABLE IF NOT EXISTS playlists (
				playlist_id INTEGER PRIMARY KEY AUTO_INCREMENT,
				title VARCHAR(99) NOT NULL,
				system TINYINT(1);`;
	};
	conn.query(sqlQuery, function(err, res) {
		err ? console.log('Unable to create the new table.') : console.log('The table is ready.');
	});
};

module.exports = createSqlTable;
