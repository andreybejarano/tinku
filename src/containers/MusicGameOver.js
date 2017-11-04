import React, { Component } from 'react';
import {
	Image,
	ImageBackground,
	Platform,
	StyleSheet,
	Text,
	View,
} from 'react-native';
import config from '../api/configMusic';
import { Actions } from 'react-native-router-flux';
import appStyle from '../statics/styles/appStyle';

export default class MusicGameOver extends Component {

	constructor(props) {
		super(props);
		this.instruments = props.config.instruments;
		this.config = config;
		this.orderScreens = [
			'cumbia',
			'samba',
			'tango',
			'huaino'
		];
	}

	componentDidMount() {
		setTimeout(() => this.goToNextMusicScreen(), 5000);
	}

	goToNextMusicScreen() {
		for (let i = 0; i < this.orderScreens.length; i++) {
			if (this.props.config.name == this.orderScreens[i] && i+1 < this.orderScreens.length) {
				Actions.musicGameScreen({ 'config': this.config[this.orderScreens[i + 1]] });
				return;
			}
			if (i+1 == this.orderScreens.length) {
				Actions.mainScreen();
			}

		}
	}



	render() {
		return (
			<View style={styles.container}>
				<ImageBackground style={styles.backgroudLevel} source={this.props.config.backgroudGameover}>
					<View>
						<Image source={require('../statics/images/estrellas.png')} />
					</View>
					<View style={{ marginTop: 40 }}>
						<Image style={styles.titleGameover} source={this.props.config.title} />
					</View>
					<View style={styles.containerImagesIntruments}>
						{
							this.instruments
								.map((instrument) => {
									if (instrument.valid) {
										return <View key={instrument.name} style={styles.containerIntruments}>
											<Image style={styles.instrument} source={instrument.img} />
											<Text style={styles.descriptionInstrument}>{instrument.name}</Text>
										</View>;
									}
								})
						}
					</View>
				</ImageBackground>
			</View>
		);
	}
}

const styles = StyleSheet.create(appStyle);