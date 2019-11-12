'use strict';

const express = require('express');
const app = express();

app.get('/groot', (req, res) => {
  // TODO: implement this method
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

module.exports = app;
