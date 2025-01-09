/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';

import BackgroundService from 'react-native-background-actions';

BackgroundService.on('start', async () => {
  console.log('Headless task running');
  // Run your background task here
});

AppRegistry.registerComponent(appName, () => App);
