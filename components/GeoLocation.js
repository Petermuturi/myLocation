'use strict';

import React, { Component } from 'react';
import { View, Text, StyleSheet, ToastAndroid, TouchableHighlight } from 'react-native';

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
     navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({userPosition: position, geo: true});
      },
      (error) => ToastAndroid.show(JSON.stringify(error), ToastAndroid.SHORT),
        {enableHighAccuracy: true, timeout: 20000, maximumAge: 1000}
      );
		 this.watchID = navigator.geolocation.watchPosition((position) => {
      this.setState({ userPosition: position, geo: true });
    });

	}
  onPressed(){
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
          <View>
            <Text style={styles.load}>
              Ensure your cellular data or wifi is connected and your location is on
            </Text>
            <TouchableHighlight underlayColor="#dcdcdc" onPress={()=>this.onPressed()}>
              <Text style={styles.button}>Refresh</Text>
            </TouchableHighlight> 
          </View>
          :
          <View>
            <Text style={styles.coord}>
              Longitude: {this.state.userPosition.coords.longitude}
            </Text>
            <Text style={styles.coord}>
              Latitude: {this.state.userPosition.coords.latitude}
            </Text>
            <Text style={styles.time}>
              Time: {moment(new Date(this.state.userPosition.timestamp)).format('MMM Do YYYY h:mm:ss a')}
            </Text>
            {
              this.state.userPosition.mocked ?
              <Text style={styles.mock}>
                These coordinates were mocked
              </Text>
              :
              <Text style={styles.mock}>
                These coordinates weren't mocked
              </Text>
            }
          </View>
        }

      </View>
    );
  }
}

var styles = StyleSheet.create({
  load: {
    fontSize: 10,
    marginBottom:40
  },
  coord: {
    textAlign:'center',
    fontSize:25,
  },
  time: {
    textAlign:'center',
    fontWeight: '400'
  },
  mock: {
    fontSize:12,
    textAlign:'center'
  },
  button: {
    borderColor: 'rgba(0,0,0,0.9)',
    textAlign: 'center',
    borderRadius: 5,
    borderWidth:1,
    paddingTop: 8,
    paddingBottom: 8
  }
});
