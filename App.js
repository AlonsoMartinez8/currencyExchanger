import { Modal, StyleSheet, Text, View } from "react-native";
import MyHeader from "./components/MyHeader";
import { useState } from "react";
import MyForm from "./components/MyForm";
import MyList from "./components/MyList";
import MyButton from "./components/MyButton";

const initExchanges = [
  {
    id: 0,
    ori: "Euro",
    des: "Chinese Yuan",
    oriEmoji: "🇪🇺",
    desEmoji: "🇨🇳",
    q: 2000,
    r: 14292.13,
  },
  {
    id: 1,
    ori: "Canadian Dollar",
    des: "New Zealand Dollar",
    oriEmoji: "🇨🇦",
    desEmoji: "🇳🇿",
    q: 100,
    r: 116.41,
  },
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(Boolean(false));
  const [exchanges, setExchanges] = useState(initExchanges);

  const handleModalVisibility = (visible) => {
    setModalVisible(!visible);
  };

  const onNewExchange = (exchange) => {
    const e = {
      index: exchanges.length,
      ...exchange,
    };
    setExchanges([...exchanges, e]);
    handleModalVisibility(modalVisible);
  };

  const deleteItem = (id) => {
    setExchanges(exchanges.filter((e) => e.id !== id));
  };

  return (
    <View style={styles.container}>
      <MyHeader></MyHeader>

      <MyButton
        title="Add"
        onPress={() => handleModalVisibility(modalVisible)}
      ></MyButton>

      <MyList
        exchanges={exchanges}
        deleteItem={(id) => deleteItem(id)}
      ></MyList>

      <Modal style={styles.modal} visible={modalVisible} animationType="slide">
        <MyForm
          onNewExchange={onNewExchange}
          onExit={() => handleModalVisibility(modalVisible)}
        ></MyForm>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({});
