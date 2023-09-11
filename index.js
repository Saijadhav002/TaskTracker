/**
 * @format
 */
import { AppRegistry } from 'react-native';
import App from './App'; // Import your app's main component
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App); // Make sure it matches your app's name

