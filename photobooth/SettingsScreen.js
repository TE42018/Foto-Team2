import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class SettingsScreen extends Component{
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.wrapper}>
                <Text>This is the settings screen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
});