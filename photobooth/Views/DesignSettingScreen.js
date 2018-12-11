import React, { Component } from 'react';
import { View, StyleSheet, ImageBackground, Text } from 'react-native';

export default class DesignSettingScreen extends Component {
    static navigationOptions = {
        header: null,
    };

    render() {
        return (

            <View style={styles.container}>
                <ImageBackground source={{ uri: 'https://i2.wp.com/www.vgdl2.org/wp-content/uploads/2016/04/Dark-Grey-Background-1024x893.png?ssl=1' }} style={styles.backgroundImage} ></ImageBackground>
                <Text style={{ textAlign: 'left', fontSize: 40, color: "white", fontWeight: "bold", marginLeft: "8%", marginTop: "8%", position: 'absolute' }}>DESIGN</Text>
                <View style={{ width: "50%", flexDirection: "row", alignItems: "center", paddingLeft: 73, paddingTop: 160, position: 'absolute' }}>
                    <View style={{ paddingRight: "15%" }}>
                        <Text style={{ fontSize: 35, color: 'rgb(229, 229, 229)' }}>GIF</Text>
                    </View>
                </View>
                <View style={{ width: "50%", flexDirection: "row", alignItems: "center", paddingLeft: 300, paddingTop: 160, position: 'absolute' }}>
                    <View style={{ paddingRight: "15%" }}>
                        <Text style={{ fontSize: 35, color: 'rgb(229, 229, 229)' }}>Layout</Text>
                    </View>
                </View>

                <View style={{ width: "30%", flexDirection: "row", alignItems: "center", paddingLeft: 450, paddingTop: 160, position: 'absolute' }}>
                    <View>
                        <Text style={{ fontSize: 35, color: 'rgb(229, 229, 229)' }}>Preview</Text>
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
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover'
    },
});