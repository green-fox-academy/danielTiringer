'use strict';

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

module.exports= insertIntoVotesTable;
