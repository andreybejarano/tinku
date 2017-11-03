import React, { Component } from 'react';
import {
	Dimensions,
	Image,
	ImageBackground,
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import appStyle from '../statics/styles/appStyle';

const window = Dimensions.get('window');

export default class SplashScreen extends Component {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		setTimeout(() => this.goToMainScreen(), 3000);
	}

	goToMainScreen() {
		Actions.musicListScreen();

	}


	render() {
		return (
			<Image style={{ flex: 1, width: window.width, height: window.height }}
				source={require('../statics/images/splash_animation/LOGO_18.png')} />
		);
	}
}

const styles = StyleSheet.create(appStyle);
