/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';
import { BackHandler } from 'react-native';
import SplashScreen from './SplashScreen';
import MusicListScreen from './MusicListScreen';
import MusicGameScreen from './MusicGameScreen';
import MusicGameOver from './MusicGameOver';

export default class App extends Component {
	componentDidMount() {
		BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);
	}

	componentWillUnmount() {
		BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
	}

	handleBackButton() {
		setTimeout(() => {
			if (Actions.currentScene == 'splashScreen') {
				BackHandler.exitApp();
			}
		}, 100);
	}

	render() {
		return (
			<Router>
				<Scene key="root" >
					<Scene key="splashScreen" component={SplashScreen} hideNavBar />
					<Scene key="musicListScreen" component={MusicListScreen} hideNavBar />
					<Scene key="musicGameScreen" component={MusicGameScreen} hideNavBar />
					<Scene key="musicGameOver" component={MusicGameOver} hideNavBar />
				</Scene>
			</Router>
		);
	}
}
