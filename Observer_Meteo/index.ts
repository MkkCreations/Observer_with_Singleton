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

    console.log("Press enter to start the simulation");
    rs.question();

    // Simulate the weather station
    weatherStation.humidity++;
    ecart.precedente = weatherStation.temperature;
    
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
    console.log('\nLog with index 1');
    Logs.getinstance('insertion').getLogByNum(1);

    /* Output:

        Press enter for the next display

        13°C
        12%
            16.00 ┼╮       
            15.00 ┤╰─╮     
            14.00 ┤  ╰─╮   
            13.00 ┤    ╰─╮ 
            12.00 ┤   ╭─╯╰ 
            11.00 ┤ ╭─╯    
            10.00 ┼─╯      
        14°C
        12%
            16.00 ┼╮        
            15.00 ┤╰─╮      
            14.00 ┤  ╰─╮  ╭ 
            13.00 ┤    ╰─╮╯ 
            12.00 ┤   ╭─╯╰─ 
            11.00 ┤ ╭─╯     
            10.00 ┼─╯       
        Ecart => 1

        [ 0 ] Température : 10°C / Humidité : 16%
        [ 1 ] Température : 10°C / Humidité : 15%
        [ 2 ] Température : 11°C / Humidité : 15%
        [ 3 ] Température : 11°C / Humidité : 14%
        [ 4 ] Température : 12°C / Humidité : 14%
        [ 5 ] Température : 12°C / Humidité : 13%
        [ 6 ] Température : 13°C / Humidité : 13%
        [ 7 ] Température : 13°C / Humidité : 12%
        [ 8 ] Température : 14°C / Humidité : 12%
        [ 9 ] Température : 14°C / Humidité : 11%
        [ 10 ] Température : 15°C / Humidité : 11%
        [ 11 ] Température : 15°C / Humidité : 12%
        [ 12 ] Température : 13°C / Humidité : 12%
        [ 13 ] Température : 13°C / Humidité : 13%
        [ 14 ] Température : 11°C / Humidité : 13%
        [ 15 ] Température : 11°C / Humidité : 14%
        [ 16 ] Température : 9°C / Humidité : 14%
        [ 17 ] Température : 9°C / Humidité : 15%
        [ 18 ] Température : 7°C / Humidité : 15%

        Log with index 1
        [ 1 ] Température : 10°C / Humidité : 15%
    */

}

main();
