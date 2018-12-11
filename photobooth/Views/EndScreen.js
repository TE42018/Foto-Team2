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
        const { navigation } = this.props;
        const images = navigation.getParam("images", null)
        alert(images.length)

        return (
            <View style={styles.wrapper}>
                
            </View>
        );
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
