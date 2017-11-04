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
		Actions.mainScreen();
	}


	render() {
		return (
			<View style={styles.container}>
				<Image style={{width: window.width*0.40, height: window.height*0.70}} source={require('../statics/images/splash_animation/logo.png')} />
			</View>
		);
	}
}

const styles = StyleSheet.create(appStyle);
