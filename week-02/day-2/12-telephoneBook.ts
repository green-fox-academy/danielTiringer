'use strict'

// We are going to represent our contacts in a map where the keys are going to be strings and the values are going to be strings as well.

// Create a map with the following key-value pairs.

// Name (key)	Phone number (value)
// William A. Lathan	405-709-1865
// John K. Miller	402-247-8568
// Hortensia E. Foster	606-481-6467
// Amanda D. Newland	319-243-5613
// Brooke P. Askew	307-687-2982

let phoneBook = {
    "William A. Lathan": "405-709-1865",
    "John K. Miller": "402-247-8568",
    "Hortensia E. Foster": "606-481-6467",
    "Amanda D. Newland": "319-243-5613",
    "Brooke P. Askew": "307-687-2982",
};


// Create an application which solves the following problems.

// What is John K. Miller's phone number?
// Whose phone number is 307-687-2982?
// Do we know Chris E. Myers' phone number?

let findName: string = "";
let names: string[] = Object.keys(phoneBook);
for (let i = 0; i < names.length; i++){
    if(phoneBook[names[i]] == "307-687-2982"){
        findName = names[i];
    }
};


console.log('The phone number of John K. Miller is ' + phoneBook["John K. Miller"]);

console.log('The number 307-687-2982 belongs to ' + findName);

console.log('The phone number of Chris E. Myers is ' + phoneBook.hasOwnProperty["Chris E. Myers"]);