import { Manager } from "./Manager";


export class WeatherStation {
  private _temperature: number;
  private _humidity: number;
  private _manager: Manager;

  constructor(temperature = 0, humidity = 15) {
    this._temperature = temperature;
    this._humidity = humidity;
    this._manager = new Manager();
  }

  public get manager(): Manager {
    return this._manager;
  }

  public get temperature(): number {
    return this._temperature;
  }

  public set temperature(temperature: number) {
    this._temperature = temperature;
    this._manager.notifier(this._temperature, this._humidity);
  }

  public get humidity(): number {
    return this._humidity;
  }

  public set humidity(humidity: number) {
    if (humidity < 0 || humidity > 100) {
      throw new Error("The humidity is represented in persentage !");
    }
    this._humidity = humidity;
    this._manager.notifier(this._temperature, this._humidity);
  }

  public toString(): string {
    return this._temperature + "°C\n" + this._humidity + "%";
  }
}