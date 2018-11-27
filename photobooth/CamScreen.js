import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';
import CountdownCircle from 'react-native-countdown-circle'
import Camera from 'react-native-camera'


let cam = {header: null}
  
const countdown = () =>

    <CountdownCircle

        seconds={5}
        radius={60}
        borderwith={8}
        color="#F5F5F5"
        bgColor="#FFFFFF"
        textStyle={{ fontSize: 60 }}
        onTimeElapsed={() => { takePicture() }}

    />

const takePicture = async function () {
    //alert("hello")
    const options = { quality: 0.5, base64: true };
    const data = await cam.takePictureAsync(options);
    //  eslint-disable-next-line
    alert(data.uri); 
}

 

export default class CamScreen extends Component {
    static navigationOptions = {
        header: null,
    };
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
                        //camera = camera_
                        cam = camera
                        //alert(JSON.stringify(camera)) 
                    }}
                </RNCamera>

                {countdown()}

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

});
