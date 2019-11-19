'use strict';

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
				console.log(post);
				generatePostBody(post);
			});
    })
    .catch(err => console.log(`Error: ${err.message}`))
}

getPosts();

let goToNewPost = document.querySelector("#to-new-post");
goToNewPost.addEventListener('click', (event) => {
	window.location.assign('http://localhost:3000/newpost');
});

let goToEditPost = document.querySelector("#edit-post");
goToNewPost.addEventListener('click', (event) => {
	window.location.assign(`http://localhost:3000/editpost?id=${postId}`);
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
	let main = document.querySelector('main');

	let entirePost = document.createElement('div');
	entirePost.setAttribute('class', 'post');

	let navigationArea = document.createElement('nav');
	navigationArea.setAttribute('class', 'voting');

	let upArrow = document.createElement('div');
	upArrow.setAttribute('class', 'up arrow');

	let downArrow = document.createElement('div');
	downArrow.setAttribute('class', 'down arrow');

	let postScore = document.createElement('div');
	postScore.setAttribute('class', 'post-score');
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

	let postAge = document.createElement('p');
	postAge.setAttribute('class', 'post-age');
	postAge.textContent = timeDifferenceCalculator(post.timestamp);

	postSection.appendChild(postHeader);
	postSection.appendChild(postAge);

	entirePost.appendChild(postSection);

	main.appendChild(entirePost);
};

