"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Reservation = void 0;
class Reservation {
    constructor(user, vaisseau, destination, dateStart) {
        Reservation.compteur++;
        this._id = `RES-${Reservation.compteur}`;
        this._user = user;
        this._vaisseau = vaisseau;
        this._destination = destination;
        this._dateStart = dateStart;
        this._status = 'En attente';
    }
    afficherDetails() {
        return `Réservation ID: ${this._id}, Utilisateur: ${this._user}, Vaisseau: ${this._vaisseau.seeDetails()}, Destination: ${this._destination.seeDetails}, Date de départ: ${this._dateStart}, Statut: ${this._status}`;
    }
    approve() {
        this._status = 'Approuvée';
        this._vaisseau.book();
    }
    cancel() {
        this._status = 'Annulée';
        this._vaisseau.release();
    }
    // Getters
    get id() {
        return this._id;
    }
    get user() {
        return this._user;
    }
    get vaisseau() {
        return this._vaisseau;
    }
    get destination() {
        return this._destination;
    }
    get dateStart() {
        return this._dateStart;
    }
    get status() {
        return this._status;
    }
    // Setters
    set user(user) {
        this._user = user;
    }
    set vaisseur(vaisseau) {
        this._vaisseau = vaisseau;
    }
    set destination(destination) {
        this._destination = destination;
    }
    set dateStart(dateStart) {
        this._dateStart = dateStart;
    }
    set status(status) {
        this._status = status;
    }
}
exports.Reservation = Reservation;
Reservation.compteur = 0;
