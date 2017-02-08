
import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import GeoLocation from './components/GeoLocation'

export default class myLocation extends Component {
  render() {
    return (
      <View style={styles.container}>
         <Text style={styles.title}>User's position</Text>
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
    fontSize: 40
  }
});

AppRegistry.registerComponent('myLocation', () => myLocation);
