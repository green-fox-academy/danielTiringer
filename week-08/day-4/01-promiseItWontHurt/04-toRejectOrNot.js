'use strict';

let promise = new Promise((resolve, reject) => {
	resolve('I FIRED');
	reject(new Error('I DID NOT FIRE'));
});

let onRejected = error => console.log(error.message);

promise.then((value) => console.log(value), onRejected);
