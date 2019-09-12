'use strict';

/* Hello World */

console.log('Hello World!');

/* Hello Me */

console.log('Hello, Daniel, the most promising programmer in the world!');

/* Humpty-dumpty */

console.log('Humpty Dumpty sat on a wall,');
console.log('Humpty Dumpty had a great fall.');
console.log('All the king\'s horses and all the king\'s men');
console.log('Couldn\'t put Humpty together again.');

/* Greet others */

console.log('Hello, Gabor!');
console.log('Hello, Misi!');
console.log('Hello, Kriszti!');

// Introduce yourself

console.log('Daniel');
console.log('33');
console.log('1.80');

// Two numbers

const number1: number = 22;
const number2: number = 13;

console.log(number1+number2);
console.log(number1-number2);
console.log(number1*number2);
console.log(number1/number2);
console.log(number1%number2);

// Coding hours

const dailyCodingTime: number = 6;
const semesterLength = 17;
const workDaysPerWeek = 5;

console.log(dailyCodingTime*workDaysPerWeek*semesterLength);

const weeklyWorkHours: number = 52;

console.log(dailyCodingTime*workDaysPerWeek/weeklyWorkHours*100)

// Favorite number

let favoriteNumber: number = 8;

console.log(`My favorite number is: ${favoriteNumber}.`);

// Swap

let a: number = 123;
let b: number = 526;

let temp: number = a;

a = b;

b = temp;

console.log(a);
console.log(b);

/* BMI

According to cdc.gov (https://www.cdc.gov/nccdphp/dnpao/growthcharts/training/bmiage/page5_1.html), the calculation goes as follows:
Formula: weight (kg) / [height (m)]2

*/

let massInKg: number = 81.2;
let heightInM: number = 1.78;

let BMI: number = (massInKg / heightInM**2);

console.log(BMI);


// Define basic info

// Define several things as a variable, then print their values
// Your name as a string
// Your age as a number
// Your height in meters as a number
// Whether you are married or not as a boolean

let myName: String = 'Daniel';
let myAge: number = '33';
let myHeight: number = 1.8;
let amIMarried: boolean = false;

