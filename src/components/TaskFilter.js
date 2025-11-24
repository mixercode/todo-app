import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

const FILTERS = ["Todos", "Pendientes", "Completados"];

export default function TaskFilter({ selectedFilter, onChangeFilter }) {
  return (
    <View style={styles.container}>
      {FILTERS.map((filter) => {
        const isActive = selectedFilter === filter;

        return (
          <TouchableOpacity
            key={filter}
            style={[styles.option, isActive && styles.activeOption]}
            onPress={() => onChangeFilter(filter)}
          >
            <Text style={[styles.label, isActive && styles.activeLabel]}>
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
    backgroundColor: "#f3f4f6",
    padding: 6,
    borderRadius: 12,
    marginVertical: 10,
  },
  option: {
    flex: 1,
    paddingVertical: 10,
    alignItems: "center",
    borderRadius: 10,
  },
  label: {
    color: "#4b5563",
    fontSize: 14,
    fontWeight: "500",
  },
  activeOption: {
    backgroundColor: "#1E90FF",
    shadowColor: "#1e90ff",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  activeLabel: {
    color: "#fff",
    fontWeight: "600",
  },
});
