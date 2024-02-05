import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MyListItem from "./MyListItem";

export default function MyList({ exchanges, deleteItem }) {
  return (
    <View style={styles.container}>
      <FlatList
        data={exchanges}
        renderItem={({ item }) => (
          <MyListItem
            id={item.id}
            ori={item.ori}
            des={item.des}
            oE={item.oriEmoji}
            dE={item.desEmoji}
            q={item.q}
            r={item.r}
            deleteItem={(id) => deleteItem(item.id)}
          ></MyListItem>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    margin: 10,
    height: 500,
    borderWidth: 1,
    borderColor: '#3334',
  },
});
