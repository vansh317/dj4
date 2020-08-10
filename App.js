import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import Vanshheader from './components/Vanshheader'
import Mysound from './components/Mysound'

export default class App extends React.Component {
  render() {
    return (
      <View>
      <Vanshheader/>
        <Mysound />
        
      </View>
    );
  }
}
