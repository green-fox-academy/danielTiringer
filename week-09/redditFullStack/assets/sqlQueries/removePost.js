'use strict';

const removePost = (connection, postId) => {
	let sqlQuery = `DELETE FROM posts
		WHERE post_id = ${connection.escape(postId)};`
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : console.log('The post has been removed.');
		});
};

module.exports = removePost;
