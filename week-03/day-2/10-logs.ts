// Read all data from 'log.txt'.
// Each line represents a log message from a web server
// Write a function that returns an array with the unique IP adresses.
// Write a function that returns the GET / POST request ratio.


const fs = require('fs');

function uniqueIpAddresses (filePath: string): void {
    let fileLines: string[] = fs.readFileSync(filePath, 'utf-8').toString().split('\n');
    let addressArray: string[] = [];
    fileLines.forEach(function(line) {
        addressArray.push(line.slice(27, 38));
    });
    let uniqueArray: string[] = addressArray.filter(function(item: string, position: number){
        return addressArray.indexOf(item)== position; 
    });
    console.log('The following are the unique IP addresses in the log :');
    console.log(uniqueArray);
}

function postToGetRatio(filePath: string): void{
    let fileLines: string[] = fs.readFileSync(filePath, 'utf-8').toString().split('\n');
    let getCounter: number = 0;
    let postCounter: number = 0;
    for(let i: number = 0; i < fileLines.length; i++){
        if(fileLines[i].slice(-6) == 'POST /'){
            postCounter++;
        } else if(fileLines[i].slice(-5) == 'GET /'){
            getCounter++;
        };
    };
    console.log(`The GET / POST request ratio is 1 to ${(getCounter/postCounter).toFixed(2)}.`);
}


uniqueIpAddresses('10-log.txt');
postToGetRatio('10-log.txt');