import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, AppRegistry } from 'react-native';

export default class StartSettingScreen extends Component{
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.container}>
            <Text style={{textAlign: 'center', fontSize: 40, backgroundColor: "green"}}>START SCREEN</Text>
                <View style={{flex: 1, backgroundColor: "green", flexDirection: "row"}}>                 
                    <View style={{width: "50%", height: "100%", borderStyle:"solid", borderColor: "black", borderWidth: 1, marginLeft: "1%", borderLeftWidth: 0, borderTopWidth: 0, borderBottomWidth: 0, flex: 1}}>
                        <Text style={{marginLeft: "8%", marginBottom: "10%", marginTop: "20%", fontSize: 20}}>Camera</Text>
                        <Text style={{marginLeft: "8%", marginBottom: "10%", fontSize: 20}}>Countdown seconds</Text>
                        <Text style={{marginLeft: "8%", marginBottom: "10%", fontSize: 20}}>start delay seconds</Text>
                        <Text style={{marginLeft: "8%", fontSize: 20}}>Show Get Ready Prompt</Text>
                    </View>
                    <View style={{flex: 1, width: "50%", height: "50%"}}>
                        <Text style={{marginTop: "20%", marginLeft: "8%", marginBottom: "10%", fontSize: 30}}>Background Image</Text>                      
                        <View style={{flexDirection: "row", flex: 1}}>                         
                        <View>
                            <Text style={{marginLeft: "8%", marginBottom: "10%", fontSize: 20}}>Portrait </Text>
                            <Image style={{width: 100, height: 100}} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
                        </View>
                            <Text style={{marginLeft: "40%", marginBottom: "10%", fontSize: 20}}>Landscape </Text>
                        </View>
                    </View>
                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});
