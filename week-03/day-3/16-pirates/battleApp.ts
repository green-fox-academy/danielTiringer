import { Pirate } from './pirate';
import { Ship } from './ship';

// BattleApp
// Create a BattleApp class, where you can fight with ships
// Create 2 ships, fill them with pirates
// Have a battle!

let rumVessel = new Ship;

rumVessel.fillShip();

rumVessel.changeCaptain('rum');
rumVessel.changeCaptain('rum');
rumVessel.changeCaptain('parrot');
rumVessel.changeCaptain('rum');

// rumVessel.headCount();

let blackPearl = new Ship;

blackPearl.fillShip();

// blackPearl.headCount();

rumVessel.battle(blackPearl);