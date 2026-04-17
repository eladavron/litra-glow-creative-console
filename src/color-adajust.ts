import { AdjustmentAction } from '@logitech/plugin-sdk';
import { findDevices,  getMaximumTemperatureInKelvinForDevice, getMinimumTemperatureInKelvinForDevice, getTemperatureInKelvin, setTemperatureInKelvin } from 'litra';

function adjustBrightness(tick: number) {
    console.log(`Adjusting color with tick: ${tick}`);
    for (const light of findDevices()) {
        const currentTemperature = getTemperatureInKelvin(light);
        const maxTemperature = getMaximumTemperatureInKelvinForDevice(light);
        const minTemperature = getMinimumTemperatureInKelvinForDevice(light);
        const currentTemperaturePercentage = ((currentTemperature - minTemperature) / (maxTemperature - minTemperature)) * 100;
        let newTemperaturePercentage;
        let newTemperatureInKelvin;
        if (tick > 0) { // Increase temperature
            newTemperaturePercentage = Math.min(currentTemperaturePercentage + tick, 100);
            newTemperatureInKelvin = minTemperature + (newTemperaturePercentage / 100) * (maxTemperature - minTemperature);
        } else if (tick < 0) {  // Decrease temperature
            newTemperaturePercentage = Math.max(currentTemperaturePercentage + tick, 0);
            newTemperatureInKelvin = minTemperature + (newTemperaturePercentage / 100) * (maxTemperature - minTemperature);
        }
        else {
            console.log(`Temperature of light with serial number ${light.serialNumber} remains unchanged at ${currentTemperaturePercentage}%`);
            continue; // No change in temperature
        }

        newTemperatureInKelvin = Math.round(newTemperatureInKelvin / 100) * 100;
        console.log(`Setting temperature of light with serial number ${light.serialNumber} to ${newTemperaturePercentage}% (${newTemperatureInKelvin}K rounded to nearest 100)`);
        setTemperatureInKelvin(light, newTemperatureInKelvin);
    }
}

export class ColorAdjust extends AdjustmentAction {
    hasReset = false;
    name = 'Adjust_Color';
    displayName = 'Color Adjustment';
    description = 'Adjust the color of the lights';

    execute(event: { tick: number; }) {
        adjustBrightness(event.tick);
    }
}