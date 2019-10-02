// Cows and Bulls
// Create a class what is capable of playing exactly one game of Cows and Bulls (CAB). The player have to guess a 4 digit number. For every digit that the player guessed correctly in the correct place, they have a “cow”. For every digit the player guessed correctly in the wrong place is a “bull.” If the player types a number that does not exist, that quess will not have any result.

// Example: If the number to be found is "7624" and the player types "7296", the result is: "1 cow, 2 bull".

// The CAB object should have a random 4 digit number, which is the goal to guess.
// The CAB object should have a state where the game state is stored (playing, finished).
// The CAB object should have a counter where it counts the guesses.
// The CAB object should have a guess method, which returns a string of the guess result
// All methods, including constructor should be tested

'use strict'

export class CowsAndBulls {
    private _stateOfTheGame: string;
    private _guessCounter: number;
    private _numberToGuess: number[] = [];

    constructor(){
        this._guessCounter = 0;
        for (let i: number = 0; i < 4; i++) {
            this._numberToGuess.push(Math.floor(Math.random()*10));
        };
        this._stateOfTheGame = 'playing';
        // console.log(this._numberToGuess)
    }

    public stateOfTheGame(): string {
        return this._stateOfTheGame;
    }

    public getNumberToGuess(): number {
        let displayedNumber: number = 0;
        for(let i: number = 4; i >0; i--){
            displayedNumber += this._numberToGuess[4 - i] * 10 ** (i-1)
        }
        return displayedNumber;
    }

    public getGuessCount(): number {
        return this._guessCounter;
    }

    private turnGuessedNumberIntoArray(inputNumber: number): number[] {
        let numberToArray: number[] = [];
        for (let i: number = 0; i < 4; i++){
            let temp = inputNumber.toString().split('').slice(i, i + 1);
            numberToArray.push(parseInt(temp[0]));
        }
        // console.log(numberToArray)
        return numberToArray;
    }

    private printResult(cow: number, bull: number): string {
        if (this._stateOfTheGame == 'finished'){
            // console.log(`4 cows, you won the game!`)
            return '4 cows, you won the game!'
        } else {
            // console.log(`${cow} cow, ${bull} bull.`)
            return `${cow} cow, ${bull} bull.`
        }
    }

    public guess(guessedNumber: number): string {
        let guessedNumberArray: number[] = this.turnGuessedNumberIntoArray(guessedNumber);

        let cow: number = 0;
        let bull: number = 0;
        for (let j: number = 0; j < 4; j++) {
            for (let k: number = 0; k < 4; k++){
                if(this._numberToGuess[j] == guessedNumberArray[k] && j == k){
                    cow ++;
                } else if (this._numberToGuess[j] == guessedNumberArray[k] && j != k) {
                    bull++;
                } 
            }
        }
        if (cow == 4){
            this._stateOfTheGame = 'finished'
        }
        this._guessCounter++
        return this.printResult(cow, bull);
    }
}

// let newGame = new CowsAndBulls();
// newGame.guess(1234);