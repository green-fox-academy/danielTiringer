'use strict';

let rejectedPromise = Promise.reject(new Error('Nobody likes promises'));
let resolvedPromise = Promise.resolve('I love promises');

rejectedPromise.catch(error => {
	console.error('There is a new error');
	console.error(error.message)
});

resolvedPromise.then(value => console.log(value));
