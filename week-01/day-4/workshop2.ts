'use strict';

// Define basic info

// Define several things as a variable, then print their values
// Your name as a string
// Your age as a number
// Your height in meters as a number
// Whether you are married or not as a boolean

let myName: String = 'Daniel';
let myAge: number = 33;
let myHeight: number = 1.8;
let amIMarried: boolean = false;

console.log(myName);
console.log(myAge);
console.log(myHeight);
console.log(amIMarried);

// Variable mutation

let a: number = 3;
// make it bigger by 10
a = a + 10;
console.log(a);

let b: number = 100;
// make it smaller by 7
b = b - 7;
console.log(b);

let c: number = 44;
// double c's value
c = c * 2;
console.log(c);

let d: number = 125;
// divide d's value by 5
d = d / 5;
console.log(d);

let e: number = 8;
// what's the cube of e's value?
e = e ** 3;
console.log(e);

let f1: number = 123;
let f2: number = 345;
// tell if f1 is bigger than f2 (as a boolean)
if(f1 > f2){
    let check: boolean = true;
    console.log(check);
} else {
    let check: boolean = false;
    console.log(check);
};

let g1: number = 350;
let g2: number = 200;
// tell if the double of g2 is bigger than g1 (as a boolean)
if(g2 * 2 > g1){
    let check2: boolean = true;
    console.log(check2)
} else {
    let check2: boolean = false;
    console.log(check2) 
};

let h: number = 1357988018575474;
// tell if 11 is a divisor of h (as a boolean)
if(h%11==0){
    let check3: boolean = true;
    console.log(check3);
} else {
    let check3: boolean = false;
    console.log(check3);
};

let i1: number = 10;
let i2: number = 3;
// tell if i1 is higher than i2 squared and smaller than i2 cubed (as a boolean)
if(i1 > i2 ** 2 && i1 < i2 ** 3){
    let check4: boolean = true;
    console.log(check4);
} else {
    let check4: boolean = false;
    console.log(check4);
};

let j: number = 1521;
// tell if j is divisible by 3 or 5 (as a boolean)
if(j % 3 == 0 || j % 5 == 0){
    let check5: boolean = true;
    console.log(check5);
} else {
    let check5: boolean = false;
    console.log(check5);
};