'use strict';

let loadShip = (loadedCaliber, amount, ship) => {
		console.log(loadedCaliber);
		console.log(amount);
		console.log(ship);
		console.log(ship.loadedCaliber);
	if (amount > 0) {
		ship.loadedCaliber = ship.loadedCaliber + amount;
		if (ship.caliber25 + ship.caliber30 + ship.caliber50 == 0) {
			console.log('empty');
			ship.shipstatus = 'empty';
			ship.ready = false;
		} else if (ship.caliber25 + ship.caliber30 + ship.caliber50 == 12500) {
			console.log('full');
			ship.shipstatus = 'full';
			ship.ready = true;
		} else if (ship.caliber25 + ship.caliber30 + ship.caliber50 > 12500) {
			console.log('overloaded');
			ship.shipstatus = 'overloaded';
			ship.ready = false;
		} else if (ship.caliber25 + ship.caliber30 + ship.caliber50 > 0 && ship.caliber25 + ship.caliber30 + ship.caliber50 < 12500) {
			console.log('percentage');
			let loadLevel = (ship.caliber25 + ship.caliber30 + ship.caliber50) / 12500 * 100;
			ship.shipstatus = `${loadLevel}%`;
			ship.ready = false;
		}
	}
	return ship;
}

module.exports = loadShip;
