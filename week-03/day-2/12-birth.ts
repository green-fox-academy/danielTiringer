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
//     for(let i: number = 0; i < separatedArray.length; i++){
//         if((i-1) % 3 == 0){
//             console.log(separatedArray[i]);
//             separatedArray.sort();
//                 var max=0,result,freq = 0;
//                 for(var i=0; i < arr.length; i++){
//                     if(arr[i]===arr[i+1]){
//                         freq++;
//                     } else {
//                         freq=0;
//                     }
//                     if(freq>max){
//                         result = arr[i];
//                         max = freq;
//                     }
//                 }
//                 return result;
//         }
//     }
// }


mostBirthdates('12-births.csv');