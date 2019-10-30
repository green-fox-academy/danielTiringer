'use strict';

const express = require('express');
const doubling = require('./doubling');
const app = express();
const PORT = 8080;

app.use(express.static('assets'));
app.use(express.json());
const path = require('path');

// home page
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});

// doubling endpoint
app.get('/doubling', doubling);

// start express app on port 8080
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
