import React from "react";
import {
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { View, Text, StyleSheet } from "react-native";

export default function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <View style={styles.header}>
        <Text style={styles.title}>Mi App</Text>
      </View>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 10,
    backgroundColor: "#1E90FF",
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
});
