// Create a method that decrypts reversed-order.txt

const fs = require('fs');

function reverseLines (filePath: string): void {
    let fileLines: string[] = fs.readFileSync(filePath, 'utf-8').toString().split('\n');
    console.log(fileLines.reverse().join('\n'));
};

reverseLines('09-reversed-order.txt');