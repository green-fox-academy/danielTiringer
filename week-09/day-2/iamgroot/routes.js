'use strict';

const express = require('express');
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

const loadShip = require('./ship');

let ship = {
	"caliber25": 0,
  "caliber30": 0,
  "caliber50": 0,
  "shipstatus": "empty",
  "ready": false
};


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

app.get('/rocket', (req, res) => {
	res.status(200);
	res.json(ship);
});

app.get('/rocket/fill', (req, res) => {
	let statusReport = {};
	let caliber = `caliber${req.query.caliber.substring(1)}`;
	loadShip(caliber, req.query.amount, ship);

	// console.log(ship);

	statusReport.received = req.query.caliber;
	statusReport.amount = req.query.amount;
	statusReport.shipstatus = ship.shipstatus;
	statusReport.ready = ship.ready;

	res.status(200);
	res.json(statusReport);
});

module.exports = app;
