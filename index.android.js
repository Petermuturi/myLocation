
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
    backgroundColor: '#F5FCFF',
  }
});

AppRegistry.registerComponent('myLocation', () => myLocation);
