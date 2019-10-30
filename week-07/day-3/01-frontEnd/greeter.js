'use strict';

const greeter = (req, res) => {
	let greeterOutput = {};
	if(!isNaN(req.query.name) && !isNaN(req.query.title)) {
		greeterOutput = {
			'welcome_message': `Oh, hi there ${req.query.name}, my dear ${req.query.title}!`
		}
	} else if (!isNaN(req.query.name) && isNaN(req.query.title)) {
		greeterOutput = {
			'error': 'Please provide a title!'
		}
	} else if (isNaN(req.query.name) && !isNaN(req.query.title)) {
		greeterOutput = {
			'error': 'Please provide a name!'
		}
	} else if (isNaN(req.query.name) && isNaN(req.query.title)) {
		greeterOutput = {
			'error': 'Please provide a name and a title!'
		}
	}
	res.send(greeterOutput);
}

module.exports = greeter;
