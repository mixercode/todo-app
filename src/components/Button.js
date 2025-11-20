import { TouchableOpacity, View, Text, StyleSheet } from "react-native";

export default function Button({
  text = "Button",
  buttonType = "primary",
  onPress,
}) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        buttonType === "primary"
          ? styles.primaryButton
          : styles.secondaryButton,
      ]}
      onPress={onPress}
    >
      <Text
        style={[
          styles.text,
          buttonType === "primary" ? styles.primaryText : styles.secondaryText,
        ]}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    flex: 1,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "#3b82f6",
  },
  primaryButton: {
    backgroundColor: "#3b82f6",
  },
  secondaryButton: {
    backgroundColor: "#ffffff",
  },
  primaryText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  secondaryText: {
    color: "#3b82f6",
    fontSize: 18,
    fontWeight: "bold",
  },
});
