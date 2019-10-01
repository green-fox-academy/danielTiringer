// Reservations
// Create a Reservation class by implementing all the features as required by the interface.
// The booked reservations should look like the output below.
// Please note that the reservation code should contain 8 characters randomly from 0-Z, all uppercase letters.
// Also, the DOW is randomly ordered to the bookings from an array.
// DOW stands for Day of the Week (MON, TUE, etc.)
// interface Reservationy {
//   getDowBooking(): string;
//   getCodeBooking(): string;
// }

let daysOfTheWeek: string [] = ['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'];

class Reservation {
    private _reservationNumber: number;
    private _dayOfTheWeek: string;
    
    constructor() {
        
    }
    
    public getDowBooking(): string {
        return daysOfTheWeek[Math.floor(Math.random()*7)];
    }
    public getCodeBooking(): string {
        return Math.random().toString(36).replace('0.', '').toUpperCase().slice(0,8);
    }
    
    public printReservationDetails(): void {
        console.log(`Booking# ${this.getCodeBooking()} for ${this.getDowBooking()}`)
    }
}

let randomReservation = new Reservation;

randomReservation.printReservationDetails();
randomReservation.printReservationDetails();
randomReservation.printReservationDetails();
randomReservation.printReservationDetails();
randomReservation.printReservationDetails();

// The output will be sort of like this:-
// Booking# 1WBA3OMU for THU
// Booking# 0V5OH7VS for WED
// Booking# CV6QOAJO for MON
// Booking# 03GHEJMV for SAT
// Booking# M5JFB32I for THU
// Booking# W30PF0E0 for SAT
// Booking# S0R70GMN for SAT
// Booking# 3E032B3C for WED
// Booking# OD27E36J for SAT
// Booking# 4MEU0657 for MON