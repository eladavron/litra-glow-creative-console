import { PluginSDK } from '@logitech/plugin-sdk';
import { ToggleAction } from './src/toggle-action';
import { BrightnessAdjust } from './src/brightness-adjust';

const pluginSDK = new PluginSDK();

// Register plugin actions
pluginSDK.registerAction(new ToggleAction());
pluginSDK.registerAction(new BrightnessAdjust());

await pluginSDK.connect();
