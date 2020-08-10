import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Vanshheader extends React.Component{
  render(){
    return(
      <View style= {styles.box}>
        <Text style={styles.text}>IT's ME </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
box:{
    backgroundColor: 'blue',
    height:70,
    
  },
  text:{
    color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  }
});