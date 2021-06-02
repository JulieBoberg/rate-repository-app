import React from 'react';
import {Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#24292e',
    height: 100
   
  },
  // ...
});

const AppBar = () => {
  return <View style={styles.container}><Text style={{color:'white'}}>Repositories</Text></View>;
};

export default AppBar;