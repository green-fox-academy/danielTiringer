'use strict';

function parsePromised (invalidData) {
	return new Promise((resolve, reject) => {
		try {
			resolve(JSON.parse(invalidData));
		}
		catch (error) {
			reject(error);
		}
	});
};

parsePromised(process.argv[2])
	.catch(function(error){
		console.log(error.message);
	})
