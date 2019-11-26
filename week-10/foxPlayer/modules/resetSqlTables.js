'use strict';

const removeSqlTable = require('./removeSqlTable');
const createSqlTable = require('./createSqlTable');

const foxPlayerSqlTables = ['playlists'];

const resetSqlTables = (connection) => {
	foxPlayerSqlTables.forEach(table => {
		removeSqlTable(connection, table);
		createSqlTable(connection, table);
	});
};

module.exports = resetSqlTables;
