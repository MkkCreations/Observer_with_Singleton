import { IPrinter } from "./IPrinter";
import { Logs } from './Logs';

export class Manager {
    private _subscribers: Array<IPrinter> = [];

    constructor() {}

    subscribe(printer: IPrinter) {
        return this._subscribers.push(printer);
    }

    dessubscribe(printer: IPrinter) {
        this._subscribers.forEach((value, index) => {
            if (value == printer) this._subscribers.splice(index, 1);
        });
    }

    notifier(temperature: number, humidity: number): void {
        Logs.getinstance('insertion').logate(`Température : ${temperature}°C / Humidité : ${humidity}%`);
        this._subscribers.forEach((value) => {
            value.show(temperature, humidity);
        });
    }
}