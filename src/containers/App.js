/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { Scene, Router } from 'react-native-router-flux';

import MusicListScreen from './MusicListScreen';
import MusicGameScreen from './MusicGameScreen';
import MusicGameOver from './MusicGameOver';

export default class App extends React.Component {
	render() {
		return (
			<Router>
				<Scene key="root">
					<Scene key="musicListScreen" component={MusicListScreen} hideNavBar/>
					<Scene key="musicGameScreen" component={MusicGameScreen} />
					<Scene key="musicGameOver" component={MusicGameOver} />
				</Scene>
			</Router>
		);
	}
}
