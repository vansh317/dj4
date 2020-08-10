
import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';

 export default class Mysound extends React.Component {
  playsound = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/DJ%20Scratching-11922-Free-Loops.com.mp3',
      },
      { shouldPlay: true }
    );
  };

  playsound2 = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'https://cdn.instructables.com/ORIG/F4N/1HUT/HP8F2J2A/F4N1HUTHP8F2J2A.wav',
      },
      { shouldPlay: true }
    );
  };
  playsound3 = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'http://cd.textfiles.com/cdaction/cdaction47b/BEAT2000/SOUNDS/SFX/SQUKSCRH.WAV',
      },
      { shouldPlay: true }
    );
  };

  playsound4 = async () => {
    await Audio.Sound.createAsync(
      {
        uri:
          'http://dight310.byu.edu/media/audio/FreeLoops.com/2/2/Dj%20Scratch-21333-Free-Loops.com.mp3',
      },
      { shouldPlay: true }
    );
  };

  render() {
    return (
      <View>
        <TouchableOpacity style={vansh.to} onPress={this.playsound}>
          <Text>sound 1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={vansh.to} onPress={this.playsound2}>
          <Text>sound 2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={vansh.to} onPress={this.playsound3}>
          <Text>sound 3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={vansh.to} onPress={this.playsound4}>
          <Text>sound 4</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
var vansh = StyleSheet.create({
  to: {
    marginLeft: 100,
    borderRadius: 120,
    marginBottom: 20,
    marginRight: 100,
    justifyContent: 'center',
    width: 80,
    height: 80,
    backgroundColor: 'red',
color: 'white',
    padding: 20,
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    alignItems: 'center',
  },
});

