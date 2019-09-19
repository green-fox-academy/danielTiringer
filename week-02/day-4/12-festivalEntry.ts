'use strict';

const watchlist: string[] = [];
let safeEntry: string[] = [];

let securityAlcoholLoot: number = 0;

type FestivalGoer = {
 name: string,
 alcohol: number,
 guns: number
};

const queue: FestivalGoer[] = [
  { name: 'Amanda', alcohol: 10, guns: 1 },
  { name: 'Mark', alcohol: 0, guns: 0 },
  { name: 'Dolores', alcohol: 0, guns: 1 },
  { name: 'Wade', alcohol: 1, guns: 1 },
  { name: 'Anna', alcohol: 10, guns: 0 },
  { name: 'Rob', alcohol: 2, guns: 0 },
  { name: 'Joerg', alcohol: 20, guns: 0 }
];

// Queue of festivalgoers at entry
// no. of alcohol units
// no. of guns

// Create a securityCheck function that takes the queue as a parameter and returns a list of festivalgoers who can enter the festival

// If guns are found, remove them and put them on the watchlist (only the names)
// If alcohol is found confiscate it (set it to zero and add it to securityAlcholLoot) and let them enter the festival

export = securityCheck;

function securityCheck  (array) {
    for (let i = 0; i < queue.length; i++){
        if(array[i].guns > 0){
            watchlist.push(array[i].name);
            array[i].guns = 0;
        } else if (array[i].guns == 0){
            safeEntry.push(array[i].name);
        };
        if(array[i].alcohol > 0){
            securityAlcoholLoot += array[i].alcohol;
            array[i].alcohol = 0;
        };
    };
    console.log(`The following can enter the festival: ${safeEntry.join(', ')}`)
    console.log(`The following has been added to the watchlist: ${watchlist.join(', ')}`)
    console.log(`Security collected ${securityAlcoholLoot} bottles of alcohol.`)
}

securityCheck(queue);


