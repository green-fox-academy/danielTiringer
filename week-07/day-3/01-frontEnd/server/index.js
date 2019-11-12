'use strict';

const express = require('express');
const doubling = require('./doubling');
const greeter = require('./greeter');
const appenda = require('./appenda');
const doUntil = require('./doUntil');
const sith = require('./sith');
const arrayHandler = require('./arrayHandler');
const app = express();
const bodyParser = require('body-parser');

app.use(express.static('assets'));
app.use(express.json());
app.use(bodyParser.json());
const path = require('path');

// home page
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '../index.html'));
});

// doubling endpoint
app.get('/doubling', doubling);

// greeter endpoint
app.get('/greeter', greeter);

// appenda endpoint
app.get('/appenda/:appendTo', appenda);

// doUntil endpoint
app.post('/dountil/:function', doUntil);

// arrayHandler endpoint
app.post('/arrays', arrayHandler);

// sith endpoint
app.post('/sith', sith);

module.exports = app;
