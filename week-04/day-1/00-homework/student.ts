// Student
// Create a Student class that has the same fields and methods as the Person class, and has the following additional

// fields:
// previousOrganization: the name of the student’s previous company / school
// skippedDays: the number of days skipped from the course
// methods:
// getGoal(): prints out "Be a junior software developer."
// introduce(): "Hi, I'm name, a age year old gender from previousOrganization who skipped skippedDays days from the course already."
// skipDays(numberOfDays): increases skippedDays by numberOfDays
// The Student class has the following constructors:

// Student(name, age, gender, previousOrganization): beside the given parameters, it sets skippedDays to 0
// Student(): sets name to Jane Doe, age to 30, gender to female, previousOrganization to The School of Life, skippedDays to 0

import { Person } from './person';

export class Student {
    private _name: string;
    private _age: number;
    private _gender: string;
    private _previousOrganization: string;
    private _skippedDays: number;
    
    public introduce(): void {
        console.log(`Hi, I'm ${this._name}, a ${this._age} old ${this._gender} who skipped ${this._skippedDays} days from this course already.`);
    }
    public getGoal(): void {
        console.log('Be a junior software developer.');
    }

    public skipDays(numberOfDays: number): void {
        this._skippedDays += numberOfDays;
    }

    public constructor (name: string, age: number, gender: string, previousOrganization: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
        this._previousOrganization = previousOrganization;
        this._skippedDays = 0;
    }
}

let janeDoe = new Student ('Jane Doe', 30, 'female', 'The School of Life');
janeDoe.introduce();
janeDoe.getGoal();