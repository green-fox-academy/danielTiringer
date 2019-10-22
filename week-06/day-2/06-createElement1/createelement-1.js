'use strict';

let asteroids = document.querySelector('ul');

// The GFA asteroid

let greenFoxAsteroid = document.createElement('li');
greenFoxAsteroid.textContent = 'The Green Fox';

asteroids.appendChild(greenFoxAsteroid);

// The lamplighter asteroid

let lampLighterAsteroid = document.createElement('li');
lampLighterAsteroid.textContent = 'The Lamplighter';

asteroids.appendChild(lampLighterAsteroid);

// Adding a header to the DOM

let container = document.querySelector('.container');
let newHeader = document.createElement('h2');
newHeader.textContent = 'I can add elements to the DOM!';
container.appendChild(newHeader);

// Adding an image to the container

let newImage = document.createElement('img');
newImage.src = 'https://www.gaggl.com/wp-content/uploads/2014/01/vim-logo-128.png';

container.appendChild(newImage);
