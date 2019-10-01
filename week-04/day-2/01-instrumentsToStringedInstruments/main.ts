'use strict'

// Model stringed instruments

// Next, we add another abstract class, StringedInstrument which extends Instrument. It introduces numberOfStrings and sound() method what's implementation is yet unknown but with the help of the sound() the play() method is fully implementable

import { ElectricGuitar } from './stringedInstrument'
import { BassGuitar } from './stringedInstrument'
import { Violin } from './stringedInstrument'


// The Workshop should be invoked from another file like app.ts or main.ts
console.log('Test 1, create Electric Guitar, Bass Guitar and Violin with default strings.');
let guitar = new ElectricGuitar();
let bassGuitar = new BassGuitar();
let violin = new Violin();

console.log('Test 1 Play');
guitar.play();
bassGuitar.play();
violin.play();

console.log('Test 2, create Electric Guitar, Bass Guitar with 7 and 5 strings.');
let guitar2 = new ElectricGuitar(7);
let bassGuitar2 = new BassGuitar(5);

console.log('Test 2 Play');
guitar2.play();
bassGuitar2.play();
// We expect the following output:

// Test 1 Play
// Electric Guitar, a 6-stringed instrument that goes Twang
// Bass Guitar, a 4-stringed instrument that goes Duum-duum-duum
// Violin, a 4-stringed instrument that goes Screech
// Test 2, create Electric, Bass Guitar with 7 and 5 strings.
// Test 2 Play
// Electric Guitar, a 7-stringed instrument that goes Twangg
// Bass Guitar, a 5-stringed instrument that goes Duum-duum-duum