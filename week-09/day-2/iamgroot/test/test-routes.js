'use strict';

const test = require('tape');
const request = require('supertest');
const app = require('../routes');

test('groot endpoint', (t) => {
	request(app)
    .get('/groot')
		.query( { message: 'somemessage' } )
    .expect('Content-Type', /json/)
    .expect(200)
    .end(function (err, res) {
			let expectedResponse = { received: 'somemessage', translated: 'I am Groot!'  }
      t.error(err, 'No error');
      t.same(res.body, expectedResponse, 'Correct response from Groot');
      t.end();
    });
});

test('groot endpoint without message', (t) => {
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
