'use strict'

export class ListOfNumbers {
    private _listOfNumbers: number [];

    constructor (array?: number []){
        this._listOfNumbers = array;
    }

    sumAListOfNumbers(): number {
        if(this._listOfNumbers === undefined) {
            return 0;
        } else {
            return this._listOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue);
        }
    }
}