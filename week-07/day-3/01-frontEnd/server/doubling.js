'use strict';

const doubling = (req, res) => {
  let doublingOutput = {};
  if (!isNaN(req.query.input)) {
    doublingOutput = {
      'received': parseInt(req.query.input),
      'result': req.query.input * 2
    };
  } else {
    doublingOutput = {
      'error': 'Please provide an input!'
    };
  }
	res.status(200);
  res.json(doublingOutput);
}

module.exports = doubling;
