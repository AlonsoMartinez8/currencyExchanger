import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import MyButton from "./MyButton";

export default function MyListItem({ id, ori, des, oE, dE, q, r, deleteItem }) {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <Text style={styles.emoji}>{oE}</Text>
        <MyButton title="Delete" onPress={(id) => deleteItem(id)}></MyButton>
        <Text style={styles.emoji}>{dE}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>{ori}</Text>
        <Text style={styles.text}>{des}</Text>
      </View>
      <View style={styles.row}>
        <Text style={styles.text}>{q}</Text>
        <Text style={styles.text}>{r}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
    borderColor: "#333",
    borderWidth: 1,
  },
  row: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    fontSize: 20,
  },
  emoji: {
    fontSize: 40,
  },
});
