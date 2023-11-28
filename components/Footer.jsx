import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Button } from 'react-native';

const Footer = ({ navigation }) => {
  return (
    <View style={styles.footer}>
      <Text>Created in React Native By Harsingh</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    height: 50,
    backgroundColor: 'skyblue',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  footerText: {
    color: '#fff',
    fontSize: 16,
  }
});

export default Footer;
