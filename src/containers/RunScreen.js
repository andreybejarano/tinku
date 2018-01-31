import React, { Component } from 'react';
import {
    Animated,
    Image,
    PanResponder,
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import appStyle from '../statics/styles/appStyle';

export default class RunScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            pan: new Animated.ValueXY()
        };
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true
        });

    }

    componentWillMount() {
        Animated.timing(
            this.state.pan,
            {
                toValue: {
                    x: -60000, y: 0
                },
                duration: 60000,
            }
        ).start();
    }



    render() {
        return (
            <Animated.View
                {...this.panResponder.panHandlers}
                style={[this.state.pan.getLayout(), { flex: 1, flexDirection: 'row' }]}>
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
                <Image style={{ width: 1500, height: 800 }}source={require('../statics/images/Desiertofondo.png')} />
            </Animated.View>
        );
    }
}

const styles = StyleSheet.create(appStyle);