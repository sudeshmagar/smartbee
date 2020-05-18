import React, {Component} from 'react';
import { View} from 'react-native';
import Welcome from './src/components/welcome';

class SmartBee extends Component {
  render(){
    return(
      <View style={{flex: 1}}>
        <Welcome ></Welcome>
      </View>
    );
  }
}
export default SmartBee;

