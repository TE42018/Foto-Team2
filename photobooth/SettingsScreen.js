import React, { Component } from 'react';
import Styles from 'Css';
import { View, Text, StyleSheet } from 'react-native';

export default class SettingsScreen extends Component{
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={Styles.wrapper}>
                <Text>This is the settings screen</Text>
            </View>
        );
    }
}