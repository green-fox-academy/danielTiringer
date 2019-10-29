'use strict';

let peopleRequest = new XMLHttpRequest();

peopleRequest.open('GET', "https://swapi.co/api/people/", true);

let inputField = document.getElementById('people-search');
inputField.innerText = 'Luke Skywalker';

let section = document.querySelector('section');

peopleRequest.onload = function () {
	let peopleData = JSON.parse(peopleRequest.responseText);
	console.log(peopleData.results[0]);
	for (let i = 0; i < peopleData.results.length; i++) {
		if ('Luke Skywalker' == peopleData.results[i].name) {
			console.log(peopleData.results[i].name);
		}
	}
}
peopleRequest.send();


