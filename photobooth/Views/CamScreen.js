import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';
import CountdownCircle from 'react-native-countdown-circle'
import Camera from 'react-native-camera'

function renderIf(condition, content) {
    if (condition) {
        return content;
    } else {
        return null;
    }
}

let cam;
console.disableYellowBox = true

export default class CamScreen extends Component {
    constructor(props) {
        super(props)




    }
    static navigationOptions = {
        header: null,
    };

    countdown = () => {
        //alert(this.state.seconds)
        if (!this.state.showWelcomeScreen) {
            if (this.state.seconds == 0) {
                this.setState({ seconds: this.state.maxSeconds })
                if (this.state.imageCount > 0)
                    this.takePicture()
            }
            this.setState({ seconds: this.state.seconds - 1 })
        }
    }

    takePicture = async function () {
        if (cam) {
            const options = { quality: 0.5, base64: true };
            const data = await cam.takePictureAsync(options)
            this.state.images.push(data.uri)
            this.setState({ imageCount: this.state.imageCount - 1 })
            //alert(this.state.imageCount)

        }
    }

    state = {
        showWelcomeScreen: true,
        timer: this.countdown,
        maxSeconds: 3,
        seconds: 3,
        imageCount: 4,
        images: []
    }




    componentDidMount() {
        setInterval(this.countdown, 1000)
        //alert(countdown())
    }

    toggleWelcomeScreen = () => {
        this.setState({ showWelcomeScreen: !this.state.showWelcomeScreen });
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <StatusBar hidden={true} />
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                >
                    {({ camera, status }) => {
                        
                        if (status !== 'READY') return <View />;

                        cam = camera
                    }}

                    {/* {renderIf(this.state.showWelcomeScreen,
                        <View style={styles.overlayContainer}>
                            <Image style={styles.overlayImage} source={require('./resources/startscreen.jpg')} />
                            <TouchableOpacity onPress={this.toggleWelcomeScreen} style={styles.pressableArea}>
                            </TouchableOpacity>
                        </View>
                    )}
                    {renderIf(!this.state.showWelcomeScreen,
                         <View style={styles.counter}>
                         <Text style={styles.textCounter}>{this.state.seconds}</Text>
                     </View>
                    )} */}


                </RNCamera>

                {renderIf(this.state.showWelcomeScreen,
                    <View style={styles.overlayContainer}>
                        <Image style={styles.overlayImage} source={require('../Assets/Images/startscreen.jpg')} />
                        <TouchableOpacity onPress={this.toggleWelcomeScreen} style={styles.pressableArea}>
                        </TouchableOpacity>
                    </View>
                )}
                {renderIf(!this.state.showWelcomeScreen,
                    <View style={styles.counter}>
                        <Text style={styles.counterText}>{this.state.seconds}</Text>
                    </View>
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
    counter: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        alignItems: 'center',
        width: '100%',
        opacity: 0.8,
    },
    counterText: {
        fontSize: 100,
        color: 'white',
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