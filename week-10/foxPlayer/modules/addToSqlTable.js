'use strict';

const addToSqlTable = (connection, response, tableName, dataObject) => {
	let sqlQuery = '';
	switch (tableName) {
		case 'playlists':
			sqlQuery = `INSERT INTO playlists (title, system_list) VALUES (
				${connection.escape(dataObject.playListName)},
				${connection.escape(dataObject.system_list)}
			);`;
			break;
		case 'songs':
			sqlQuery = `INSERT INTO songs (artist, title, duration, path) VALUES (
				${connection.escape(dataObject.artist)},
				${connection.escape(dataObject.title)},
				${connection.escape(dataObject.duration)},
				${connection.escape(dataObject.path)}
			);`;
			break;
		case 'playlist-songs':
			sqlQuery = `INSERT INTO playlist-songs (playlist_id, song_id) VALUES (
				${connection.escape(dataObject.playlist_id)},
				${connection.escape(dataObject.song_id)}
			);`;
			break;
		default:
			break;
	};
	connection.query(sqlQuery, function(err, rows){
		if (err) {
			console.error(err)
		} else {
			console.log('The data has been written into the posts table.');
			response.set('Content-Type: application/json');
			response.status(200);
			response.send(rows);
		}
	});
};

module.exports = addToSqlTable;
