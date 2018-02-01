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
            pan: new Animated.ValueXY(),
            panActor: new Animated.ValueXY()
        };
        this.panResponder = PanResponder.create({
            onStartShouldSetPanResponder: () => true
        });
        this.panResponderActor = PanResponder.create({
            onStartShouldSetPanResponder: () => true
        })

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

    jumpActor() {
        Animated.timing(
            this.state.panActor,
            {
                toValue: {
                    x: 0, y: -350
                },
                duration: 1000,
            }
        ).start();
        setTimeout(() => {
            Animated.timing(
                this.state.panActor,
                {
                    toValue: {
                        x: 0, y: 0
                    },
                    duration: 1000,
                }
            ).start();
        }, 1000);
    }

    render() {
        return (
            <View style={{ position: 'relative' }}>
                <Animated.View
                    {...this.panResponder.panHandlers}
                    style={[this.state.pan.getLayout(), { flex: 1, flexDirection: 'row' }]}>
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                    <Image style={{ width: 1500, height: 800 }} source={require('../statics/images/Desiertofondo.png')} />
                </Animated.View>
                <Animated.View
                    {...this.panResponderActor.panHandlers}
                    style={[this.state.panActor.getLayout(), { marginLeft: 24, position: 'relative' }]}
                >
                    <Image onTouchStart={() => this.jumpActor()} style={{ zIndex: 100, top: '165%' }} source={require('../statics/images/Tinku.png')} />
                </Animated.View>
            </View>
        );
    }
}

const styles = StyleSheet.create(appStyle);