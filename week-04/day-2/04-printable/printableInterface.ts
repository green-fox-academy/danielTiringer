'use strict'

// Printable interface
// Create a new interface called Printable
// it should have one method definition called printAllFields
// implement this interface on the Domino, Todo
// for (let domino of dominoes) {
//   domino.printAllFields();
// }

// for (let todo of todos) {
//   todo.printAllFields());
// }

export interface Printable {
    printAllFields(): void;
}