import { Navigation } from 'react-native-navigation';

import SplashScreen from './containers/SplashScreen.js';
import MainScreen from './containers/MainScreen.js';
import MusicGameScreen from './containers/MusicGameScreen.js';


export default () => {
  Navigation.registerComponent('SplashScreen', () => SplashScreen);
  Navigation.registerComponent('MainScreen', () => MainScreen);
  Navigation.registerComponent('MusicGameScreen', () => MusicGameScreen);

  Navigation.startSingleScreenApp({
    screen:{
      screen:'SplashScreen'
    }
  })

};
