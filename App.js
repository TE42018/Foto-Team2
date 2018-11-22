import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={{flex: 1, backgroundColor: "green"}}>
          <Text style={{flex: 1, fontSize: 40, justifyContent: "center", backgroundColor: "red", flexDirection: 'row'}}>START SCREEN</Text>
          <Text style={{flex: 1, fontSize: 40, justifyContent: "center", backgroundColor: "blue", flexDirection: 'row'}}>START SCREEN</Text>
        </Text>
        <Text style={{flex: 1, backgroundColor: "blue" }}>
          <Text>Camera</Text>
          <Text>Countdown seconds</Text>
          <Text>start delay seconds</Text>
          <Text>Show Get Ready Prompt</Text>
        </Text>
        <Text style={{flex: 1, backgroundColor: "red"}}>
          <Text>Background Image</Text>
          <Text>Portrait</Text>
          <Text>Landscape</Text>
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  }
});
