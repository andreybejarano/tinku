import React, { Component } from 'react';
import {
	StyleSheet,
	View,
	Text,
	Image,
	PanResponder,
	Animated
} from 'react-native';

export default class Draggable extends Component {
	constructor(props) {
		super(props);
		this.state = {
			showDraggable: true,
			dropZoneValues: null,
			pan: new Animated.ValueXY(),
			initial: new Animated.ValueXY()
		};
		this.panResponder = PanResponder.create({
			onStartShouldSetPanResponder: () => true,
			onPanResponderMove: Animated.event([null, {
				dx: this.state.pan.x,
				dy: this.state.pan.y
			}]),
			onPanResponderRelease: (e, gesture) => {
				if (this.isDropZone(gesture)) {
					console.log(gesture);
					console.log(this.props.dropzones);
				} else {
					console.log('false');
					// Animated.spring(
					// 	this.state.pan,
					// 	{ toValue: { x: this.state.initial.x, y: this.state.initial.x } }
					// ).start();
				}
			}
		});
	}

	isDropZone(gesture) {
		for (let dz of this.props.dropzones) {
			return this.props.instrument.valid;
		}
	}

	render() {
		return (
			<Animated.View
				{...this.panResponder.panHandlers}
				style={[this.state.pan.getLayout()]}>
				<Image style={styles.instrument} source={this.props.instrument.img} />
				<Text style={styles.descriptionInstrument}>{this.props.instrument.name}</Text>
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
