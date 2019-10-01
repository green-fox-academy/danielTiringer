'use strict'

import {Domino} from "./domino";

function initializeDominoes(): Domino[] {
    let dominoes = [];
    dominoes.push(new Domino(5, 2));
    dominoes.push(new Domino(4, 6));
    dominoes.push(new Domino(1, 5));
    dominoes.push(new Domino(6, 7));
    dominoes.push(new Domino(2 ,4));
    dominoes.push(new Domino(7, 1));
    return dominoes;
}


let dominoes = initializeDominoes();
/** You have the list of Dominoes */
/** Order them into one snake where the adjacent dominoes have the same numbers on their adjacent sides */
/** eg: [2, 4], [4, 3], [3, 5] ... */

// print(dominoes);

dominoes.map(element => element.printAllFields());

let orderedDominoes: number [][] = [];
orderedDominoes.push(dominoes[0].values);
dominoes.shift();

for (let i: number = 0; i < 6; i++){
    for(let j: number = 0; j < dominoes.length; j++){
        if(orderedDominoes[i][1] == dominoes[j].values[0]){
            orderedDominoes.push(dominoes[j].values);
            dominoes.splice(j, 1);
        }
    }
}
console.log(orderedDominoes);