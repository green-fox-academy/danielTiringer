'use strict';

let div = document.querySelector('.container');
let button = document.querySelector('button');

button.onclick = () => {
  fetch('http://api.icndb.com/jokes/random')
    .then(result => result.json())
    .then(result => {
      let paragraph = document.createElement('p')
      paragraph.textContent = result.value.joke;
			div.appendChild(paragraph);
    })
    .catch(err => console.log(`Error: ${err.message}`))
};
