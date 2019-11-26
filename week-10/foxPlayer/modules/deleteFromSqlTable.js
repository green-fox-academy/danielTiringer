'use strict';

const deleteFromSqlTable = (connection, response, tableName, uniqueId) => {
	let sqlQuery = '';
	switch (tableName) {
		case 'playlists':
			sqlQuery = `DELETE FROM playlists WHERE playlist_id = ${connection.escape(uniqueId)} AND system_list != 1;`;
	};
	connection.query(sqlQuery, function(err, res) {
		if (err) {
			console.log(`Unable to remove record ${uniqueId} from the ${tableName} table.`);
			response.sendStatus(500);
		} else {
			console.log(`Record ${uniqueId} was removed from the ${tableName} table.`)
			response.status(200);
			response.send( { success: 'Entry removed.' } );
		};
	});
};

module.exports = deleteFromSqlTable;
