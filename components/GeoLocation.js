'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import moment from 'moment'

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
    return (
      <View>
        {
          Object.keys(this.state.userPosition).length === 0 ?
          <Text>
            Loading ...
          </Text>
          :
          <View>
            <Text style={styles.coord}>
              Latitude: {this.state.userPosition.coords.latitude}
            </Text>
            <Text style={styles.coord}>
              Longitude: {this.state.userPosition.coords.longitude}
            </Text>
            {
              this.state.userPosition.mocked ?
              <Text>
                These coordinates were mocked
              </Text>
              :
              <Text>
                These coordinates weren't mocked
              </Text>
            }
            <Text>
              Time: {moment(new Date(this.state.userPosition.timestamp)).format('MMM Do YYYY h:mm:ss a')}
            </Text>
          </View>
        } 

      </View>
    );
  }
}

var styles = StyleSheet.create({
  coord: {
    fontSize:20,
  }
});
