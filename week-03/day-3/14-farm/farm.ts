// Reuse your Animal class
// Create a Farm class
// it has list of Animals
// it has slots which defines the number of free places for animals
// breed() -> creates a new animal if there's place for it
// slaughter() -> removes the least hungry animal

import { Animal } from './../04-animals/animals';

let listOfAnimals: Animal [] = [];

listOfAnimals.push(new Animal);

class Farm {
    private _places: number;
    private _list: Animal [];

    public constructor (listOfAnimals: Animal []) {
        this._list = listOfAnimals;
        this._places = 10;
    }

    public breed (): void {
        if(this._places - listOfAnimals.length > 0){
            this._list.push(new Animal);
        }
    }

    public slaughter (): void {
        if(listOfAnimals.length > 0){
            let lowestHunger: number;
            let fullestAnimal: number;
            for(let i: number = 0; i < listOfAnimals.length; i++){
                if (i = 0){
                    lowestHunger = listOfAnimals[i].hunger;
                    fullestAnimal = i;
                    console.log(lowestHunger);
                    console.log(fullestAnimal);
                }
                if (listOfAnimals[i].hunger < lowestHunger){
                    lowestHunger = listOfAnimals[i].hunger;
                    fullestAnimal = i;
                }
            }
            listOfAnimals.splice(fullestAnimal, 1);
        }
    }
}

let sunshineMeadows = new Farm (listOfAnimals);