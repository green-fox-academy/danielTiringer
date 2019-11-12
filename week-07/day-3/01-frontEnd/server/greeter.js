'use strict';

const greeter = (req, res) => {
	let greeterOutput = {};
	if (req.query.name && req.query.title) {
		greeterOutput = {
			'welcome_message': `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
		}
	} else if (req.query.name && !req.query.title) {
		greeterOutput = {
			'error': 'Please provide a title!'
		}
	} else if (!req.query.name && req.query.title) {
		greeterOutput = {
			'error': 'Please provide a name!'
		}
	} else if (!req.query.name && !req.query.title) {
		greeterOutput = {
			'error': 'Please provide a name and a title!'
		}
	}
	res.status(200);
	res.json(greeterOutput);
}

module.exports = greeter;
