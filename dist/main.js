"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Bibliotheque_1 = require("./services/Bibliotheque");
const Planete_1 = require("./classes/Planete");
const Vaisseau_1 = require("./classes/Vaisseau");
const bibliotheque = new Bibliotheque_1.Bibliotheque();
const terre = new Planete_1.Planete('Terre', 'Rocheuse', 0);
const mars = new Planete_1.Planete('Mars', 'Rocheuse', 54.6);
const jupiter = new Planete_1.Planete('Jupiter', 'Gazeuse', 588);
bibliotheque.addPlanet(terre);
bibliotheque.addPlanet(mars);
bibliotheque.addPlanet(jupiter);
const vaisseau1 = new Vaisseau_1.Vaisseau('Apollo', 5, 10000);
const vaisseau2 = new Vaisseau_1.Vaisseau('Voyager', 10, 50000);
bibliotheque.addVaisseau(vaisseau1);
bibliotheque.addVaisseau(vaisseau2);
// Effectuer une réservation
const dateStart = new Date('2025-12-01');
const reservation = bibliotheque.bookTrip('Corentin', vaisseau1, mars, dateStart);
console.log(reservation);
// Annuler une réservation
if (typeof reservation !== 'string') {
    console.log(bibliotheque.cancelReservation(reservation.id));
}
// Lister toutes les réservations
console.log(bibliotheque.listerReservations());
