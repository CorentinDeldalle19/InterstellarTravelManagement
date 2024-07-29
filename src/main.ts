import { Bibliotheque } from './services/Bibliotheque';
import { Planete } from './classes/Planete';
import { Vaisseau } from './classes/Vaisseau';
import { Reservation } from './classes/Reservation';

const bibliotheque = new Bibliotheque()

const terre = new Planete('Terre', 'Rocheuse', 0);
const mars = new Planete('Mars', 'Rocheuse', 54.6);
const jupiter = new Planete('Jupiter', 'Gazeuse', 588);
bibliotheque.addPlanet(terre);
bibliotheque.addPlanet(mars);
bibliotheque.addPlanet(jupiter);

const vaisseau1 = new Vaisseau('Apollo', 5, 10000);
const vaisseau2 = new Vaisseau('Voyager', 10, 50000);
bibliotheque.addVaisseau(vaisseau1);
bibliotheque.addVaisseau(vaisseau2);

// Effectuer une réservation
const dateStart = new Date('2025-12-01');
const reservation = bibliotheque.bookTrip('Corentin', vaisseau1, mars, dateStart);
console.log(reservation);

// Annuler une réservation
if (typeof reservation !== 'string'){
    console.log(bibliotheque.cancelReservation(reservation.id))
}

// Lister toutes les réservations
console.log(bibliotheque.listerReservations());