import React from 'react';
import {StyleSheet, View, Text, Pressable} from 'react-native';

//Clickable Element A
const ElementA = () => (
  <Pressable style={styles.elementA} onPress={() => alert('on click A')}>
    <Text>A</Text>
  </Pressable>
);

//Clickable Element B with absolute position and it is within Parent A
const ElementB = () => (
  <Pressable style={styles.elementB} onPress={() => alert('on click B')}>
    <Text>Bx</Text>
  </Pressable>
);

//Parent A with absolute position & Element B is child of Parent A
const ParentA = () => (
  <View style={styles.parentA}>
    <ElementA />
    <ElementA />
    <ElementA />
    <ElementB />
  </View>
);

// main view
const  Template = () => {
  return (
    <View style={styles.container}>
      <ParentA />
    </View>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  parentA: {
    // position: 'absolute',
    width: 230,
    height: 350,
    left: 25,
    paddingVertical: 10,
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 10,
    borderColor: '#385717',
    backgroundColor: '#cbe8b5',
  },
  elementB: {
    position: 'absolute',
    height: 100,
    width: 140,
    right: -70,
    bottom: '20%',
    backgroundColor: '#fbe3d8',
    borderWidth: 10,
    borderColor: '#ed2400',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex:20
  },
  elementA: {
    zIndex: 1,
    height: '25%',
    width: '90%',
    backgroundColor: '#cbe8b5',
    borderWidth: 10,
    borderColor: '#649d34',
    justifyContent: 'center',
    alignItems: 'center',
  },
});


export default Template;