import * as rs from "readline-sync";

import { WeatherStation } from "./models/WeatherStation";
import { TextOutput } from "./models/TextOutput";
import { GraphicOutput } from "./models/GraphicOutput";
import { EcartTemeraure } from "./models/EcartTemperature";
import { Logs } from "./models/Logs";

function main(): void {
    // Create the outputs
    const output1 = new TextOutput();
    const output2 = new GraphicOutput();
    const ecart = new EcartTemeraure();
    // Create the weather station
    const weatherStation = new WeatherStation(10);
    // Subscribe the outputs to the weather station
    weatherStation.manager.subscribe(output1);
    weatherStation.manager.subscribe(output2);
    weatherStation.manager.subscribe(ecart);
    console.log("Press enter to start the simulation");
    rs.question();

    // Simulate the weather station
    weatherStation.humidity++;
    
    for (let p = 0; p < 5; p++) {
        console.log("Press enter for the next display");
        rs.question();
        weatherStation.manager.dessubscribe(ecart);
        weatherStation.humidity--;
        weatherStation.manager.subscribe(ecart);
        weatherStation.temperature += 1;
    }

    for (let p = 0; p < 4; p++) {
        console.log("Press enter for the next display");
        rs.question();
        weatherStation.manager.dessubscribe(ecart);
        weatherStation.humidity++;
        weatherStation.manager.subscribe(ecart);
        weatherStation.temperature -= 2;
    }

    // Show all logs
    Logs.getinstance('insertion').showLogs();

    // Show the log with index 1
    Logs.getinstance('insertion').getLogByNum(1);

}

main();
