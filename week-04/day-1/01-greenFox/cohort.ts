'use strict'

// Cohort
// Create a Cohort class that has the following

// fields:
// name: the name of the cohort
// students: a list of Students
// mentors: a list of Mentors
// methods:
// addStudent(Student): adds the given Student to students list
// addMentor(Mentor): adds the given Mentor to mentors list
// info(): prints out 'The name cohort has students.size students and mentors.size mentors.'
// The Cohort class has the following constructors:

// Cohort(name): beside the given parameter, it sets students and mentors as empty lists

import { Student } from './student';
import { Mentor } from './mentor';

export class Cohort {
    private _name: string;
    private _studentList: Student [];
    private _mentorList: Mentor [];

    public addStudent (student: Student): void {
        this._studentList.push(student);
    }

    public addMentor (mentor: Mentor): void {
        this._mentorList.push(mentor);
    }

    public info (): void {
        console.log(`The cohort has ${this._studentList.length} students and ${this._mentorList.length} mentors.`);
    }

    public constructor (name: string) {
        this._name = name;
        this._studentList = [];
        this._mentorList = [];
    }
}

