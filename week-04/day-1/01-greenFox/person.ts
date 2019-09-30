// Person
// Create a Person class with the following fields:

// name: the name of the person
// age: the age of the person (integer number)
// gender: the gender of the person (male / female)
// And the following methods:

// introduce(): prints out 'Hi, I'm name, a age year old gender.'
// getGoal(): prints out 'My goal is: Live for the moment!'
// And the following constructors:

// Person(name, age, gender)
// Person(): sets name to Jane Doe, age to 30, gender to female

export class Person {
    private _name: string;
    private _age: number;
    private _gender: string;

    public introduce(): void {
        console.log(`Hi, I'm ${this._name}, a ${this._age} old ${this._gender}${this.specialIntroduction()}.`);
    }

    protected specialIntroduction(): string {
        return '';
    }

    public getGoal(): void {
        console.log(`My goal is: ${this.specialGoal()}!`);
    }

    protected specialGoal(): string {
        return 'Live for the moment'
    }

    public constructor (name: string, age: number, gender: string) {
        this._name = name;
        this._age = age;
        this._gender = gender;
    }
}

// let janeDoe = new Person ('Jane Doe', 30, 'female');