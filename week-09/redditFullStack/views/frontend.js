'use strict';

let main = document.querySelector('main');

// Getting the posts
const getPosts = () => {
	fetch('http://localhost:3000/posts', {
    method:'GET',
    headers: {
      'Accept': 'application/json',
		}
	}	)
    .then(result => result.json())
    .then(result => {
			result.forEach(post => {
				generatePostBody(post);
			});
    })
    .catch(err => console.log(`Error: ${err.message}`))
}
getPosts();

// Jumping to page where a new post can be entered
let goToNewPost = document.querySelector("#to-new-post");
goToNewPost.addEventListener('click', (event) => {
	window.location.assign('http://localhost:3000/newpost');
});

// Handling up and downvotes, and post removal
main.addEventListener('click', function (event) {
	let postId = event.target.getAttribute('id');

	if (event.target.getAttribute('class').includes('arrow')) {
		// Setting a few variables to make event handling compact
		let postScore = document.querySelector(`[class='post-score'][id='${postId}']`)
		let voteModifier = '';
		let scoreModifier = 0;
		let vote = (upOrDown) => {
			if (upOrDown === 'up') {
				(voteModifier = 'upvote') && (scoreModifier = 1)
			} else if (upOwDown === 'down') {
				(voteModifier = 'downvote') && (scoreModifier = -1)
			}
		}

		// Vote event handling statements
		!event.target.getAttribute('class').includes('voted') ?
			(event.target.getAttribute('class').includes('up') ? vote('up') : vote('down'))
			&& event.target.setAttribute('class', `${event.target.getAttribute('class')} voted`)
		:
			(event.target.getAttribute('class').includes('up') ? vote('down'): vote('up'))
			&& event.target.setAttribute('class', `${event.target.getAttribute('class').slice(0, -6)}`);

		postScore.textContent = parseInt(postScore.textContent) + scoreModifier;
		fetch(`http://localhost:3000/posts/${postId}/${voteModifier}`, {
			method: 'put'
		});

	// Post removal handling
	} else if (event.target.getAttribute('class') === 'remove-post') {
		let postToRemove = document.querySelector(`#post-${event.target.getAttribute('id')}`);
		postToRemove.setAttribute('class', 'post-hidden');
		fetch(`http://localhost:3000/posts/${postId}`, {
			method: 'delete'
		})
	}
});

const timeDifferenceCalculator = (timestamp) => {
	let timeDifference = (Date.now() - timestamp) / 1000;

	let returnText = '';
	let plural = '';

	if (timeDifference / 60 / 60 / 24 >= 1) {
		if (timeDifference / 60 / 60 / 24 > 2) {
			plural = 's';
		};
		returnText = `submitted ${Math.floor(timeDifference / 60 / 60 / 24)} day${plural} ago`;
	} else if (timeDifference / 60 / 60 >= 1) {
		if (timeDifference / 60 / 60 > 2) {
			plural = 's';
		};
		returnText = `submitted ${Math.floor(timeDifference / 60 / 60)} hour${plural} ago`;
	} else if (timeDifference / 60 >= 1) {
		if (timeDifference / 60 > 2) {
			plural = 's';
		};
		returnText = `submitted ${Math.floor(timeDifference / 60)} minute${plural} ago`;
	} else if (timeDifference / 60 < 1) {
		returnText = 'submitted just now';
	};
	return returnText;
}


const makeElementWithClass = (elementType, elementClass) => {
	let newElement = document.createElement(elementType);
	newElement.setAttribute('class', elementClass);
	return newElement;
};


const generatePostBody = (post) => {

	let entirePost = document.createElement('div');
	entirePost.setAttribute('class', 'post');
	entirePost.setAttribute('id', `post-${post.post_id}`);

	let navigationArea = document.createElement('nav');
	navigationArea.setAttribute('class', 'voting');

	let upArrow = document.createElement('div');
	upArrow.setAttribute('class', 'up arrow');
	upArrow.setAttribute('id', post.post_id);

	let downArrow = document.createElement('div');
	downArrow.setAttribute('class', 'down arrow');
	downArrow.setAttribute('id', post.post_id);

	let postScore = document.createElement('div');
	postScore.setAttribute('class', 'post-score');
	postScore.setAttribute('id', post.post_id);
	postScore.textContent = post.score;

	navigationArea.appendChild(upArrow);
	navigationArea.appendChild(postScore);
	navigationArea.appendChild(downArrow);

	entirePost.appendChild(navigationArea);

	let postSection = document.createElement('section');
	postSection.setAttribute('class', 'post-section');

	let postHeader = document.createElement('h2');
	postHeader.setAttribute('class', 'post-header');

	let postLink = document.createElement('a');
	postLink.setAttribute('href', post.url);
	postLink.textContent = post.title;

	postHeader.appendChild(postLink);

	let postFooter = document.createElement('div');
	postFooter.setAttribute('class', 'post-footer');

	let postAge = document.createElement('p');
	postAge.setAttribute('class', 'post-age');
	postAge.textContent = timeDifferenceCalculator(post.timestamp);

	let editPost = document.createElement('a');
	editPost.setAttribute('class', 'edit-post');
	editPost.setAttribute('href', `/editpost?id=${post.post_id}`);
	editPost.textContent = 'edit post';

	let removePost = document.createElement('a');
	removePost.setAttribute('class', 'remove-post');
	removePost.setAttribute('id', post.post_id);
	removePost.textContent = 'remove post';

	postFooter.appendChild(postAge);
	postFooter.appendChild(editPost);
	postFooter.appendChild(removePost);

	postSection.appendChild(postHeader);
	postSection.appendChild(postFooter);

	entirePost.appendChild(postSection);

	main.appendChild(entirePost);
};

