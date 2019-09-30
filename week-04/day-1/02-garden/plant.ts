export class Plant {
    protected _color: string;
    protected _waterAmount: number;
    protected _thirstLevel: number;
    protected _waterAbsorption: number;

    protected constructor (color: string, waterAbsorption: number, thirstLevel: number) {
        this._color = color;
        this._waterAmount = 0;
        this._waterAbsorption = waterAbsorption;
        this._thirstLevel = thirstLevel;
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

    public getType (): string {
        return '';
    }

    public getInfo (): void {
        if (this._waterAmount < this._thirstLevel) {
            console.log(`The ${this._color} ${this.getType()} needs water`)
        } else if (this._waterAmount >= this._thirstLevel) {
            console.log(`The ${this._color} ${this.getType()} doesn't need water`)
        }
    }
}