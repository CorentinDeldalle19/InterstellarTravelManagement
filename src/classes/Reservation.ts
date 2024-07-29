import { Vaisseau } from './Vaisseau';
import { Planete } from './Planete'

export class Reservation{
    private static compteur: number = 0;
    private _id: string;
    private _user: string;
    private _vaisseau: Vaisseau;
    private _destination: Planete;
    private _dateStart: Date;
    private _status: string;

    constructor(user: string, vaisseau: Vaisseau, destination: Planete, dateStart: Date){
        Reservation.compteur++;
        this._id = `RES-${Reservation.compteur}`;
        this._user = user;
        this._vaisseau = vaisseau;
        this._destination = destination;
        this._dateStart = dateStart;
        this._status = 'En attente'
    }

    public afficherDetails(): string {
        return `Réservation ID: ${this._id}, Utilisateur: ${this._user}, Vaisseau: ${this._vaisseau.seeDetails()}, Destination: ${this._destination.seeDetails}, Date de départ: ${this._dateStart}, Statut: ${this._status}`;
    }

    public approve(): void{
        this._status = 'Approuvée';
        this._vaisseau.book();
    }

    public cancel(): void{
        this._status = 'Annulée';
        this._vaisseau.release();
    }

    // Getters
    public get id(): string{
        return this._id;
    }

    public get user(): string{
        return this._user;
    }

    public get vaisseau(): Vaisseau{
        return this._vaisseau;
    }

    public get destination(): Planete{
        return this._destination;
    }

    public get dateStart(): Date{
        return this._dateStart
    }

    public get status(): string{
        return this._status;
    }

    // Setters
    public set user(user: string){
        this._user = user;
    }

    public set vaisseur(vaisseau: Vaisseau){
        this._vaisseau = vaisseau;
    }

    public set destination(destination: Planete){
        this._destination = destination;
    }

    public set dateStart(dateStart: Date){
        this._dateStart = dateStart;
    }

    public set status(status: string){
        this._status = status;
    }
}