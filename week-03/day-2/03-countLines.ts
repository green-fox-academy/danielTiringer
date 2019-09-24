// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

const fs = require('fs');

function readFile(filename: string): void {
    try{
        let fileContent = fs.readFileSync(filename, 'utf-8').toString().split('\n')
        console.log(fileContent.length);
    }
    catch(error){
        console.log(0);
    }
}

readFile('catch.txt');