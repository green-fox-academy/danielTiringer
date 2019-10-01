'use strict'

// We are going to represent a Zoo. The animals are cuter than humans, so let's focus on them right now.

// So we need an abstract Animal class

export abstract class Animal {
    protected _name: string;
    protected _age: number;

    protected constructor(name: string) {
        this._name = name;
    }

    public getName(): string {
        return this._name;
    }

    public breed(): string {
        return '';
    }
}

// it has name, age field
// it has getName() and breed() methods
// Have we got all fields and methods we should? What about gender? Any other? Write down at least 3 fields and/or methods that should be included in Animal.

// Let's think about the kinds of animals Mammals, Reptiles, Birdss etc. We need to define specific fields and methods for each. For example every Bird breed() from an egg, doesn't matter if it is a penguin or parrot or ostrich. Write down at least 2 of field and/or method what is common in each kind.

// Most of the Reptiles breed() by laying eggs too, it is common with Birds.

// Create the project and the classes above.