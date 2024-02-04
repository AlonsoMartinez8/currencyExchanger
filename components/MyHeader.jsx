import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MyHeader() {
  return (
    <View style={styles.container}>
      <Text>MyHeader</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    padding: 40,
    backgroundColor: "#12f",
  },
});
