'use strict';

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

module.exports = insertIntoUsersTable;
