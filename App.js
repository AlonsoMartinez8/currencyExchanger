import { Button, FlatList, Modal, StyleSheet, Text, View } from "react-native";
import MyHeader from "./components/MyHeader";
import { useState } from "react";
import MyForm from "./components/MyForm";
import MyList from "./components/MyList";

const exchanges = [
  {
    id: 1,
    ori: "Mexican Peso",
    des: "Russian Ruble",
    q: 224.5,
    r: 224.5,
  },
  {
    id: 2,
    ori: "Mexican Peso",
    des: "Russian Ruble",
    q: 224.5,
    r: 224.5,
  },
  {
    id: 3,
    ori: "Mexican Peso",
    des: "Russian Ruble",
    q: 224.5,
    r: 224.5,
  },
];

export default function App() {
  const [modalVisible, setModalVisible] = useState(Boolean(false));

  const handleModalVisibility = (visible) => {
    setModalVisible(!visible);
  };

  return (
    <View style={styles.container}>
      <MyHeader></MyHeader>

      <Button
        title="ADD"
        onPress={() => handleModalVisibility(modalVisible)}
      ></Button>

      <MyList exchanges={exchanges}></MyList>

      <Modal visible={modalVisible} animationType="slide">
        <Button
          title="EXIT"
          onPress={() => handleModalVisibility(modalVisible)}
        ></Button>
        <MyForm></MyForm>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {},
});
