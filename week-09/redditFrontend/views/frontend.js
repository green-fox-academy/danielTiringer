'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
app.use(bodyParser.json());

// Getting the posts
// const getPosts = () => {
	fetch('http://secure-reddit.herokuapp.com/simple/posts',/* {
    method:'GET',
    headers: {
      'Accept': 'application/json',
		}
	}*/	)
    .then(result => result.json())
    .then(result => {
			result.posts.forEach(post => {
				generatePostBody(post);
			});
    })
    .catch(err => console.log(`Error: ${err.message}`))
// }

// getPosts();

const makeElementWithClass = (elementType, elementClass) => {
	let newElement = document.createElement(elementType);
	newElement.setAttribute('class', elementClass);
	return newElement;
};


const timeDifferenceCalculator = (timestamp) => {
	let timeDifference = Date.now() - timestamp;

	let returnText = '';
	let plural = '';

	if (timeDifference / 60 / 60 / 24 >= 1) {
		if (timeDifference / 60 / 60 / 24 > 2) {
			plural = 's';
		};
		returnText = `submitted ${timeDifference / 60 / 60 / 24} day${plural} ago`;
	} else if (timeDifference / 60 / 60 >= 1) {
		if (timeDifference / 60 / 60 > 2) {
			plural = 's';
		};
		returnText = `submitted ${timeDifference / 60 / 60} hour${plural} ago`;
	} else if (timeDifference / 60 >= 1) {
		if (timeDifference / 60 > 2) {
			plural = 's';
		};
		returnText = `submitted ${timeDifference / 60} minute${plural} ago`;
	};
	return returnText;
}



const generatePostBody = (post) => {
	let main = document.querySelector('main');

	let entirePost = document.createElement('div');
	post.setAttribute('class', 'post');

	let navigationArea = document.createElement('nav');
	navigationArea.setAttribute('class', 'voting');

	let upArrow = document.createElement('div');
	upArrow.setAttribute('class', 'up arrow');

	let downArrow = document.createElement('div');
	downArrow.setAttribute('class', 'down arrow');

	let postScore = document.createElement('div');
	postScore.setAttribute('class', 'post-score');
	postScore.textcontent = post.score;

	navigationArea.appendChild(upArrow);
	navigationArea.appendChild(postScore);
	navigationArea.appendChild(downArrow);

	entirePost.appendChild(navigationArea);

	let postHeader = document.createElement('h2');
	postHeader.textContent = post.title;
	postHeader.setAttribute('class', 'post-header');
	postHeader.setAttribute('href', post.url);

	let postAge = document.createElement('p');
	postAge.setAttribute('class', 'post-age');
	postAge.textContent = timeDifferenceCalculator(post.timestamp);
	console.log(postAge.textContent);


	entirePost.appendChild(postHeader);
	entirePost.appendChild(postAge);

	entirePost.appendChild(main);
};

module.exports = app;
