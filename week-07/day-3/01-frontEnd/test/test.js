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
			const expectedResult = { received: 30, result: 60 };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Number correctly doubled.');
    });
  request(app)
    .get('/doubling')
		.query( {} )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			const expectedResult = { error: 'Please provide an input!' };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Correct error message if no input provided.');
    	t.end();
    });
});

test('Greeter function', function (t) {
  request(app)
    .get('/greeter')
		.query( { name: 'Daniel', title: 'Senior Programmer' } )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			const expectedResult = { welcome_message: 'Oh, hi there Daniel, my dear Senior Programmer!' };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Correct greeting formulated.');
    });
  request(app)
    .get('/greeter')
		.query( { name: 'Daniel' } )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			const expectedResult = { error: 'Please provide a title!' };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Correct error when no title is submitted.');
    });
  request(app)
    .get('/greeter')
		.query( { title: 'Programmer' } )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			const expectedResult = { error: 'Please provide a name!' };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Correct error when no name is submitted.');
    });
  request(app)
    .get('/greeter')
		.query( {} )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			const expectedResult = { error: 'Please provide a name and a title!' };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Correct error when no name or title is submitted.');
      t.end();
    });
});

test('Append-A function', function (t) {
  request(app)
    .get('/appenda/Johnyk')
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			const expectedResult = { appended: 'Johnyka' };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Letter A correctly appended.');
    	t.end();
    });
});

test('Array Handler function', function (t) {
  request(app)
    .post('/arrays')
		.send( { what: undefined, numbers: [1, 2, 5, 10] } )
    .expect('Content-Type', /json/)
    .expect(400)
    .end(function (err, res) {
			const expectedResult = { error: 'Please provide what to do with the numbers!' };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Adding no "what" results in an error message.');
    });
  request(app)
    .post('/arrays')
		.send( { what: 'sum', numbers: undefined } )
    .expect('Content-Type', /json/)
    .expect(400)
    .end(function (err, res) {
			const expectedResult = { error: 'Please provide what to do with the numbers!' };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'Adding no "numbers" results in an error message.');
    });
  request(app)
    .post('/arrays')
		.send( { what: 'sum', numbers: [1, 2, 5, 10] } )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			const expectedResult = { result: 18 };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'The sum function yields the correct result.');
    });
  request(app)
    .post('/arrays')
		.send( { what: 'multiply', numbers: [1, 2, 5, 10] } )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			const expectedResult = { result: 100 };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'The multiply function yields the correct result.');
    });
  request(app)
    .post('/arrays')
		.send( { what: 'double', numbers: [1, 2, 5, 10] } )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			const expectedResult = { result: [2, 4, 10, 20] };
      t.error(err, 'No error');
      t.same(res.body, expectedResult, 'The double function yields the correct result.');
    	t.end();
    });
});
