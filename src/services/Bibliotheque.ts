import { Planete } from '../classes/Planete';
import { Vaisseau } from '../classes/Vaisseau';
import { Reservation } from '../classes/Reservation';

export class Bibliotheque{
    private planets: Planete[] = [];
    private vaisseaux: Vaisseau[] = [];
    private reservations: Reservation[] = [];

    // Ajouter une planète à la bibliothèque
    public addPlanet(planet: Planete): void{
        this.planets.push(planet);
    }

    // Ajouter un vaisseau à la bibliothèque
    public addVaisseau(vaisseau: Vaisseau): void{
        this.vaisseaux.push(vaisseau);
    }

    // Réserver un voyage
    public bookTrip(user: string, vaisseau: Vaisseau, destination: Planete, dateStart: Date): Reservation | string {
        if (!vaisseau.isAvailable()){
            return 'Spacecraft not available !'
        }

        const reservation = new Reservation(user, vaisseau, destination, dateStart);
        this.reservations.push(reservation);
        return reservation;
    }

    // Annuler une réservation
    public cancelReservation(reservationID: string): string{
        const reservationIndex = this.reservations.findIndex(res => res.id === reservationID);
        if (reservationIndex === -1){
            return `Reservation not found`;
        }

        this.reservations[reservationIndex].cancel();
        this.reservations.splice(reservationIndex, 1);
        return `Reservation cancelled`
    }

    // Lister les planètes
    public listerPlanetes(): Planete[]{
        return this.planets;
    }

    // Lister les vaisseaux
    public listerVaisseaux(): Vaisseau[]{
        return this.vaisseaux
    }

    // Lister les réservations
    public listerReservations(): Reservation[]{
        return this.reservations
    }
}