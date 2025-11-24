import { useState } from "react";
import { TextInput, StyleSheet, View, Text } from "react-native";

export default function Input({
  label = "Label",
  placeholder = "placeholder",
  value,
  onChangeText,
  inputType = "text",
  multiline = false,
}) {
  const [isFocused, setIsFocused] = useState(false);
  const isTextArea = inputType === "textarea" || multiline;
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={[
          styles.input,
          isTextArea && styles.textArea,
          isFocused && styles.inputFocused,
        ]}
        placeholder={placeholder}
        placeholderTextColor="#9ca3af"
        value={value}
        onChangeText={onChangeText}
        multiline={isTextArea}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        autoCapitalize={true}
        accessibilityLabel={label}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 18,
  },
  label: {
    fontSize: 15,
    marginBottom: 6,
    fontWeight: "500",
    color: "#374151",
  },
  input: {
    width: "100%",
    backgroundColor: "#ffffff",
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: "#d1d5db",
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: "111827",
  },
  textArea: {
    minHeight: 110,
    textAlignVertical: "top",
    paddingTop: 14,
    paddingBottom: 14,
  },
  inputFocused: {
    borderColor: "#2563eb",
    shadowColor: "#2563eb",
    shadowOpacity: 0.12,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
});
