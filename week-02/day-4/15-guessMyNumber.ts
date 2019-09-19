// Write a program where the program chooses a number between 1 and 100. The player is then asked to enter a guess. If the player guesses wrong, then the program gives feedback and ask to enter an other guess until the guess is correct.

// Make the range customizable (ask for it before starting the guessing).
// You can add lives. (optional)
// Example
// I've the number between 1-100. You have 5 lives.

// > 20
// Too high. You have 4 lives left.

// > 10
// Too low. You have 3 lives left.

// > 15
// Congratulations. You won!

let randomNumber: number = Math.floor(1+Math.random()*100);

var readline = require('readline');


let userInput = prompt("Guess the number I though of! Please enter a number between 1 and 100:");



// if(userInput == randomNumber){
//     console.log('Congratulations, you guessed right!')
// } else if (userInput != randomNumber){
//     console.log('')
// }