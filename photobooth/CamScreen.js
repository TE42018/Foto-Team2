import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';

export default class CamScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {
            showWelcomeScreen: true,
        }
        this.camera = <RNCamera style={styles.preview} type={RNCamera.Constants.Type.back} flashMode={RNCamera.Constants.FlashMode.on} permissionDialogTitle={'Permission to use camera'} permissionDialogMessage={'We need your permission to use your camera phone'} />
        this.welcomeScreen = <View style={styles.overlayContainer}><Image style={styles.overlayImage} source={require('./resources/startscreen.jpg')} /><TouchableOpacity onPress={this.toggleWelcomeScreen} style={styles.pressableArea}></TouchableOpacity></View>
    }
    static navigationOptions = {
        header: null,
    };

    toggleWelcomeScreen = () => {
        this.setState({showWelcomeScreen: !this.state.showWelcomeScreen})
    }

    render() {
        let rendered = [];
        
rendered.push(<StatusBar hidden={true} />)
rendered.push(this.camera)

        if (this.state.showWelcomeScreen) 
            rendered.push(this.welcomeScreen)

        return rendered;
        return (
            <View style={styles.wrapper}>
                {this.rendered}
                {/*this.camera}
                {this.welcomeScreen*/}
            </View>

        );
    }

    takePicture = async function (camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options);
        //  eslint-disable-next-line
        console.log(data.uri);

    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    preview: {
        zIndex: -1,
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
        bottom: 166,
        borderRadius: 1000,
        opacity: 1,
    },
    overlayContainer: {
        flex: 1,
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
