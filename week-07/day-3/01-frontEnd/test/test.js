'use strict';

let test = require('tape');
let request = require('supertest');
let app = require('../server');

// To verify the functionality of the testing module
test('First test!', function (t) {
  t.end();
});

test('Doubling function', function (t) {
  request(app)
    .get('/doubling')
		.query( { input: 30 } )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			let expectedResult = { received: 30, result: 60 };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Number correctly doubled.');
      t.end();
    });
});

test('Doubling function', function (t) {
  request(app)
    .get('/doubling')
		.query( {} )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			let expectedResult = { error: 'Please provide an input!' };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Correct error message if no input provided.');
      t.end();
    });
});


