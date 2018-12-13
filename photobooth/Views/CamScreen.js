import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import TimerComponent from '../Components/TimerComponent'


function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

let cam;
let temp;
export default class CamScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showWelcomeScreen: true,
            maxSeconds: 3,
            seconds: 3,
            imageCount: 4,
            images: [],
            test: []
        }
    }

    static navigationOptions = {
        header: null,
    };


    takePicture = async function () {
        if (cam) {
            const options = { quality: 0.5, base64: true };
            let data = await cam.takePictureAsync(options)
            
            this.state.images.push(data.base64)
        }
    }

    onFinished = () => {
        this.props.navigation.navigate('End', {images: this.state.images})
        //alert(this.state.test)
        this.toggleWelcomeScreen()
    }



    toggleWelcomeScreen = () => {
        this.setState({ showWelcomeScreen: !this.state.showWelcomeScreen });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <StatusBar hidden={true} />
                <RNCamera
                    ref={ref => cam = ref}
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.auto}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                >
                </RNCamera>

                {renderIf(this.state.showWelcomeScreen,
                    <View style={styles.overlayContainer}>
                        <Image style={styles.overlayImage} source={require('../Assets/Images/startscreen.jpg')} />
                        <TouchableOpacity onPress={this.toggleWelcomeScreen} style={styles.pressableArea}>
                        </TouchableOpacity>
                    </View>
                )}
                {renderIf(!this.state.showWelcomeScreen,
                // seconds and repetition values sould not be hardcoded
                    <TimerComponent seconds={1} repetitions={2} active={!this.state.showWelcomeScreen} onCountdown={() => { this.takePicture()}} onFinished={()=>{this.onFinished()}}></TimerComponent>
                )}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    preview: {
        zIndex: -1,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    capture: {
        flex: 0,
        backgroundColor: '#fff',
        borderRadius: 5,
        padding: 15,
        paddingHorizontal: 20,
        alignSelf: 'center',
        margin: 20,
    },
    background: {
        zIndex: 1,
        position: "relative",
        resizeMode: "cover",
        top: 0,
        left: 0,
    },
    pressableArea: {
        position: "absolute",
        width: 370,
        height: 370,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        //backgroundColor: 'rgba(0, 0, 0, 1)',
        bottom: 166,
        borderRadius: 1000,
        opacity: 1,
    },
    overlayContainer: {
        
        alignItems: "center",
        backgroundColor: 'rgba(0, 0, 0, 0)',
        width: '100%', height: '100%',
        opacity: 0.9,
        position: "absolute",
    },
    overlayImage: {
        resizeMode: "stretch",
        position: "absolute",
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
    }
});