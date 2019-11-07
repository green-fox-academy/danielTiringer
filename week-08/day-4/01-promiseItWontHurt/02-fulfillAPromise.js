'use strict';

let es6Promise = require('es6-promise');

let promise = new Promise ((fulfill, reject) =>
	setTimeout(() => {
		fulfill('FULFILLED!');
	}, 300)
);

promise.then((value) => console.log(value));
