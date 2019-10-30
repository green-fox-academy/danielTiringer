'use strict';

const express = require('express');
const app = express();
const PORT = 3000;

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

app.use(express.static('assets'));
const path = require('path');

// home page
app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, 'index.html'));
});
