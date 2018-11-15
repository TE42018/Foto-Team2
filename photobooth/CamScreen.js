import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar } from 'react-native';

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
                <StatusBar hidden={true}/>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                >
                    {({ camera, status }) => {
                        if (status !== 'READY') return <View />;
                            
                        setInterval(() => {countdown()}, 1000)
                    }}
                </RNCamera>

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

countdown = function(){

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
