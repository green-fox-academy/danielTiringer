// Create a method that decrypts reversed-lines.txt

const fs = require('fs');

function reverseLines (filePath: string): void {
    let fileLines: string[] = fs.readFileSync(filePath, 'utf-8').toString().split('\n');
    let decryptedMessage: string[] = [];
    for (let i: number = 0; i < fileLines.length; i++){
        let line: string[] = fileLines[i].split('  ');
        for (let j: number = 0; j < line.length; j++){
            let word: string = line[j].split('').reverse().join('');
            decryptedMessage.push(word);
        }
    }
    console.log(decryptedMessage.join('\n'));
};

reverseLines('08-reversed-lines.txt');