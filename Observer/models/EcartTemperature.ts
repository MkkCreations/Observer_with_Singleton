import { IPrinter } from "./IPrinter";

export class EcartTemeraure implements IPrinter {
    private _precedente: number;

    constructor() {
        this._precedente = 0;
    }

    set precedente(temp: number) {
        this._precedente = temp;
    }

    show(temperature: number): void {
        let ecart = temperature - this._precedente;
        console.log(`Ecart => ${ecart}`);
        this.precedente = temperature;
    }
}