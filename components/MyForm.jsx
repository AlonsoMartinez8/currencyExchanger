import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import currencies from "../assets/currencies";
import CurrencyComboBox from "./CurrencyComboBox";
import MyButton from "./MyButton";

export default function MyForm({ onNewExchange, onExit }) {
  const [oriCurrency, setOriCurrency] = useState(null);
  const [desCurrency, setDesCurrency] = useState(null);
  const [q, setQ] = useState(0.0);

  const resetHooks = () => {
    setOriCurrency(null);
    setDesCurrency(null);
    setQ(0.0);
  };

  const handleSendForm = () => {
    const exchange = {
      id: Date.now(),
      ori: currencies[oriCurrency].name,
      des: currencies[desCurrency].name,
      oriEmoji: currencies[oriCurrency].emoji,
      desEmoji: currencies[desCurrency].emoji,
      q: q,
      r: (
        (q * currencies[desCurrency].exchangeRate) /
        currencies[oriCurrency].exchangeRate
      ).toFixed(2),
    };
    onNewExchange(exchange);
    resetHooks();
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>ORIGIN</Text>
      <CurrencyComboBox
        currencies={currencies}
        onSelectCurrency={(currency) => setOriCurrency(currency)}
      ></CurrencyComboBox>

      <Text style={styles.label}>DESTINATION</Text>
      <CurrencyComboBox
        currencies={currencies}
        onSelectCurrency={(currency) => setDesCurrency(currency)}
      ></CurrencyComboBox>

      <Text style={styles.label}>QUANTITY</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(q) => setQ(q)}
      ></TextInput>

      <View style={styles.row}>
        <MyButton title="Send" onPress={() => handleSendForm()}></MyButton>
        <MyButton title="Exit" onPress={() => onExit()}></MyButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 40,
  },
  label: {
    fontSize: 20,
  },
  input: {
    padding: 8,
    fontSize: 18,
    borderWidth: 1,
    borderColor: "#3334",
    textAlign: 'center',
  },
  btn: {
    marginTop: 20,
  },
});
