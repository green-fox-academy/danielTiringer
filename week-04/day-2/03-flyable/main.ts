'use strict'

import { Helicopter } from './helicopter';
import { Flyable } from './flyable'
import { Bird } from './../02-animalsInTheZoo/bird'

let chopper = new Helicopter ('chopper', 'kerosene', 'rotors');

chopper.takeOff();
chopper.fly();
chopper.land();

// Flyable
// Create a Flyable interface
// it should have land, fly and takeOff methods (TakeOff in C#)
// Create an abstract Vehicle class
// it should have at least 3 fields
// Extend Helicopter class from Vehicle
// implement your Flyable interface
// Extend Bird from your abstract Animal class (zoo exercise)
// implement your Flyable interface
