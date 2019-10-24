'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// Stuff to do

const data = [
  'get up',
  'survive',
  'go back to bed',
];

// home page

app.get('/', (req, res) => {
		res.render('home', {
			todos: data
	})
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
