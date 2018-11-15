import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>This is the home screen</Text>
                <TouchableOpacity style={styles.settingsButton} onPress={() => { this.props.navigation.navigate('Settings') }}>
                    <Text>
                        Settings
                    </Text>
                </TouchableOpacity>
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    flashMode={RNCamera.Constants.FlashMode.on}
                    permissionDialogTitle={'Permission to use camera'}
                    permissionDialogMessage={'We need your permission to use your camera phone'}
                >
                    {({ camera, status }) => {
                        if (status !== 'READY') return <View />;
                        return (
                            <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => this.takePicture(camera)} style={styles.capture}>
                                    <Text style={{ fontSize: 14 }}> SNAP </Text>
                                </TouchableOpacity>
                            </View>
                        );
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
