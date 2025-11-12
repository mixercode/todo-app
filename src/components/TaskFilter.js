import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const FILTERS = ["Todos", "Activos", "Completados"];

export default function TaskFilter({ selectedFilter, onChangeFilter }) {
  return (
    <View style={styles.container}>
      {FILTERS.map((filter) => {
        const isActive = selectedFilter === filter;

        return (
          <TouchableOpacity
            key={filter}
            style={[styles.button, isActive && styles.activeButton]}
            onPress={() => onChangeFilter(filter)}
          >
            <Text style={[styles.text, isActive && styles.activeText]}>
              {filter}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  button: {
    flex: 1,
    paddingVertical: 8,
    marginHorizontal: 5,
    borderRadius: 8,
    backgroundColor: "#f3f4f6",
    alignItems: "center",
  },
  text: {
    color: "#111827",
    fontWeight: "500",
  },
  activeButton: {
    backgroundColor: "#1E90FF",
  },
  activeText: {
    color: "#fff",
    fontWeight: "600",
  },
});
