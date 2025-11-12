import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";

export default function FloatingActionButton({ onPress }) {
  return (
    <TouchableOpacity style={styes.container} onPress={onPress}>
      <Entypo name="plus" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styes = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 30,
    right: 30,
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "#137fec",
    alignItems: "center",
    justifyContent: "center",
    elevation: 5,
  },
});
