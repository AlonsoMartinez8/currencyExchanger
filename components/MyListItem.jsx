import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function MyListItem({id, ori, des, q, r}) {
  return (
    <View style={styles.container}>
      <Text>MyListItem</Text>
      <Text>{id}</Text>
      <Text>{ori}</Text>
      <Text>{des}</Text>
      <Text>{q}</Text>
      <Text>{r}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: "#e4a",
    borderRadius: 10
  },
});