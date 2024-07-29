"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bibliotheque = void 0;
const Reservation_1 = require("../classes/Reservation");
class Bibliotheque {
    constructor() {
        this.planets = [];
        this.vaisseaux = [];
        this.reservations = [];
    }
    // Ajouter une planète à la bibliothèque
    addPlanet(planet) {
        this.planets.push(planet);
    }
    // Ajouter un vaisseau à la bibliothèque
    addVaisseau(vaisseau) {
        this.vaisseaux.push(vaisseau);
    }
    // Réserver un voyage
    bookTrip(user, vaisseau, destination, dateStart) {
        if (!vaisseau.isAvailable()) {
            return 'Spacecraft not available !';
        }
        const reservation = new Reservation_1.Reservation(user, vaisseau, destination, dateStart);
        this.reservations.push(reservation);
        return reservation;
    }
    // Annuler une réservation
    cancelReservation(reservationID) {
        const reservationIndex = this.reservations.findIndex(res => res.id === reservationID);
        if (reservationIndex === -1) {
            return `Reservation not found`;
        }
        this.reservations[reservationIndex].cancel();
        this.reservations.splice(reservationIndex, 1);
        return `Reservation cancelled`;
    }
    // Lister les planètes
    listerPlanetes() {
        return this.planets;
    }
    // Lister les vaisseaux
    listerVaisseaux() {
        return this.vaisseaux;
    }
    // Lister les réservations
    listerReservations() {
        return this.reservations;
    }
}
exports.Bibliotheque = Bibliotheque;
