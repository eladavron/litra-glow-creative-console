import { CommandAction } from '@logitech/plugin-sdk';
import { findDevices, isOn, turnOn, turnOff } from 'litra';

function toggleLight() {
  for (const light of findDevices()) {
    console.log(`Toggling light with serial number: ${light.serialNumber}`);
    const oldState = isOn(light);
    const newState = !oldState;
    if (newState) {
      turnOn(light);
    }
    else {
      turnOff(light);
    }
  }
}

export class ToggleAction extends CommandAction {
  name = 'toggle_light';
  displayName = 'Toggle Light';
  description = 'Toggle a Litra Glow light on or off';

  async onKeyDown() {
    toggleLight();
  }
}
