// Create a method that decrypts duplicated-chars.txt


const fs = require('fs');

function decryptFile (filePath: string): void {
    let fileLines: string[] = fs.readFileSync(filePath, 'utf-8').toString().split('\n');
    let fileWords: string[] = [];
    for (let i: number = 0; i < fileLines.length; i++){
        let temporary: string[] = fileLines[i].split('  ');
        for (let j: number = 0; j < temporary.length; j++){
            fileWords.push(temporary[j]);
        }
        fileWords.push('\n');
        temporary = [];
    }
    let decodedMessage: string[] = [];
    fileWords.forEach(function (word: string): void {
        let storageString: string[] = word.split('');
        let decryptedWord: string = '';
        for(let i: number = 0; i < storageString.length; i++){
            if(i % 2 == 0){
                decryptedWord += storageString[i];
            }
        }
        decodedMessage.push(decryptedWord);
    })
    console.log(decodedMessage.join(' '));
};

decryptFile('07-duplicated-chars.txt');