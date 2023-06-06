import * as asciichart from "asciichart";
import { IPrinter } from "./IPrinter";

export class GraphicOutput implements IPrinter {
  private tabTemperature: Array<number>;
  private tabHumidity: Array<number>;

  constructor() {
    this.tabTemperature = [];
    this.tabHumidity = [];
  }

  setTemperatur(temperature: number): void {
    this.tabTemperature.push(temperature);
  }

  setHumidity(humidity: number): void {
    this.tabHumidity.push(humidity);
  }

  show(temperature: number, humidity: number): void {
    this.setTemperatur(temperature);
    this.setHumidity(humidity);
    var config = {
      colors: [
          asciichart.blue,
          asciichart.green,
          undefined,
      ]
  }
    console.log(asciichart.plot([this.tabTemperature, this.tabHumidity], config));
  }
}
