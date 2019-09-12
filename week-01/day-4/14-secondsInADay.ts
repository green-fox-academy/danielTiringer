'use strict';

// Seconds in a day

let currentHours: number = 14;
let currentMinutes: number = 34;
let currentSeconds: number = 42;

// Write a program that prints the remaining seconds (as an integer) from a
// day if the current time is represented by these variables

let secondsInADay: number = 24 * 60 * 60;

let pastSeconds: number = currentSeconds + currentMinutes * 60 + currentHours * 60 * 60;

let remainingSeconds: number = secondsInADay - pastSeconds;
console.log(remainingSeconds);