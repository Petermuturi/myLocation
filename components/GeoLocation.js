'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';


export default class GeoLocation extends Component {
	constructor(props) {
    super(props);
    this.state = {
    		userPosition: {},
    		geo: false
    }
  	watchID: (null: ?number)
  }


	componentDidMount() {
		 this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({ userPosition: position, geo: true });
    });

	}

	componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchID);
  }


  render() {
    console.log(this.state)
    return (
      <View>
        {
          Object.keys(this.state.userPosition).length === 0 ?
          <Text>
            Loading ...
          </Text>
          :
          <View>
            <Text>
              Latitude: {this.state.userPosition.coords.latitude}
            </Text>
            <Text>
              Longitude: {this.state.userPosition.coords.longitude}
            </Text>
          </View>
        } 

      </View>
    );
  }
}

var styles = StyleSheet.create({
  
});
