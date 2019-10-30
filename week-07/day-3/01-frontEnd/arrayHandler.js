'use strict';

const arrayHandler = (req, res) => {
	let arrayHandlerOutput = {};
	if(req.body.what == undefined || req.body.numbers == undefined) {
		arrayHandlerOutput = {
			"error": "Please provide what to do with the numbers!"
		}
	} else if (req.body.what == 'sum'){
		arrayHandlerOutput = {
			'result': req.body.numbers.reduce(
				( accumulator, currentValue ) => accumulator + currentValue,
				0
			)
		}
	} else if (req.body.what == 'multiply'){
		arrayHandlerOutput = {
			'result': req.body.numbers.reduce(
				( accumulator, currentValue ) => accumulator * currentValue,
				0
			)
		}
	} else if (req.body.what == 'double'){
		arrayHandlerOutput = {
			'result': req.body.numbers.map(element => element * 2)
		}
	}
	res.send(arrayHandlerOutput);
}

module.exports = arrayHandler;
