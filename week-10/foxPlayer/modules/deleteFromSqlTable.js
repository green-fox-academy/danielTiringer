'use strict';

const deleteFromSqlTable = (connection, tableName, uniqueId) => {
	let sqlQuery = '';
	switch (tableName) {
		case 'playlists':
			sqlQuery = `DELETE FROM playlists WHERE playlist_id = ${connection.escape(uniqueId)} AND system_list != 1;`;
	};
	connection.query(sqlQuery, function(err, res) {
		err ? console.log(`Unable to remove record ${uniqueId} from the ${tableName} table.`) : console.log(`Record ${uniqueId} was removed from the ${tableName} table.`)
	});
};

module.exports = deleteFromSqlTable;
