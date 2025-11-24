import { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";
import FontAwesome from "@expo/vector-icons/FontAwesome";

export default function DateInput({
  label = "Seleccionar fecha y hora",
  value,
  onChange,
}) {
  const [showPicker, setShowPicker] = useState(false);
  const [pickerMode, setPickerMode] = useState("date");

  const ensureDateInstance = (val) => {
    if (!val) return new Date();
    return val instanceof Date ? val : new Date(val);
  };

  const formatDateTime = (date) => {
    if (!date) return "";

    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();

    let hours = date.getHours();
    const minutes = date.getMinutes().toString().padStart(2, "0");

    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;

    return `${hours}:${minutes} ${ampm} ${day}/${month}/${year}`;
  };

  const handleDateSelected = (_, selected) => {
    if (!selected) {
      setShowPicker(false);
      return;
    }

    const current = new Date(selected);

    // Si es fecha → abrir hora
    if (pickerMode === "date") {
      setPickerMode("time");
      onChange(current);
      return;
    }

    // Si seleccionamos hora, terminamos
    if (pickerMode === "time") {
      const prev = ensureDateInstance(value);
      prev.setHours(current.getHours(), current.getMinutes());
      onChange(new Date(prev));

      setShowPicker(false);
      setPickerMode("date");
    }
  };

  const openPicker = () => {
    setPickerMode("date");
    setShowPicker(true);
  };

  const selectedDate = ensureDateInstance(value);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>

      {/* Input visual */}
      <TouchableOpacity
        style={[styles.input, showPicker && styles.inputActive]}
        onPress={openPicker}
        activeOpacity={0.7}
      >
        <Text style={[styles.inputText, !value && styles.placeholderText]}>
          {value ? formatDateTime(selectedDate) : "hh:mm - dd/mm/aaaa"}
        </Text>

        <FontAwesome name="calendar-o" size={22} color="#6b7280" />
      </TouchableOpacity>

      {/* Date + Time Picker */}
      {showPicker && (
        <DateTimePicker
          value={selectedDate}
          mode={pickerMode}
          display="default"
          onChange={handleDateSelected}
          is24Hour={false}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginBottom: 20,
  },
  label: {
    fontSize: 15,
    marginBottom: 6,
    fontWeight: "500",
    color: "#374151",
  },
  input: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#ffffff",
    borderRadius: 10,
    borderWidth: 1.5,
    borderColor: "#d1d5db",
  },
  inputActive: {
    borderColor: "#2563eb",
    shadowColor: "#2563eb",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  inputText: {
    fontSize: 16,
    color: "#111827",
  },
  placeholderText: {
    color: "#9ca3af",
  },
});
