import React from "react";
import { FlatList, StyleSheet, View } from "react-native";
import MyListItem from "./MyListItem";

export default function MyList({exchanges}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={exchanges}
        renderItem={({ item }) => (
          <MyListItem id={item.id} ori={item.ori} des={item.des} q={item.q} r={item.r}></MyListItem>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
});