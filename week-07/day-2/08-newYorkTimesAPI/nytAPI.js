'use strict';

let nytRequest = new XMLHttpRequest();

nytRequest.open('GET', "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=apollo11&api-key=tpu0M6vFU1HYdd4D1smWqMLu7kjJWrwE", true);

let section = document.querySelector('section');

nytRequest.onload = function () {
	let nytData = JSON.parse(nytRequest.responseText);
	console.log(nytData.response.docs[0]);
	for (let i = 0; i < 3; i++) {
		let newList = document.createElement('ul');
		let newArticleHeadline = document.createElement('li');
		newArticleHeadline.innerText = nytData.response.docs[i].headline.main;
		let newArticleSnippet = document.createElement('li');
		newArticleSnippet.innerText = nytData.response.docs[i].lead_paragraph;
		let newArticlePublicationDate = document.createElement('li');
		newArticlePublicationDate.innerText = nytData.response.docs[i].pub_date.substr(0,10);
		let newArticleLink = document.createElement('li');
		let newLink = document.createElement('a');
		newLink.href = nytData.response.docs[i].web_url;
		newLink.innerText = 'Click here to read the full article';
		newArticleLink.appendChild(newLink);

		newList.appendChild(newArticleHeadline);
		newList.appendChild(newArticleSnippet);
		newList.appendChild(newArticlePublicationDate);
		newList.appendChild(newArticleLink);
		section.appendChild(newList);
	}
}
nytRequest.send();
