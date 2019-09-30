// Aircrafts
// Create a class that represents an aircraft
// There are 2 types of aircrafts: F16 and F35
// Both aircrafts should keep track of their ammunition
// F16
// Max ammo: 8
// Base damage: 30
// F35
// Max ammo: 12
// Base damage: 50
// All aircrafts should be created with an empty ammo storage

export class Aircraft {
    private _maxAmmo: number;
    private _ammo: number;
    private _baseDamage: number;

    protected constructor (maxAmmo: number, baseDamage: number) {
        this._ammo = 0;
        this._baseDamage = baseDamage;
        this._maxAmmo = maxAmmo;
    };

    public fight (): number {
        return this._baseDamage * this._ammo;
    }

    public refill (ammoLoaded: number): number {
        if (ammoLoaded + this._ammo > this._maxAmmo){
            this._ammo = this._maxAmmo;
            return ammoLoaded - this._maxAmmo + this._ammo;
        } else if (ammoLoaded + this._ammo < this._maxAmmo) {
            this._ammo += ammoLoaded;
            return 0;
        };
    };

    public getType (): string {
        return '';
    }

    public getPriority (): boolean {
        return;
    }

    public getStatus (): void {
        console.log(`Type ${this.getType()}, Ammo: ${this._ammo}, Base Damage: ${this._baseDamage}, All Damage: ${this._baseDamage * this._ammo}.`);
    }
}


// Methods
// fight
// It should use all the ammo (set it to 0) and it should return the damage it deals
// The damage dealt is calculated by multiplying the base damage by the ammunition
// refill
// It should take a number as parameter and subtract as much ammo as possible
// It can't have more ammo than the number or the max ammo (can't get more ammo than what's coming from the parameter or the max ammo of the aircraft)
// It should return the remaining ammo
// Eg. Filling an empty F35 with 300 would completely fill the storage of the aircraft and would return the remaining 288
// getType
// It should return the type of the aircraft as a string
// getStatus
// It should return a string like: Type F35, Ammo: 10, Base Damage: 50, All Damage: 500
// isPriority
// It should return if the aircraft is priority in the ammo fill queue. It's true for F35 and false for F16

// Aircrafts:
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F35, Ammo: 12, Base Damage: 50, All Damage: 600
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240
// Type F16, Ammo: 8, Base Damage: 30, All Damage: 240