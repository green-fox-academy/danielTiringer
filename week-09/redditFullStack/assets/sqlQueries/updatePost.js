'use strict';

const updatePost = (connection, postData) => {
	let sqlQuery = `UPDATE posts
		SET title = ${connection.escape(postData.title)}, url = ${connection.escape(postData.url)}
		WHERE post_id = ${connection.escape(postData.postId)};`
		connection.query(sqlQuery, function(err, res){
			err ? console.error(err) : console.log('The post has been updated.');
		});
};

module.exports = updatePost;
