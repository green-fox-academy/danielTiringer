'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('Groot endpoint', (t) => {
	request(app)
    .get('/groot')
		.query( { message: 'somemessage' } )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			let expectedResponse = { received: 'somemessage', translated: 'I am Groot!'  }
      t.error(err, 'No error');
      t.same(res.body, expectedResponse, 'Correct response from Groot');
    });
	request(app)
    .get('/groot')
		.query( {} )
    .expect('Content-Type', /json/)
    .expect(400)
    .end(function (err, res) {
			let expectedResponse = { error: 'No message to translate' }
      t.error(err, 'No error');
      t.same(res.body, expectedResponse, 'Correct error message');
      t.end();
    });
});

test('Yondu endpoint', (t) => {
	request(app)
    .get('/yondu')
		.query( { distance: 100.0, time: 10.0 } )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			let expectedResponse = { distance: 100.0, time: 10.0, speed: 10.0 }
      t.error(err, 'No error');
      t.same(res.body, expectedResponse, 'Correctly calculating the speed of the arrow.');
    });
	request(app)
    .get('/yondu')
		.query( { distance: 100.0, time: -1.0 } )
    .expect('Content-Type', /json/)
    .expect(400)
    .end(function (err, res) {
			let expectedResponse = { error: 'Invalid time value.' }
      t.error(err, 'No error');
      t.same(res.body, expectedResponse, 'Correct error message');
      t.end();
    });
});
