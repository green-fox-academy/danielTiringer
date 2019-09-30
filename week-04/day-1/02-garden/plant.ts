export class Plant {
    protected _class: string;
    protected _color: string;
    protected _waterAmount: number;
    protected _thirstLevel: number;
    protected _waterAbsorption: number;

    protected constructor (color: string) {
        this._color = color;
    }

    public waterAmount (): number {
        return this._waterAmount;
    }

    public thirstLevel () : number {
        return this._thirstLevel;
    }

    public watering (water: number): void {
        this._waterAmount += water * this._waterAbsorption;
    }

    public getInfo (): void {
        if (this._waterAmount < this._thirstLevel) {
            console.log(`The ${this._color} ${this._class} needs water`)
        } else if (this._waterAmount >= this._thirstLevel) {
            console.log(`The ${this._color} ${this._class} doesn't need water`)
        }
    }
}