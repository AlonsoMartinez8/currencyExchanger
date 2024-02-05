import React from "react";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function MyButton({ title, onPress }) {
  return (
    <View style={styles.row}>
      <Pressable style={styles.btn} onPress={onPress}>
        <Text style={styles.title}>{title}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "center",
  },
  btn: {
    minWidth: 100,
    maxWidth: 200,
    backgroundColor: "#d72",
    padding: 8,
    borderRadius: 10,
    margin: 10,
  },
  title: {
    color: "#f2f2f2",
    textAlign: "center",
    textTransform: "uppercase",
  },
});
