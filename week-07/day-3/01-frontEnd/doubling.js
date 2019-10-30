'use strict';

const doubling = (req, res) => {
  let doublingOutput = {};
  if (!isNaN(req.query.input)) {
    doublingOutput = {
      "received": req.query.input,
      "result": req.query.input * 2
    };
  } else {
    doublingOutput = {
      "error": "Please provide an input!"
    };
  }
  res.send(doublingOutput);
}

module.exports = doubling;
