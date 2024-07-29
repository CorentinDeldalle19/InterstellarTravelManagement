export class Vaisseau{
    private _name: string;
    private _capacity: number;
    private _speed: number;
    private _status: boolean;

    constructor(name: string, capacity: number, speed: number){
        this._name = name;
        this._capacity = capacity;
        this._speed = speed;
        this._status = true;
    }

    public seeDetails(): string{
        return `Name: ${this._name} \n Capacity: ${this._capacity} \n Speed: ${this._speed} \n Statut: ${this._status}`
    }

    public isAvailable(): boolean{
        return this._status;
    }

    public book(): void{
        this._status = false;
    }

    public release(): void {
        this._status = true;
    }

    // Getters
    public get name(): string{
        return this._name;
    }

    public get capacity(): number{
        return this._capacity;
    }

    public get speed(): number{
        return this._speed;
    }

    // Setters
    public set name(name: string){
        this._name = name;
    }

    public set capacity(capacity: number){
        this._capacity = capacity;
    }

    public set speed(speed: number){
        this._speed = speed;
    }

    public set status(status: boolean){
        this._status = status;
    }
}