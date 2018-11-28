import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import CountdownCircle from 'react-native-countdown-circle'
import Camera from 'react-native-camera'


let cam = { header: null }

console.disableYellowBox = true

export default class CamScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    countdown = () => {
        //alert(this.state.seconds)   
        if (this.state.seconds == 0) {
            this.setState({ seconds: this.state.maxSeconds })
            if (this.state.imageCount > 0)
                this.takePicture()
        }
        this.setState({ seconds: this.state.seconds - 1 })
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
    render() {
        return (
            <View style={styles.wrapper}>
                {/*<Text>This is the home screen</Text>
                <TouchableOpacity style={styles.settingsButton} onPress={() => { this.props.navigation.navigate('Settings') }}>
                    <Text>
                        Settings
                    </Text>
                </TouchableOpacity>*/}
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

                    <View style={styles.counter}>

                        <Text style={styles.textCounter}>{this.state.seconds}</Text>

                    </View>

                </RNCamera>







            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    preview: {
        flex: 1,
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
        paddingBottom: 40,
        alignItems: 'center',
        opacity: 0.8, 
    },
    textCounter: {
        fontSize: 100,
        color: 'white',
    },
});