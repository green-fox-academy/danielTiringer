'use strict';

let genreSelector = document.querySelector('#genre');
let movieSelector = document.querySelector('#movie');

let genres = ['Sci-fi', 'Drama', 'Comedy'];
let movies = [
	{title: 'Moon', genre: 'Sci-fi'},
	{title: '2001: A Space Odyssey', genre: 'Sci-fi'},
	{title: 'Contact', genre: 'Sci-fi'},
	{title: 'Darkest Hour', genre: 'Drama'},
	{title: 'There Will Be Blood', genre: 'Drama'},
	{title: 'American Beauty', genre: 'Drama'},
	{title: 'Airplane!', genre: 'Comedy'},
	{title: 'Deadpool', genre: 'Comedy'},
	{title: 'Wayne\'s World', genre: 'Comedy'}
];

genres.forEach(genre => {
	let option = document.createElement('option');
	option.textContent = genre;
	option.setAttribute('value', genre);
	genreSelector.appendChild(option);
});

movies.forEach(movie => {
	let option = document.createElement('option');
	option.textContent = movie.title;
	option.setAttribute('value', movie.genre);
	option.setAttribute('class', 'hide');
	movieSelector.appendChild(option);
});

genreSelector.addEventListener('click', (event) => {
	console.log(genreSelector.value);
	movieSelector.childNodes.forEach(node => {
		if (node.value === genreSelector.value) {
			node.setAttribute('class', '');
		} else if (node.value && genreSelector.value != node.value) {
			node.setAttribute('class', 'hide');
		}
	});
	console.log(movieSelector.childNodes[9].value);
});


