import React from 'react';
import { Text } from 'react-native';

export default class GeoLocation extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Text>Hello World</Text>
    );
  }
}
