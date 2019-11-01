'use strict';

const fs = require('fs');

let readcsv = (filePath, callback) => {
    try {
        if (!fs.existsSync(filePath)) {
            console.log('The file does not exist.');
            return undefined;
        }
        else {
            return callback(fs.readFileSync(filePath, 'utf-8'));
        }
    }
    catch (error) {
        console.log('The file is not accessible.');
        return undefined;
    }
}

module.exports = readcsv;
