import React, { Component } from 'react';
import {  View, Text, StyleSheet, Button, Image, AppRegistry, ImageBackground, Picker, Platform, Alert,CheckBox} from 'react-native';
import PhoneInput from 'react-native-phone-input'
import DialogInput from 'react-native-dialog-input';
export default class SettingsScreen extends Component{
    constructor() {
        super();
    this.state={
        check:false
    }
    this.state={
        check2:false
    }
    }
    checkBoxTest()
    {
        this.setState({
            check: !this.state.check
        })
        alert("Now Value is " + !this.state.check)
    }
    checkBoxTest2()
    {
        this.setState({
            check2: !this.state.check2
        })
        alert("Now Value is " + !this.state.check2)
    }
    render() {
        return (
            
            <View style={styles.container}>
                <Text style={styles.align}>Send Options</Text>
                <View>
                    <Text style={styles.alignSmallText}> Sms</Text>
                    <CheckBox value={this.state.check} onChange={()=>this.checkBoxTest()}/>

                    
                </View>
                <View style={{marginTop: "-11%"}}> 
                <Text style={styles.alignSmall}> Email</Text>
                    <CheckBox style={styles.checkBox}value={this.state.check2} onChange={()=>this.checkBoxTest2()}/>
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#464646',
        padding: 90
    },
    align: {
        textAlign: 'left', 
        fontSize: 40, 
        color: "white", 
        fontWeight: "bold", 
        marginBottom: "8%"
    },
    alignSmall: {
        color: "white", 
        fontWeight: "bold", 
        marginLeft: "80%", 
        fontSize:20,
        marginBottom: "2%"
    },
    alignSmallText: {
        fontSize:20,
        color:"white",
        fontWeight: "bold", 
        marginBottom: "2%"
    },
    checkBox: {
        textAlign: 'left', 
        color: "white", 
        fontWeight: "bold", 
        marginLeft: "80%", 
    }
});