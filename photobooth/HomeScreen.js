import React, { Component } from 'react';
import Styles from 'Css';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

export default class HomeScreen extends Component {
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={Styles.wrapper}>
                <Text>This is the home screen</Text>
                <TouchableHighlight style={styles.settingsButton} onPress={() => { this.props.navigation.navigate('Settings') }}>
                    <Text>
                        Settings
                    </Text>
                </TouchableHighlight>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    settingsButton: {
        backgroundColor: 'red'
    }
});