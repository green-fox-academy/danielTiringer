'use strict';

let asteroids = document.querySelector('.asteroids');

const planetData = [
    {
      category: 'inhabited',
      content: 'Foxes',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Whales and Rabbits',
      asteroid: true,
    },
    {
      category: 'uninhabited',
      content: 'Baobabs and Roses',
      asteroid: true,
    },
    {
      category: 'inhabited',
      content: 'Giant monsters',
      asteroid: false,
    },
    {
      category: 'inhabited',
      content: 'Sheep',
      asteroid: true,
    },
];

// Remove king from the list

let asteroidToRemove = document.querySelector('li');
asteroids.removeChild(asteroidToRemove);

// Add list to the asteroids

// planetData.forEach(element => {
// 	let newListItem = document.createElement('li');
// 	let newListItemContent = document.createTextNode(planetData[planetData.indexOf(element)].content);
// 	newListItem.appendChild(newListItemContent);
// 	asteroids.appendChild(newListItem);
// })

// Only add the asteroids

let asteroidData = [];

planetData.forEach(element => {
	element.asteroid == true ? asteroidData.push(element) : undefined
});

asteroidData.forEach(element => {
	let newItem = document.createElement('li');
	let newItemContent = document.createTextNode(asteroidData[asteroidData.indexOf(element)].content);
	newItem.appendChild(newItemContent);
	newItem.setAttribute('class', asteroidData[asteroidData.indexOf(element)].category)
	asteroids.appendChild(newItem)
})

// Adding the line belows to show that the classes were added

console.log(asteroids)
