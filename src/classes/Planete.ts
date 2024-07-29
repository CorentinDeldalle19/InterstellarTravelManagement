export class Planete{
    private _name: string;
    private _type: string;
    private _distance: number;

    constructor(name: string, type: string, distance: number){
        this._name = name;
        this._type = type;
        this._distance = distance;
    }

    seeDetails(){
        return `Name: ${this._name} \n Type: ${this._type} \n Distance: ${this._distance}`
    }

    // Getters
    public get name(): string{
        return this._name;
    }

    public get type(): string{
        return this._type;
    }

    public get distance(): number{
        return this._distance
    }

    // Setters
    public set name(name: string){
        this._name = name;
    }

    public set type(type: string){
        this._type = type;
    }

    public set distance(distance: number){
        this._distance = distance;
    }
}

