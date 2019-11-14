'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());


// Getting the posts

window.onload = () => {
	fetch('http://secure-reddit.herokuapp.com/simple')
    .then(result => result.json())
    .then(result => {
			console.log(result);
      let paragraph = document.createElement('p')
      paragraph.textContent = result.value.joke;
			div.appendChild(paragraph);
    })
    .catch(err => console.log(`Error: ${err.message}`))
};


