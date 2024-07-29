"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Planete = void 0;
class Planete {
    constructor(name, type, distance) {
        this._name = name;
        this._type = type;
        this._distance = distance;
    }
    seeDetails() {
        return `Name: ${this._name} \n Type: ${this._type} \n Distance: ${this._distance}`;
    }
    // Getters
    get name() {
        return this._name;
    }
    get type() {
        return this._type;
    }
    get distance() {
        return this._distance;
    }
    // Setters
    set name(name) {
        this._name = name;
    }
    set type(type) {
        this._type = type;
    }
    set distance(distance) {
        this._distance = distance;
    }
}
exports.Planete = Planete;
