'use strict'

import * as test from 'tape';
import { CowsAndBulls } from './cowsAndBulls';

test ('Testing the functions of the cows and bulls game!', t => {
    let newGame = new CowsAndBulls();

    // Testing start conditions
    t.equal(newGame.getGuessCount(), 0, 'The game starts from a guess count of 0');
    t.equal(newGame.stateOfTheGame(), 'playing', 'The game is set to a playing status upon creation.')

    // Testing guesses
    newGame.guess(1234);
    t.equal(newGame.getGuessCount(), 1, 'The guess count increments with one each time.');

    // Testing the guess format
    t.equal(newGame.guess(1234).slice(2,6) + newGame.guess(1234).slice(8,14), 'cow, bull.')

    // Testing the correct guess - it verifies that it counts the cows properly. Also verifies that it guesses a number (part of the constructor)
    let goodGuess = newGame.getNumberToGuess()
    t.equal(newGame.guess(goodGuess), '4 cows, you won the game!', 'If the correct number is guessed, the game is finished')
    
    t.end()
})