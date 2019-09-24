// Write a function that takes a filename as a parameter
// The file contains an ended Tic-Tac-Toe match
// We have provided you some example files (draw.txt, win-x.txt, win-o.txt)
// Return "X", "O" or "Draw" based on the input file

const fs = require('fs');

function ticTacResult (filePath) {
    let fileLines: string[] = fs.readFileSync(filePath, 'utf-8').toString().split('\n');
    let gameFields: string[] = [];
    for(let i: number = 0; i < fileLines.length; i++){
        for(let j: number = 0; j < fileLines[i].length; j++){
            gameFields.push(fileLines[i].charAt(j));
        }
    };
    for(let i: number = 0; i < gameFields.length; i++){
        // This part of the IF statements find 3 in a column and returns it as a winner
        if(gameFields[i] == gameFields[i+3] && gameFields[i] == gameFields[i+6]){
            return gameFields[i];
        // This part of the IF statements find a forward slash pattern and returns it as a winner
        } else if(gameFields[2] == gameFields[4] && gameFields[2] == gameFields[6]) {
            return gameFields[2];
        // This part of the IF statements find a backslash pattern and returns it as a winner
        } else if(gameFields[0] == gameFields[4] && gameFields[0] == gameFields[8]) {
            return gameFields[0];
        // This part of the IF statements find 3 in a row and returns it as a winner
        } else if ((i == 0 || i == 3 || i == 6) && (gameFields[i] == gameFields[i+1]) && (gameFields[i] == gameFields[i+2])){
            return gameFields[i];
        } else {
            return 'Draw'
        }
    }
}


console.log(ticTacResult('11-win-o.txt'))
// Should print "O"

console.log(ticTacResult('11-win-x.txt'))
// Should print "X"

console.log(ticTacResult('11-draw.txt'))
// Should print "Draw"