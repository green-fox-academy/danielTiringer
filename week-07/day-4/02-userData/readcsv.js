'use strict';

const fs = require('fs');

let readcsv = (filePath) => {
	try {
     if(!fs.existsSync(filepath, 'utf-8')) {
	  		console.log('File does not exist!');
				return undefined;
     } else {
			return fs.readFileSync(filePath, 'utf-8').toString().split('\n');
			let fileLines = fs.readFileSync(filePath, 'utf-8').toString().split('\n');
			let header = fileLines[0].split(',');
		  let csvData = [];
		  for(let i = 1; i < fileLines.length; i++){
				let temporary = []
		    temporary = fileLines[i].split(',');
    		let record = {};
		    for(let j = 0; j < temporary.length; j++){
					record[header[j]] = temporary[j];
		    }
	  		csvData.push(record)
	  	}
			return csvData;
 		}
	}
	catch (error) {
	  console.log('File not accessible!');
		return undefined;
  }
}
readcsv('./users.csv');
