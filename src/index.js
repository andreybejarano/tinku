import { Navigation } from 'react-native-navigation';

import SplashScreen from './containers/SplashScreen.js';
import MainScreen from './containers/MainScreen.js';
import MusicGameScreen from './containers/music/MusicGameScreen.js';
import MusicWorldScreen from './containers/music/MusicWorldScreen.js';
import MusicListScreen from './containers/music/MusicListScreen.js';


export default () => {
  Navigation.registerComponent('SplashScreen', () => SplashScreen);
  Navigation.registerComponent('MainScreen', () => MainScreen);
  Navigation.registerComponent('MusicGameScreen', () => MusicGameScreen);
  Navigation.registerComponent('MusicWorldScreen', () => MusicWorldScreen);
  Navigation.registerComponent('MusicListScreen', () => MusicListScreen);

  Navigation.startSingleScreenApp({
    screen:{
      screen:'SplashScreen'
    }
  })

};
