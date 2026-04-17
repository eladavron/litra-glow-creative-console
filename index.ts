import { PluginSDK } from '@logitech/plugin-sdk';
import { ToggleAction } from './src/toggle-action';
import { BrightnessAdjust } from './src/brightness-adjust';
import { ColorAdjust } from './src/color-adajust';

const pluginSDK = new PluginSDK();

// Register plugin actions
pluginSDK.registerAction(new ToggleAction());
pluginSDK.registerAction(new BrightnessAdjust());
pluginSDK.registerAction(new ColorAdjust());

await pluginSDK.connect();
