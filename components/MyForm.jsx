import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import currencies from "../assets/currencies";
import MyHeader from "./MyHeader";

export default function MyForm() {
  const [oriCurrency, setOriCurrency] = useState("");
  const handleSendForm = () => {};
  return (
    <View style={styles.container}>
      <Text>MyForm</Text>
      <Text>OriCurr</Text>
      <Text>DesCurr</Text>
      <Text>Cuant</Text>
      <Button title="SEND" onPress={handleSendForm()}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 40,
    backgroundColor: "#12f",
  },
});
