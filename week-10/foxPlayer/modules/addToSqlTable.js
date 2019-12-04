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
		case 'tracks':
			sqlQuery = `INSERT INTO tracks (playlist_id, song_id) VALUES (
				${connection.escape(dataObject.playlist_id)},
				${connection.escape(dataObject.song_id)}
			);`;
			break;
		default:
			break;
	};
	connection.query(sqlQuery, function(err, rows){
		if (err) {
			response.status(500);
			response.send( { error: 'Error inserting into database' } );
		} else {
			console.log('The data has been written into the posts table.');
			response.set('Content-Type: application/json');
			response.status(200);
			response.send( { id: rows.insertId } );
		}
	});
};

module.exports = addToSqlTable;
