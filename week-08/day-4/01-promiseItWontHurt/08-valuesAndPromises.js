'use strict';

let attachTitle = function (word) {
	return 'DR. ' + word;
};

Promise.resolve('MANHATTAN').then(attachTitle).then(console.log);
