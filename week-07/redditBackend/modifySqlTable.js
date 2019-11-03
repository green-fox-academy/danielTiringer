'use strict';

const insertIntoPostsTable = (connection, postData) => {
		let sqlQuery = `INSERT INTO posts (title, url, timestamp, score, owner, vote) VALUES (
		${connection.escape(postData.title)},
		${connection.escape(postData.url)},
		${connection.escape(Math.floor(Date.now()/1000))},
		${postData.score ? connection.escape(postData.score) : 0},
		${postData.owner ? connection.escape(postData.owner) : null},
		${postData.vote ? connection.escape(postData.vote) : null}
		);`
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : undefined;
		});
	console.log('The data has been written into the posts table.');
};

const insertIntoUsersTable = (connection, userData) => {
		let sqlQuery = `INSERT INTO users (username, fist_name, last_name, email, password) VALUES (
		${connection.escape(userData.username)},
		${userData.first_name ? connection.escape(userData.first_name) : null},
		${userData.last_name ? connection.escape(userData.last_name) : null},
		${connection.escape(userData.email)},
		${userData.password ? connection.escape(userData.password) : null},
		);`
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : undefined;
		});
	console.log('The data has been written into the users table.');
};

const insertIntoVotesTable = (connection, voteData) => {
		let sqlQuery = `INSERT INTO votes (user_id, post_id, vote) VALUES (
		${connection.escape(voteData.user_id)},
		${connection.escape(voteData.post_id)},
		${connection.escape(voteData.vote)},
		);`
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : undefined;
		});
	console.log('The data has been written into the votes table.');
};

module.exports = { insertIntoPostsTable, insertIntoUsersTable, insertIntoVotesTable };
