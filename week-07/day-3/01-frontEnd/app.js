'use strict';

const express = require('express');
const doubling = require('./doubling');
const greeter = require('./greeter');
const appenda = require('./appenda');
const doUntil = require('./doUntil');
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

// greeter endpoint
app.get('/greeter', greeter);

// appenda endpoint
app.get('/appenda/:appendTo', appenda);

// doUntil endpoint
app.post('/dountil/:function', doUntil);

// start express app on port 8080
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
