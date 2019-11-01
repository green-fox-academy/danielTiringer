'use strict';

let parsecsv = (csvData) => {
	let fileLines = csvData.toString().split('\n');
	let header = fileLines[0].split(',');
  let csvArray = [];
  for(let i = 1; i < fileLines.length; i++){
		let temporary = []
 	  temporary = fileLines[i].split(',');
 		let record = {};
   	for(let j = 0; j < temporary.length; j++){
			record[header[j]] = temporary[j];
   	}
 		csvArray.push(record)
 	}
	return csvArray;
}

module.exports = parsecsv;
