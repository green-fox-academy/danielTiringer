// Create Student and Teacher classes
// Student
// learn() -> prints the student is learning something new
// question(teacher) -> calls the teachers answer method
// Teacher
// teach(student) -> calls the students learn method
// answer() -> prints the teacher is answering a question
// Instantiate a Student and Teacher object
// Call the student's question() method and the teacher's teach() method

import { Student } from './student';

export class Teacher {
    public teach(student : Student): void {
        student.learn();
    }

    public answer(): void {
        console.log('The teacher is answering a question.');
    }
}

let pupil = new Student;
let mentor = new Teacher;
pupil.question(mentor);
mentor.teach(pupil);