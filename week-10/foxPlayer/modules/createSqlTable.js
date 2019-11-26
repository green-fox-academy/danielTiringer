'use strict';

const createSqlTable = (connection, tableName) => {
	let sqlQuery = '';
	switch (tableName) {
		case 'playlists':
			sqlQuery = `CREATE TABLE IF NOT EXISTS playlists (
				playlist_id INTEGER PRIMARY KEY AUTO_INCREMENT,
				title VARCHAR(99) NOT NULL,
				system_list INTEGER(2) NOT NULL
			);`;
			break;
		case 'songs':
			sqlQuery = `CREATE TABLE IF NOT EXISTS songs (
				song_id INTEGER PRIMARY KEY AUTO_INCREMENT,
				artist VARCHAR(255) NOT NULL,
				title VARCHAR(255) NOT NULL,
				duration INTEGER(6) NOT NULL,
				path VARCHAR(255) NOT NULL
			);`;
			break;
		case 'playlist_songs':
			sqlQuery = `CREATE TABLE IF NOT EXISTS playlist_songs (
				link_id INTEGER PRIMARY KEY AUTO_INCREMENT,
				playlist_id INTEGER(5) NOT NULL,
				song_id INTEGER(5) NOT NULL
			);`;
			break;
		default:
			break;
	};
	connection.query(sqlQuery, function(err, res) {
		err ? console.log('Unable to create the new table.') : console.log('The table is ready.');
	});
};

module.exports = createSqlTable;
