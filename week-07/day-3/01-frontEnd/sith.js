'use strict';

const sith = (req, res) => {
	let sithOutput = {};
	if (req.body.text == undefined) {
		sithOutput = {
			"error": "Feed me some text you have to, padawan young you are. Hmmm."
		}
	} else {
		sithOutput = {
			'sith_text':  ''
		}
	}
	res.send(sithOutput);
}

module.exports = sith;


function yodaSpeak(text) {
	let words = text.split(' ');
	let convertedWords = [];
	console.log(words);
	for (let i = 0; i < words.length; i++) {
		if (/[A-Z]/.test(words[i]) == true) {
			console.log(`Word ${i} is capitalized`)
		}
	}
}

yodaSpeak('This is my example sentence. Just for fun.');
