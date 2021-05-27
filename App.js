import React from 'react';
import { Image, StyleSheet, Text,TouchableOpacity, View } from 'react-native';
import kat from './assets/kat.jpg'

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={kat} style={styles.kat} /> 
      <Text style={{fontSize: 25, textTransform: "capitalize",color: 'yellow'}}> 
      This is my first React Native App
      </Text>
        <Text style={styles.instructions}>
        I am new to all this but it only gets better as i already know CSS.
      </Text>
      <TouchableOpacity
        onPress={() => alert('Hello, world!')}
        style={{ backgroundColor: 'blue' }}>
        <Text style={styles.button}>Click Here</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  kat: {
     width: 305,
     height: 500 ,
     marginBottom: 40,
  },
instructions: {
    color: 'yellow',
    fontSize: 18,
    marginHorizontal: 15,
    marginBottom: 10,
  },
  button:{
    padding: 20,
    color: '#ff156f',
    backgroundColor: 'white',
  }
});
