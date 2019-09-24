// Create a function that
// - takes the name of a CSV file as a parameter,
//   - every row is in the following format: <person name>;<birthdate in YYYY-MM-DD format>;<city name>
// - returns the year when the most births happened.
//   - if there were multiple years with the same number of births then return any one of them

// You can find such a CSV file in this directory named births.csv
// If you pass "births.csv" to your function, then the result should be either 2006, or 2016.

const fs = require('fs');

function mostBirthdates (filePath) {
    let fileLines: string[] = fs.readFileSync(filePath, 'utf-8').toString().split('\n');
    let separatedArray: string[] = [];
    for(let i: number = 0; i < fileLines.length; i++){
        let temporary: string[] = [];
        temporary = fileLines[i].split(';'); 
        for(let j: number = 0; j < temporary.length; j++){

            separatedArray.push(temporary[j])
        }
        
    }
    // Trimming down the original array to just the years
    let yearArray: string[] = [];
    for(let i: number = 0; i < separatedArray.length; i++){
        if((i-1) % 3 == 0){
            yearArray.push(separatedArray[i].slice(0,4));
        }
    }
    // Finding the most often occuring year
    let max: number = 0;
    let result: string;
    let freq: number = 0;
    for(let i = 0; i < yearArray.length; i++){
        if(yearArray[i] == yearArray[i+1]){
            freq++;
        } else {
            freq = 0;
        }
        if(freq > max){
            result = yearArray[i];
            max = freq;
        }
    }
    console.log(result);
}


mostBirthdates('12-births.csv');