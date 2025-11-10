import React from "react";
import { View, TouchableOpacity, StyleSheet, TextInput } from "react-native";
import Fontisto from "@expo/vector-icons/Fontisto";

export default function SearchBar() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder="Buscar tarea"
        placeholderTextColor={"gray"}
      />
      <TouchableOpacity style={styles.button}>
        <Fontisto name="search" size={20} color="white" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "black",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  textInput: {
    flex: 1,
    color: "white",
    fontSize: 16,
    paddingVertical: 6,
  },
  button: {
    backgroundColor: "#137fec",
    borderRadius: 8,
    padding: 8,
    marginLeft: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
