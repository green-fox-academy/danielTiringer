// The Garden Application
// The task is to create a garden application, so in your main method you should create a garden with flowers and trees. The program should demonstrate an example garden with two flowers (yellow and blue) and two trees (purple and orange). In the example after creating them you should show the user, how the garden looks like. After that the program should water the garden twice, first with the amount of 40 then with 70. And after every watering the user should see the state of the garden as you can see in the output.

// The output should look like this:

// The yellow Flower needs water
// The blue Flower needs water
// The purple Tree needs water
// The orange Tree needs water

// Watering with 40
// The yellow Flower doesnt need water
// The blue Flower doesnt need water
// The purple Tree needs water
// The orange Tree needs water

// Watering with 70
// The yellow Flower doesnt need water
// The blue Flower doesnt need water
// The purple Tree doesnt need water
// The orange Tree doesnt need water
// Information on the elements

// The Garden
// is able to hold unlimited amount of flowers or trees
// when watering it should only water those what needs water with equally divided amount amongst them
// eg. watering with 40 and 4 of them need water then each gets watered with 10

import { Plant } from './plant';
import { Tree } from './tree';
import { Flower } from './flower';

class Garden {
    private _plants: Plant [];

    public constructor() {
        this._plants = [];
    }

    public addPlant (plant: Plant): void {
        this._plants.push(plant);
    }

    public printInfo () {
        this._plants.forEach(element => element.getInfo());
    }

    public waterTheGarden (amount: number): void {
        let thirstyPlants: Plant [] = [];
        this._plants.forEach(element => {
            if(element.waterAmount() < element.thirstLevel()){
                thirstyPlants.push(element);
            }
        })
        thirstyPlants.forEach(element => element.watering(amount / thirstyPlants.length))
        this.printInfo()
    }
}



let purpleTree = new Tree ('purple');
let orangeTree = new Tree ('orange');
let yellowFlower = new Flower ('yellow');
let blueFlower = new Flower ('blue');

let eden = new Garden;
eden.addPlant(purpleTree);
eden.addPlant(orangeTree);
eden.addPlant(yellowFlower);
eden.addPlant(blueFlower);

eden.waterTheGarden(40);
eden.waterTheGarden(70);