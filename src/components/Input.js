import { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

export default function Input({
  label = "Label",
  placeholder = "placeholder",
  value,
  onChangeText,
  height = 50,
  inputType = "text",
}) {
  const [isFocused, setIsFocused] = useState(false);
  const isTextArea = inputType === "textarea";
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          isTextArea && styles.textArea,
          { height: isTextArea ? 100 : height },
          isFocused && styles.inputFocused,
        ]}
        placeholder={placeholder}
        placeholderTextColor="#6b7280"
        value={value}
        onChangeText={onChangeText}
        multiline={isTextArea}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCapitalize={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginBottom: 6,
    fontWeight: "500",
    color: "#374151",
  },
  input: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#d1d5db",
    paddingHorizontal: 14,
    fontSize: 16,
  },
  textArea: {
    paddingTop_: 12,
    textAlignVertical: "top",
  },
  inputFocused: {
    borderColor: "#3b82f6",
  },
});
