'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class GeoLocation extends Component {
	constructor(props) {
    super(props);
    this.state = {
    		userPosition: 'loading...',
    		geo: false
    }
  	watchID: (null: ?number)
  }


	componentDidMount() {
		 this.watchID = navigator.geolocation.watchPosition((position) => {
      var lastPosition = JSON.stringify(position);
      this.setState({userPosition: lastPosition, geo: true});
    });

	}

	componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }


  render() {
    return (
      <View>	
      	<Text>
          <Text style={styles.title}>User's position:  </Text>
          {this.state.userPosition}
        </Text>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  title: {
    fontWeight: '500',
  },
});
