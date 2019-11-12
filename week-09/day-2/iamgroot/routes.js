'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.get('/groot', (req, res) => {

	let response = {};
	response.received = req.query.message;
	response.translated = 'I am Groot!';

	req.query.message ?
		res.status(200) &&
		res.json(response)
	:
		res.status(400) &&
		res.json( {error: 'No message to translate'} );

});

app.get('/yondu', (req, res) => {

	if (req.query.distance > 0 && req.query.time > 0) {
		let response = {}
		response.distance = parseInt(req.query.distance);
		response.time = parseInt(req.query.time);
		response.speed = response.distance / response.time;

		res.status(200);
		res.json(response);

	} else if (req.query.time <= 0) {
		res.status(400);
		res.json( { error: 'Invalid time value.' } );
	}

});


module.exports = app;
