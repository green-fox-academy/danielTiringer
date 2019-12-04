'use strict';

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

module.exports = updateScore;
