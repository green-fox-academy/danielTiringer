// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful

const fs = require('fs');

function copyFile (pathFrom: string, pathTo: string) {
    let fileToCopy: string[] = fs.readFileSync(pathFrom, 'utf-8')
    fs.writeFileSync(pathTo, fileToCopy);
    console.log(true);
}

copyFile('05-multi-write.txt', '06-copy-file.txt');