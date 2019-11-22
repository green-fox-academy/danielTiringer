'use strict';

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

module.exports = insertIntoPostsTable;
