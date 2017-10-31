import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	PanResponder,
	Animated,
	TouchableWithoutFeedback
} from 'react-native';
import Sound from 'react-native-sound';


export default class Draggable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			pan: new Animated.ValueXY()
		};

		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onStartShouldSetPanResponderCapture: () => {this.onPressButton(); return false},
			onPanResponderMove: Animated.event([null, {
				dx: this.state.pan.x,
				dy: this.state.pan.y
			}]),
			onPanResponderRelease: (e, gesture) => {
				this.props.countInstruments();
				if (this.isDropZone(gesture)) {
					this.updateCountTrue();
				} else {
					setTimeout(() => {
						if (this.props.failure) {
							Animated.spring(
								this.state.pan,
								{ toValue: { x: 0, y: 0 } }
							).start();
						}
					}, 500);
				}
			}
		});
	}

	onPressButton() {
		Sound.setCategory('Ambient', true);

		var song = new Sound(this.props.instrument.sound, (error) => {
			if (error) {
				console.log('failed to load the sound', error);
				return;
			}
			song.play()
		});
	}

	updateCountTrue() {
		this.props.countTrue();
	}

	isDropZone(gesture) {
		let dz = this.props.containerzone;
		return (gesture.moveY > dz.y && gesture.moveY < dz.y + dz.height) && this.props.instrument.valid;
	}

	render() {

		return (
			<Animated.View
				{...this.panResponder.panHandlers}
				style={[this.state.pan.getLayout()]}>
				<Image style={styles.instrument} source={this.props.instrument.img} />
			</Animated.View>
		);
	}
}

let styles = StyleSheet.create({
	instrument: {
		marginLeft: 25,
		marginRight: 25,
	},
	descriptionInstrument: {
		fontFamily: 'Dosis-Bold',
		color: '#724212',
		fontSize: 35,
		justifyContent: 'center',
		alignItems: 'center',
	}
});
