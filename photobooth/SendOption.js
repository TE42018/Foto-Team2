import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button, Image, AppRegistry, ImageBackground, Picker, Platform, Alert,CheckBox} from 'react-native';

export default class SettingsScreen extends Component{
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.align}>Send Options</Text>
                <View>
                    <CheckBox />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#464646',
    },
    align: {
        textAlign: 'left', 
        fontSize: 40, 
        color: "white", 
        fontWeight: "bold", 
        marginLeft: "8%", 
        marginTop: "8%",
    },
    alignSmall: {
        textAlign: 'left', 
        fontSize: 25, 
        color: "white", 
        fontWeight: "bold", 
        marginLeft: "8%", 
        marginTop: "8%"
    },
    checkBox: {
        textAlign: 'left', 
        color: "white", 
        fontWeight: "bold", 
        marginLeft: "8%", 
        marginTop: "8%"
    }
});