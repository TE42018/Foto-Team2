import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, AppRegistry, ImageBackground } from 'react-native';
import Video from 'react-native-video';
import Icon from 'react-native-ionicons'
import PhotoUpload from 'react-native-photo-upload'

export default class StartSettingScreen extends Component{
    static navigationOptions = {
        header: null,
    };
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={{uri: 'https://i2.wp.com/www.vgdl2.org/wp-content/uploads/2016/04/Dark-Grey-Background-1024x893.png?ssl=1'}} style={styles.backgroundImage} >
                <View style={{flex: 1, flexDirection: "row"}}>       
                    <View style={{width: "50%", height: "100%", flex: 1}}>
                        <Text style={{textAlign: 'left', fontSize: 40, color: "white", fontWeight: "bold", marginLeft: "8%", marginTop: "8%"}}>START SCREEN</Text>
                        <Text style={{marginLeft: "8%", marginBottom: "10%", marginTop: "20%", fontSize: 20, color: 'rgb(229, 229, 229)'}}>Camera</Text>
                        <Text style={{marginLeft: "8%", marginBottom: "10%", fontSize: 20, color: 'rgb(229, 229, 229)'}}>Countdown seconds</Text>
                        <Text style={{marginLeft: "8%", marginBottom: "10%", fontSize: 20, color: 'rgb(229, 229, 229)'}}>start delay seconds</Text>                      
                        <Text style={{marginLeft: "8%", fontSize: 20, color: 'rgb(229, 229, 229)', marginTop: "4%"}}><Icon ios="checkmark-circle" android="checkmark-circle" style={{color: "#fff", fontSize: 40}}/>  Show Get Ready Prompt</Text>
                    </View>
                    <View style={{flex: 1, width: "50%", height: "50%"}}>
                        <Text style={{marginTop: "38%", marginLeft: "8%", marginBottom: "10%", fontSize: 30, fontWeight: "bold", color: "white"}}>Background Image</Text>                      
                        <View style={{flexDirection: "row", flex: 1}}>                         
                        <View>
                            <Text style={{marginLeft: "8%", marginBottom: "10%", fontSize: 20, color: 'rgb(229, 229, 229)'}}>Portrait </Text>
                            <PhotoUpload
                                onPhotoSelect={avatar => {
                                    if (avatar) {
                                    console.log('Image base64 string: ', avatar)
                                    }
                                }}
                                >
                                <Image
                                    style={{
                                    paddingVertical: 30,
                                    width: 150,
                                    height: 150,
                                    borderRadius: 75
                                    }}
                                    resizeMode='cover'
                                    source={{
                                    uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                                    }}
                                />
                            </PhotoUpload>
                        </View>
                        <View>
                            <Text style={{marginLeft: "30%", marginBottom: "5%", fontSize: 20, color: 'rgb(229, 229, 229)'}}>Landscape </Text>
                            <Image style={{width: 100, height: 100, marginLeft: "30%"}} source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}} />
                        </View>
                        </View>
                    </View>
                </View>
                </ImageBackground>
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
    }
});
