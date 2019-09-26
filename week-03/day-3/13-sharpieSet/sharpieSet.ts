// Reuse your Sharpie class
// Create SharpieSet class
// it contains a list of Sharpie
// countUsable() -> sharpie is usable if it has ink in it
// removeTrash() -> removes all unusable sharpies

import { Sharpie } from './../05-sharpie/sharpie';


class SharpieSet {
    private _list: Sharpie [];

    public constructor (listOfSharpies?: Sharpie []) {
        if(listOfSharpies){
            this._list = listOfSharpies;
        } else {
            this._list = [];
        }
    }

    public addSharpie (sharpie: Sharpie): void {
        this._list.push(sharpie);
    }
    
    public countUsable (): void {
        let usableSharpies: number = 0;
        for (let i: number = 0; i < this._list.length; i++){
            if(this._list[i].inkAmount > 0){
                usableSharpies++;
            };
        }
        console.log(`The sharpie set contains ${usableSharpies} usable sharpies.`);
    }
    
        public removeTrash (): void {
            for (let i: number = 0; i < this._list.length; i++){
                if(this._list[i].inkAmount == 0){
                    this._list.splice(i, 1);
                };
            };
            console.log('The empty sharpies have been removed.')
        }
}

// Creating some sharpies to verify the functions with
let redSharpie = new Sharpie ('red', 5);
let blueSharpie = new Sharpie ('blue', 6);
let magentaSharpie = new Sharpie ('magenta', 8);

// Depleting one for the countUseable and removeTrash functions
while (magentaSharpie.inkAmount > 0){
    magentaSharpie.use();
}
// console.log(magentaSharpie.inkAmount);

let danielsPenDrawer = new SharpieSet();

danielsPenDrawer.addSharpie(redSharpie);
danielsPenDrawer.addSharpie(blueSharpie);
danielsPenDrawer.addSharpie(magentaSharpie);

danielsPenDrawer.countUsable();

danielsPenDrawer.removeTrash();

console.log(danielsPenDrawer);