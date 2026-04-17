import { PluginSDK } from '@logitech/plugin-sdk';
import { ToggleAction } from './src/toggle-action';

const pluginSDK = new PluginSDK();

// Register plugin actions
pluginSDK.registerAction(new ToggleAction());

await pluginSDK.connect();
