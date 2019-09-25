// Create a Counter class
// which has an integer property
// when creating it should have a default value 0 or we can specify it when creating
// we can add(number) to increase the counter's value by a whole number
// or we can add() without parameters just increasing the counter's value by one
// and we can get() the current value as string
// also we can reset() the value to the initial value

export class Counter {
    private _value: number;
    private _initialValue: number;
    
    constructor (value?: number) {
        if (value) {
            this._value = value;
            this._initialValue = value;
        } else {
            this._value = 0;
            this._initialValue = 0;
        }
    }

    public addNumber(number): void {
        this._value += number;
    }

    public add(): void {
        this._value += 1;
    }

    public reset(): void {
        this._value = this._initialValue;
    }
}