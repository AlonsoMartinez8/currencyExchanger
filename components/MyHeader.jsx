import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function MyHeader() {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/logo.png')} style={styles.logo}></Image>
      <Text style={styles.title}>CURRENCY EXCHANGER</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
    padding: 40,
  },
  logo:{
    width: 120,
  },
  title:{
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
  }
});
