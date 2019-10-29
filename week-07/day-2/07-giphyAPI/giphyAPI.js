'use strict';

// Display gifs of a cute/funny topic using: https://developers.giphy.com/docs/
// Obtain an API key
// let apiKey = 1rzC0Cx7aJLeAzJdOMKcGDtmLUlsTpE2;
// Search/Find the images in the API
let giphyRequest = new XMLHttpRequest();

giphyRequest.open('GET', "http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=1rzC0Cx7aJLeAzJdOMKcGDtmLUlsTpE2&limit=20", true);

let section = document.querySelector('section');

giphyRequest.onload = function () {
	let giphyData = JSON.parse(giphyRequest.responseText);
	console.log(giphyData.data[0].images);
	for (let i = 0; i < 16; i++){
		let newImage = document.createElement('img');
		newImage.setAttribute('src', giphyData.data[i].images.fixed_height_small_still.url)
		newImage.setAttribute('id', i);
		newImage.onclick = () => {
			newImage.src = giphyData.data[i].images.fixed_height_small.url
		};
		section.appendChild(newImage);
	}
}
giphyRequest.send();

// Display the list of the first 16 results's static thumbnail
// If the user clicks on the thumbnail, display the animated GIF
