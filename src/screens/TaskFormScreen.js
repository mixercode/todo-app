import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import globalStyles from "../styles/globalStyles";
import Input from "../components/Input";
import DateInput from "../components/DateInput";
import Button from "../components/Button";
import { useTasksContext } from "../context/TasksContext";

export default function TaskFormScreen() {
  const navigation = useNavigation();
  const [date, setDate] = useState(null);
  const [titulo, setTitulo] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const { addTask } = useTasksContext();

  const handleAddTask = (title) => {
    addTask(title);
    navigation.goBack();
  };

  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nueva tarea</Text>
      </View>
      <View style={styles.body}>
        <Input
          label="Titulo"
          placeholder="Hacer tarea de matematicas"
          value={titulo}
          onChangeText={setTitulo}
        />
        <Input
          label="Descripcion"
          placeholder="Agrega un descripcion"
          inputType="textarea"
          value={descripcion}
          onChangeText={setDescripcion}
        />

        <DateInput
          label="Fecha de vencimiento"
          value={date}
          onChange={setDate}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          buttonType="secondary"
          text="Cancelar"
          onPress={() => navigation.goBack()}
        />
        <Button
          buttonType="primary"
          text="Añadir"
          onPress={() => handleAddTask(titulo)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0",
  },
  headerTitle: {
    width: "90%",
    fontSize: 20,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  body: {
    flex: 1,
    padding: 16,
    gap: 20,
  },
  buttonContainer: {
    flexDirection: "row",
    gap: 12,
    padding: 16,
    borderTopWidth: 1,
    borderTopColor: "#e0e0e0",
  },
});
