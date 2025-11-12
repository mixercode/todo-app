import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function TaskCard({ title, status, onToggle }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity onPress={onToggle} style={styles.radioOuter}>
        {status === "Completed" && <View style={styles.radioInner} />}
      </TouchableOpacity>
      <Text
        style={[styles.title, status === "Completed" && styles.completedText]}
      >
        {title}
      </Text>
      <TouchableOpacity>
        <SimpleLineIcons name="options-vertical" size={22} color="gray" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f9fafb",
    padding: 12,
    borderRadius: 10,
    marginVertical: 6,
  },
  radioOuter: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 2,
    borderColor: "#137fec",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#137fec",
  },
  title: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
  },
  completedText: {
    textDecorationLine: "line-through",
    color: "#6b7280",
  },
});
