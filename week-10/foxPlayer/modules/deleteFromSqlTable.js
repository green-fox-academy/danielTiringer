'use strict';

const deleteFromSqlTable = (connection, response, tableName, deleteObject) => {
	let sqlQuery = '';
	let removedId = 0;
	switch (tableName) {
		case 'playlists':
			sqlQuery = `DELETE FROM playlists WHERE playlist_id = ${connection.escape(deleteObject.playlistId)} AND system_list != 1;`;
			removedId = deleteObject.playlistId;
			break;
		case 'tracks':
			sqlQuery = `DELETE FROM tracks WHERE playlist_id = ${connection.escape(deleteObject.playlistId)} AND song_id = ${connection.escape(deleteObject.trackId)};`;
			removedId = deleteObject.trackId;
			break;
		default:
			break;
	};

	connection.query(sqlQuery, function(err, res) {
		if (err) {
			console.log(`Unable to remove record ${removedId} from the ${tableName} table.`);
			response.sendStatus(500);
		} else {
			console.log(`Record ${removedId} was removed from the ${tableName} table.`)
			response.status(200);
			response.send( { success: 'Entry removed.' } );
		};
	});
};

module.exports = deleteFromSqlTable;
