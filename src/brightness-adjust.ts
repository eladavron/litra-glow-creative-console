import { AdjustmentAction } from '@logitech/plugin-sdk';
import { findDevices, getBrightnessInLumen, getMaximumBrightnessInLumenForDevice, setBrightnessPercentage } from 'litra';

function adjustBrightness(tick: number) {
    console.log('Adjusting brightness of the lights');
    for (const light of findDevices()) {
        const currentBrightness = getBrightnessInLumen(light);
        const maxBrightness = getMaximumBrightnessInLumenForDevice(light);
        const brightnessPercentage = (currentBrightness / maxBrightness) * 100;
        let newBrightnessPercentage;
        if (tick > 0) { // Increase brightness
            newBrightnessPercentage = Math.min(brightnessPercentage + tick, 100);
            console.log(`Increasing brightness of light with serial number ${light.serialNumber} by ${tick}%`);
        } else if (tick < 0) {  // Decrease brightness
            newBrightnessPercentage = Math.max(brightnessPercentage + tick, 0);
            console.log(`Decreasing brightness of light with serial number ${light.serialNumber} by ${Math.abs(tick)}%`);
        }
        else {
            console.log(`Brightness of light with serial number ${light.serialNumber} remains unchanged at ${brightnessPercentage}%`);
            continue; // No change in brightness
        }

        console.log(`Setting brightness of light with serial number ${light.serialNumber} to ${newBrightnessPercentage}%`);
        setBrightnessPercentage(light, newBrightnessPercentage);
    }
}

export class BrightnessAdjust extends AdjustmentAction {
    hasReset = false;
    name = 'adjust_brightness';
    displayName = 'Brightness Adjustment';
    description = 'Adjust the brightness of the lights';

    execute(event: { tick: number; }) {
        adjustBrightness(event.tick);
    }
}