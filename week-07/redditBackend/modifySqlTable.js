'use strict';

const insertIntoPostsTable = (connection, postData) => {
		let sqlQuery = `INSERT INTO posts (title, url, timestamp, score, owner, vote) VALUES (
		${connection.escape(postData.title)},\n
		${connection.escape(postData.url)},\n
		${connection.escape(Math.floor(Date.now()/1000))},\n
		${postData.score ? connection.escape(postData.score) : 0},\n
		${postData.owner ? connection.escape(postData.owner) : null},\n
		${postData.vote ? connection.escape(postData.vote) : null}\n
		);`
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : undefined;
		});
	console.log('The data has been written into the posts table.');
};

const insertIntoUsersTable = (connection, userData) => {
		let sqlQuery = `INSERT INTO users (username, first_name, last_name, email, password) VALUES (
		${connection.escape(userData.username)},\n
		${userData.first_name ? connection.escape(userData.first_name) : null},\n
		${userData.last_name ? connection.escape(userData.last_name) : null},\n
		${connection.escape(userData.email)},\n
		${userData.password ? connection.escape(userData.password) : null}\n
		);`
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : console.log('The data has been written into the users table.');
		});
};

const insertIntoVotesTable = (connection, voteData) => {
		let sqlQuery = `INSERT INTO votes (user_id, post_id, vote) VALUES (
		${connection.escape(voteData.user_id)},
		${connection.escape(voteData.post_id)},
		${connection.escape(voteData.vote)},
		);`
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : console.log('The data has been written into the votes table.');
		});
};

module.exports = { insertIntoPostsTable, insertIntoUsersTable, insertIntoVotesTable };
