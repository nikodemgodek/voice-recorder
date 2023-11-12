import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import * as React from 'react';
import { Feather } from '@expo/vector-icons';
import { MotiView } from '@motify/components';
import { Easing } from 'react-native-reanimated';

import { Audio } from 'expo-av';
import { useState } from 'react';

const _size = 100;
const _color = '#b30a';

export default function App() {

  const [buttonHold, setButtonHold] = useState(false);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setButtonHold(!buttonHold)}>
        <View style={[styles.dot, styles.center]}>
          {buttonHold && [...Array(3).keys()].map(index => {
            return(
              <MotiView 
                from={{opacity: 1, scale: 1}} 
                animate={{ opacity: 0, scale: 4}}
                transition={{
                  type: 'timing',
                  duration: 2000,
                  easing: Easing.out(Easing.ease),
                  loop: true,
                  repeatReverse: false,
                  delay: index * 400,
                }}
                key={index}
                style={[StyleSheet.absoluteFillObject, styles.dot]}
              />
            );
            })}
          <Feather name="voicemail" size={32} color='#fff' />
        </View>
        <Text style={{
          marginTop: 40,
          color: buttonHold ? "#000" : "#fff"
        }}>Recording voice..</Text>
      </TouchableOpacity>
        
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  dot : {
    width: _size,
    height: _size,
    borderRadius: _size,
    backgroundColor: _color,
  },

  center : {
    alignItems: 'center',
    justifyContent: 'center'
  }
});
