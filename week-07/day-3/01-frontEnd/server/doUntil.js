'use strict';

const doUntil = (req, res) => {
	let doUntilOutput = {};
	if (isNaN(req.body.until)) {
		doUntilOutput = {
			'error': 'Please provide a number!',
		};
		res.status(400);
	} else if (!isNaN(req.body.until) && req.params.function == 'sum') {
		doUntilOutput = {
			'result': addN(req.body.until)
		};
		res.status(200);
	} else if (!isNaN(req.body.until) && req.params.function == 'factor') {
		doUntilOutput = {
			'result': factorio(req.body.until),
		};
		res.status(200);
	} else {
		doUntilOutput = {
			'error': `I don't know this action`
		};
		res.status(400);
	}
	res.json(doUntilOutput);
}

function addN (n) {
    let sum = 0;
    if (n > 0){
        sum = n + addN(n - 1);
    }
    return sum;
}

function factorio(input) {
    let output = 1;
    for(let i = 1; i <= input; i++){
        output = output * i;
    }
    return output;
}

module.exports = doUntil;
