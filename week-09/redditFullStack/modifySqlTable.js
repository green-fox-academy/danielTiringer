'use strict';

const queryFromPostsTable = (connection, response, queryModifier) => {
	let sqlQuery = `SELECT posts.post_id, posts.title, posts.url, posts.timestamp, posts.score, users.username, votes.vote FROM posts
		LEFT JOIN users on users.user_id = posts.owner
		LEFT JOIN votes on votes.user_id = posts.owner`;

	connection.query(sqlQuery.concat(queryModifier), function(err, rows){
    if (err) {
			console.error(err);
		} else {
  		response.set('Content-Type: application/json');
      response.send(rows);
    }
	})
}

const insertIntoPostsTable = (connection, postData) => {
		let sqlQuery = `INSERT INTO posts (title, url, timestamp, score, owner, vote) VALUES (
		${connection.escape(postData.title)},\
		${connection.escape(postData.url)},\
		${connection.escape(Date.now())},\
		${postData.score ? connection.escape(postData.score) : 0},\
		${postData.owner ? connection.escape(postData.owner) : null},\
		${postData.vote ? connection.escape(postData.vote) : null}\
		);`;
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : console.log('The data has been written into the posts table.');
		});
};

const insertIntoUsersTable = (connection, userData) => {
		let sqlQuery = `INSERT INTO users (username, first_name, last_name, email, password) VALUES (
		${connection.escape(userData.username)},\
		${userData.first_name ? connection.escape(userData.first_name) : null},\
		${userData.last_name ? connection.escape(userData.last_name) : null},\
		${connection.escape(userData.email)},\
		${userData.password ? connection.escape(userData.password) : null}\
		);`
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : console.log('The data has been written into the users table.');
		});
};

const insertIntoVotesTable = (connection, voteData) => {
		let sqlQuery = `INSERT INTO votes (user_id, post_id, vote) VALUES (
		${connection.escape(voteData.user_id)},\
		${connection.escape(voteData.post_id)},\
		${connection.escape(voteData.vote)}\
		);`
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : console.log('The data has been written into the votes table.');
		});
};

const updateScore = (connection, postId, upOrDown) => {
	let updateNumber = 0;
	upOrDown === 'upvote' ? updateNumber = 1 : updateNumber = -1;
	let sqlQuery = `UPDATE posts\
			SET score = score + ${updateNumber}\
			WHERE post_id = ${connection.escape(postId)};`
	connection.query(sqlQuery, function(err, res){
		err ? console.error(err) : console.log('The score has been updated.');
	});
}

const updatePost = (connection, postData) => {
	let sqlQuery = `UPDATE posts\
		SET title = ${connection.escape(postData.title)}\
		SET url = ${connection.escape(postData.url)}\
		WHERE post_id = ${connection.escape(postData.postId)};`
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : console.log('The post has been updated.');
		});
};

module.exports = { queryFromPostsTable, insertIntoPostsTable, insertIntoUsersTable, insertIntoVotesTable, updateScore, updatePost };
