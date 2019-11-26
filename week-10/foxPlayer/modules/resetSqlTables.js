'use strict';

const removeSqlTable = require('./removeSqlTable');
const createSqlTable = require('./createSqlTable');
const addToSqlTable = require('./addToSqlTable');

const foxPlayerSqlTables = ['playlists', 'songs', 'playlist_songs'];
const favoritePlayList = { playListName: 'Favorites' , system_list: 1};

const resetSqlTables = (connection) => {
	foxPlayerSqlTables.forEach(table => {
		console.log(table);
		removeSqlTable(connection, table);
		createSqlTable(connection, table);
	});
	addToSqlTable(connection, 'playlists', favoritePlayList);
};

module.exports = resetSqlTables;
