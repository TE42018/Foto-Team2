import { RNCamera } from 'react-native-camera';
import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, Image } from 'react-native';

export default class EndScreen extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    static navigationOptions = {
        header: null,
    };

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.imageCard}>
                    <View style={{flex: 1, flexDirection: "row"}}>
                        <View style={styles.imageContainer}><View style={styles.image}><Text>Bild</Text></View></View>
                        <View style={styles.imageContainer}><View style={styles.image}><Text>Bild</Text></View></View>
                    </View>
                    <View style={{flex: 1, flexDirection: "row"}}>
                        <View style={styles.imageContainer}><View style={styles.image}><Text>Bild</Text></View></View>
                        <View style={styles.imageContainer}><View style={styles.image}><Text>Bild</Text></View></View>
                    </View>
                </View>
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
        justifyContent: 'center',
        alignItems: "center",
    },
    imageCard: {
        width: '80%',
        height: '80%',
        backgroundColor: 'blue',
        padding: 10
    },
    imageContainer: {
        backgroundColor: 'blue',
        padding: 10,
        flex: 1
    },
    image: {
        backgroundColor: 'red',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
