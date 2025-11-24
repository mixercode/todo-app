import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import SimpleLineIcons from "@expo/vector-icons/SimpleLineIcons";

export default function TaskCard({ title, status, onToggle }) {
  const isCompleted = status === "Completed";
  return (
    <Pressable
      style={({ pressed }) => [styles.card, pressed && styles.cardPressed]}
    >
      <Pressable onPress={onToggle} style={styles.checkboxContainer}>
        <View
          style={[
            styles.checkboxOuter,
            isCompleted && styles.checkboxOuterActive,
          ]}
        >
          {isCompleted && <View style={styles.checkboxInner} />}
        </View>
      </Pressable>
      <Text
        numberOfLines={1}
        style={[styles.title, isCompleted && styles.titleCompleted]}
      >
        {title}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 72,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    paddingHorizontal: 14,
    borderRadius: 12,
    marginVertical: 6,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  cardPressed: {
    opacity: 0.95,
  },

  checkboxContainer: {
    marginRight: 14,
  },

  checkboxOuter: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: "#1E90FF",
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxOuterActive: {
    borderColor: "#1E90FF",
    backgroundColor: "#e0f0ff",
  },
  checkboxInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: "#1E90FF",
  },

  title: {
    flex: 1,
    fontSize: 16,
    color: "#111827",
    fontWeight: "500",
  },
  titleCompleted: {
    textDecorationLine: "line-through",
    color: "#6b7280",
  },

  iconPressed: {
    opacity: 0.4,
  },
});
