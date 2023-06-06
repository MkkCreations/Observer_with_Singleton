import { IPrinter } from "./IPrinter";

export class TextOutput implements IPrinter {
  show(temperature: number, humidity: number): void {
    console.log(temperature + "°C\n" + humidity + "%");
  }
}
