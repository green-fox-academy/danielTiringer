'use strict';

// Handling a new post

const getNewPost = () => {
	fetch('http://localhost:3000/posts', {
		method:'POST',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		}
	} )
		.then(result => result.json())
		.then(result => {

			console.log(result);

		})
}



