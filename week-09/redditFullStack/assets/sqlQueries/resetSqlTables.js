'use strict';

const removeSqlTable = require('./removeSqlTable');
const createPostsSqlTable = require('./createPostsSqlTable');
const createUsersSqlTable = require('./createUsersSqlTable');
const createVotesSqlTable = require('./createVotesSqlTable');
const insertIntoPostsTable = require('./insertIntoPostsTable');
const insertIntoUsersTable = require('./insertIntoUsersTable');
const insertIntoVotesTable = require('./insertIntoVotesTable');
const dataToUseForTesting = require('./dataToUseForTesting');

const resetSqlTables = (connection) => {
// Remove the MySQL tables
	const removeVotesTable = removeSqlTable(connection, 'votes');
	const removeUsersTable = removeSqlTable(connection, 'users');
	const removePostsTable = removeSqlTable(connection, 'posts');

	// Create the MySQL tables
	conn.query(createPostsSqlTable, function(err, res) {
		err ? console.log('Unable to create the new table.') : console.log('The table is ready.');
	});

	conn.query(createVotesSqlTable, function(err, res) {
		err ? console.log('Unable to create the new table.') : console.log('The table is ready.');
	});

	conn.query(createUsersSqlTable, function(err, res) {
		err ? console.log('Unable to create the new table.') : console.log('The table is ready.');
	});

	// Write dummy data into MySQL tables
	let writeUserData = dataToUseForTesting.usersDummyData.forEach(user => {
		insertIntoUsersTable(conn, user)
	});

	let writePostsData = dataToUseForTesting.postsDummyData.forEach(post => {
		insertIntoPostsTable(conn, post);
	});

	let writeVotesData = dataToUseForTesting.votesDummyData.forEach(vote => {
		insertIntoVotesTable(conn, vote);
	});
}

module.exports = resetSqlTables;
