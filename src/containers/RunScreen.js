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
            panActor: new Animated.ValueXY(),
            panObstable: new Animated.ValueXY()
        };
        this.panResponderBackground = PanResponder.create({
            onStartShouldSetPanResponder: () => true
        });
        this.panResponderActor = PanResponder.create({
            onStartShouldSetPanResponder: () => true
        })
        this.backgroundCount = [];
        for (let i = 0; i <= 40; i++) {
            this.backgroundCount.push({ id: i });
        }
    }

    componentWillMount() {
        Animated.timing(
            this.state.pan,
            {
                toValue: {
                    x: -60000, y: 0
                },
                duration: 120000,
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
                    {...this.panResponderBackground.panHandlers}
                    style={[this.state.pan.getLayout(), { flex: 1, flexDirection: 'row' }]}
                >
                    {
                        this.backgroundCount.map(element => {
                            return (
                                <Image
                                    key={element.id}
                                    style={{ width: 1500, height: 800 }}
                                    source={require('../statics/images/desierto/Desiertofondo.png')}
                                />
                            )
                        })
                    }
                </Animated.View>
                {/* <Animated.View style={{ position: 'absolute' }}>
                    <Image style={{ zIndex: 101, top: '200%', left: '700%' }} source={require('../statics/images/desierto/cactus1.png')} />
                </Animated.View> */}
                <Animated.View
                    {...this.panResponderActor.panHandlers}
                    style={[this.state.panActor.getLayout(), { marginLeft: 24, position: 'relative' }]}
                >
                    <Image onTouchStart={() => this.jumpActor()} style={{ zIndex: 100, top: '165%' }} source={require('../statics/images/desierto/Tinku.png')} />
                </Animated.View>

            </View>
        );
    }
}

const styles = StyleSheet.create(appStyle);