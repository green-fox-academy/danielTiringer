class Domino {
    values: number[];
    constructor(valueA: number, valueB: number) {
        this.values = [valueA, valueB];
    }
    public get value() {
        return this.values;
    }
    public get valueB() {
        return this.valueB;
    }
}

export {Domino};