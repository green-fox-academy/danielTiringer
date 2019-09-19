// What is Armstrong number?
// An Armstrong number is an n-digit number that is equal to the sum of the nth powers of its digits.

// Let's demonstrate this for a 4-digit number: 1634 is a 4-digit number, raise each digit to the fourth power, and add: 1^4 + 6^4 + 3^4 + 4^4 = 1634, so it is an Armstrong number.
// For a 3-digit number: 153 is a 3-digit number, raise each digit to the third power, and add: 1^3 + 5^3 + 3^3 = 153, so it is an Armstrong number.
// Exercise
// Write a simple program to check if a given number is an armstrong number. The program should ask for a number. E.g. if we type 371, the program should print out: The 371 is an Armstrong number.

let sample: number = 1634;

function armstrongCheck (input){
    let powered: number = 0;
    input = input.toString(10);
    let temp: string;
    for (let i = 0; i < input.length; i++){
        temp = input.charAt(i);
        powered += Number(temp)**4;
    }
    if(powered == input){
        console.log(`The entered number, ${input} is an Armstrong number!`);
    } else {
        console.log(`${input} is not an Armstrong number.`);
    }
}

armstrongCheck(sample);