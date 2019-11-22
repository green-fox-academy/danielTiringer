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
			response.status(200);
      response.send(rows);
    }
	})
}

module.exports = queryFromPostsTable;
