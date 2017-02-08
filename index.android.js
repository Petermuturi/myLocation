
import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';

import GeoLocation from './components/GeoLocation'

export default class myLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('./assets/icon.png')}
        />
         <Text style={styles.title}>My Location</Text>
        <GeoLocation/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#eee',
  },
  title: {
    fontWeight: '100',
    fontSize: 60
  }
});

AppRegistry.registerComponent('myLocation', () => myLocation);
