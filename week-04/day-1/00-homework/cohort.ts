'use strict'

import { Person } from './person';
import { Student } from './student';
import { Mentor } from './mentor';
import { Sponsor } from './sponsor';


// Test input
let people = [];
let mark = new Person('Mark', 46, 'male');
people.push(mark);
// let jane = new Person();
// people.push(jane);
let john = new Student('John Doe', 20, 'male', 'BME');
people.push(john);
// let student = new Student();
// people.push(student);
let gandhi = new Mentor('Gandhi', 148, 'male', 'senior');
people.push(gandhi);
// let mentor = new Mentor();
// people.push(mentor);
// let sponsor = new Sponsor();
let elon = new Sponsor('Elon Musk', 46, 'male', 'SpaceX');
people.push(elon);

john.skipDays(3);

for (let i = 0; i < 6; i++) {
    elon.hire();
}

for (let i = 0; i < 4; i++) {
    elon.hire();
}

people.forEach((person) => {
    person.introduce();
    person.getGoal();
});
// Test output
// Hi, I'm Mark, a 46 year old male.
// My goal is: Live for the moment.
// Hi, I'm Jane Doe, a 30 year old female.
// My goal is: Live for the moment.
// Hi, I'm John Doe, a 20 year old male from BME who skipped 0 days from the course already.
// My goal is: Be a junior software developer.
// Hi, I'm Jane Doe, a 30 year old female from The School of Life who skipped 3 days from the course already.
// My goal is: Be a junior software developer.
// Hi, I'm Gandhi, a 148 year old male senior mentor.
// My goal is: Educate brilliant junior software developers.
// Hi, I'm Jane Doe, a 30 year old female intermediate mentor.
// My goal is: Educate brilliant junior software developers.
// Hi, I'm Jane Doe, a 30 year old female who represents Google and hired 4 students so far.
// My goal is: Hire brilliant junior software developers.
// Hi, I'm Elon Musk, a 46 year old male who represents SpaceX and hired 6 students so far.
// My goal is: Hire brilliant junior software developers.