import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image, AppRegistry, ImageBackground, Picker, Platform, Alert} from 'react-native';
import SwitchSelector from 'react-native-switch-selector';
import Icon from 'react-native-ionicons'
import PhotoUpload from 'react-native-photo-upload'

export default class StartSettingScreen extends Component{
    static navigationOptions = {
        header: null,
    };
    constructor(){
        super();
        this.state={
          PickerSelectedVal : ''
        }
      }
    getSelectedPickerValue=()=>{
        Alert.alert("Selected country is : " +this.state.PickerSelectedVal);
      }
    render() {
        return (
            <View style={styles.container}>
            <ImageBackground source={{uri: 'https://i2.wp.com/www.vgdl2.org/wp-content/uploads/2016/04/Dark-Grey-Background-1024x893.png?ssl=1'}} style={styles.backgroundImage} >
                <View style={{flex: 1, flexDirection: "row"}}>       
                    <View style={{width: "50%", height: "100%", flex: 1}}>
                        <Text style={{textAlign: 'left', fontSize: 40, color: "white", fontWeight: "bold", marginLeft: "8%", marginTop: "8%"}}>START SCREEN</Text>
                        <View style={{width: "50%", flexDirection: "row", alignItems: "center", padding: 30, paddingTop: 68}}>
                            <View style={{paddingRight: "15%"}}>
                                <Text style={{fontSize: 20, color: 'rgb(229, 229, 229)'}}>Camera</Text>
                            </View>
                            <View style={{width: 200}}>
                                <SwitchSelector fontSize={null} options={options} initial={0} onPress={value => console.log('all onPress with value: ${value}')} />
                            </View>
                        </View>               

                        <View style={{width: "50%", flexDirection: "row", alignItems: "center", padding: 30}}>
                            <View style={{paddingRight: "15%"}}>
                                <Text style={{fontSize: 20, color: 'rgb(229, 229, 229)'}}>Countdown seconds</Text>
                            </View>
                            <View style={{width: 200}}>
                                <Picker
                                    style={{color: "#fff"}}
                                    mode="dropdown"
                                    selectedValue={this.state.PickerSelectedVal}
                                    onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})}>
                                    <Picker.Item label="1 seconds" value="1 seconds" />
                                    <Picker.Item label="2 seconds" value="2 seconds" />
                                    <Picker.Item label="3 seconds" value="3 seconds" />
                                    <Picker.Item label="4 seconds" value="4 seconds" />
                                    <Picker.Item label="5 seconds" value="5 seconds" />
                                    <Picker.Item label="6 seconds" value="6 seconds" />
                                </Picker>
                            </View>
                        </View>

                        <View style={{width: "50%", flexDirection: "row", alignItems: "center", padding: 30}}>
                            <View style={{paddingRight: "15%"}}>
                            <Text style={{fontSize: 20, color: 'rgb(229, 229, 229)'}}>Start delay seconds</Text>   
                            </View>
                            <View style={{width: 200}}>
                                <Picker
                                    style={{color: "#fff"}}
                                    mode="dropdown"
                                    selectedValue={this.state.PickerSelectedVal}
                                    onValueChange={(itemValue, itemIndex) => this.setState({PickerSelectedVal: itemValue})} >
                                    <Picker.Item label="1 seconds" value="1 seconds" />
                                    <Picker.Item label="2 seconds" value="2 seconds" />
                                    <Picker.Item label="3 seconds" value="3 seconds" />
                                    <Picker.Item label="4 seconds" value="4 seconds" />
                                    <Picker.Item label="5 seconds" value="5 seconds" />
                                    <Picker.Item label="6 seconds" value="6 seconds" />
                                </Picker>
                            </View>
                        </View>
                   
                        <Text style={{marginLeft: "8%", fontSize: 20, color: 'rgb(229, 229, 229)', marginTop: "14%"}}><Icon ios="checkmark-circle" android="checkmark-circle" style={{color: "#fff", fontSize: 40}}/>  Show Get Ready Prompt</Text>
                    </View>
                    <View style={{flex: 1, width: "50%", height: "50%"}}>
                        <Text style={{marginTop: "38%", marginLeft: "3%", marginBottom: "10%", fontSize: 30, fontWeight: "bold", color: "white"}}>Background Image</Text>                      
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
                                    height: 200,
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
                                    width: 200,
                                    height: 150,
                                    }}
                                    resizeMode='cover'
                                    source={{
                                    uri: 'https://www.sparklabs.com/forum/styles/comboot/theme/images/default_avatar.jpg'
                                    }}
                                />
                            </PhotoUpload>
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

const options = [
    { label: 'front', value: '1' },
    { label: 'back', value: '1.5' }
];
