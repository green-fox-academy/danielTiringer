'use strict';

const createVotesSqlTable = `CREATE TABLE IF NOT EXISTS votes (
	vote_id INTEGER PRIMARY KEY AUTO_INCREMENT,
	user_id INTEGER,
	post_id INTEGER NOT NULL,
	vote INTEGER(2) NOT NULL
);`;

module.exports = createVotesSqlTable;
