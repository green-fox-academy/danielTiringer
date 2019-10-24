const express = require('express');
const app = express();
const PORT = 3000;

// set the view engine to ejs
app.set('view engine', 'ejs');

// home page

// app.get('/', (req, res) => {
// 	res.render('home', {
// 		title: 'Guest'
// 	})
// })


app.get('/', (req, res) => {
	let name = req.query.name;
	name != undefined ?
		res.render('home', {
			title: req.query.name
	}) :
		res.render('home', {
			title: 'Guest'
	})
});

// start express app on port 3000
app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
