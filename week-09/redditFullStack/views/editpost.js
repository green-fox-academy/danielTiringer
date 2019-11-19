'use strict';

// Populating the title and the url fields with the data from the original post
let titleField = document.querySelector('#title');
let urlField = document.querySelector('#url');

let postId = window.location.href.split('=');
let postData = getPostData(postId[1]);

const getPostData = (postId) => {
	fetch('http://localhost:3000/posts', {
    method:'GET',
    headers: {
      'Accept': 'application/json',
		}
	}	)
    .then(result => result.json())
    .then(result => {
			result.filter(post => {
				if (post.post_id == postId) {
					console.log(post);
					urlField.value = post.url;
					titleField.textContent = post.title;
				}
			});
    })
    .catch(err => console.log(`Error: ${err.message}`))
}
