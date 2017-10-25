import React, { Component } from 'react';
import {
	Image,
	ImageBackground,
	Platform,
	StyleSheet,
	Text,
	View
} from 'react-native';
import appStyle from '../statics/styles/appStyle';


export default class MusicGameScreen extends Component {

	constructor(props) {
		super(props);
		this.instruments = props.config.instruments;
	}

	static navigatorStyle = {
		navBarHidden: true
	};

	render() {
		return (
			<ImageBackground style={styles.backgroudLevel} source={this.props.config.background}>
				<Text style={styles.title}>
					{this.props.config.name.toUpperCase()}
				</Text>
				<View style={styles.containerDropInstruments}>
					<View style={styles.dropIntrument}></View>
					<View style={styles.dropIntrument}></View>
					<View style={styles.dropIntrument}></View>
				</View>
				<View style={styles.containerImagesIntruments}>
					{
						this.instruments
							.map(instrument => {
								return <View>
									<Image style={styles.instrument} source={instrument.img} />
									<Text style={styles.descriptionInstrument}>{instrument.name}</Text>
								</View>
							})}
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create(appStyle);