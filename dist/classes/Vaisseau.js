"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Vaisseau = void 0;
class Vaisseau {
    constructor(name, capacity, speed) {
        this._name = name;
        this._capacity = capacity;
        this._speed = speed;
        this._status = true;
    }
    seeDetails() {
        return `Name: ${this._name} \n Capacity: ${this._capacity} \n Speed: ${this._speed} \n Statut: ${this._status}`;
    }
    isAvailable() {
        return this._status;
    }
    book() {
        this._status = false;
    }
    release() {
        this._status = true;
    }
    // Getters
    get name() {
        return this._name;
    }
    get capacity() {
        return this._capacity;
    }
    get speed() {
        return this._speed;
    }
    // Setters
    set name(name) {
        this._name = name;
    }
    set capacity(capacity) {
        this._capacity = capacity;
    }
    set speed(speed) {
        this._speed = speed;
    }
    set status(status) {
        this._status = status;
    }
}
exports.Vaisseau = Vaisseau;
