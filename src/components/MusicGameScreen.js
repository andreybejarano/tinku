import React, { Component } from 'react';
import {
	Image,
	ImageBackground,
	Platform,
	StyleSheet,
	Text,
	View,
	Animated
} from 'react-native';
import Draggable from './Draggable';
import appStyle from '../statics/styles/appStyle';
// import Sound from 'react-native-sound';


export default class MusicGameScreen extends Component {

	constructor(props) {
		super(props);
		this.instruments = props.config.instruments;
		this.dropZones = [];
		this.state = {
			containerZone: null
		}
	}

	static navigatorStyle = {
		navBarHidden: true
	};


	setContainerZone(event) {
		this.setState({ containerZone: event.nativeEvent.layout });
	}

	setDropZoneValues(event) {
		this.dropZones.push(event.nativeEvent.layout);
	}

	render() {
		// let whoosh = new Sound('cumbia.wav', Sound.MAIN_BUNDLE, (error) => {
		// 	if (error) {
		// 		console.log('failed to load the sound', error);
		// 		return;
		// 	}
		// 	// loaded successfully
		// 	console.log('duration in seconds: ' + whoosh.getDuration() + 'number of channels: ' + whoosh.getNumberOfChannels());
		// });
		// whoosh.play((success) => {
		// 	if (success) {
		// 		console.log('successfully finished playing');
		// 	} else {
		// 		console.log('playback failed due to audio decoding errors');
		// 		// reset the player to its uninitialized state (android only)
		// 		// this is the only option to recover after an error occured and use the player again
		// 		whoosh.reset();
		// 	}
		// });
		return (
			<ImageBackground style={styles.backgroudLevel} source={this.props.config.background}>
				<Image style={styles.title} source={this.props.config.title}></Image>
				<View onLayout={this.setContainerZone.bind(this)} style={styles.containerDropInstruments}>
					<View onLayout={this.setDropZoneValues.bind(this)} style={styles.dropZone}></View>
					<View onLayout={this.setDropZoneValues.bind(this)} style={styles.dropZone}></View>
					<View onLayout={this.setDropZoneValues.bind(this)} style={styles.dropZone}></View>
				</View>
				<View style={styles.containerImagesIntruments}>
					{
						this.instruments
							.map((instrument) => {
								return <Draggable key={instrument.name} containerzone={this.state.containerZone} dropzones={this.dropZones} instrument={instrument}></Draggable>
							})
					}
				</View>
			</ImageBackground>
		);
	}
}

const styles = StyleSheet.create(appStyle);