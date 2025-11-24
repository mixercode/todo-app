import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation, useRoute } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import globalStyles from "../styles/globalStyles";
import Input from "../components/Input";
import DateInput from "../components/DateInput";
import Button from "../components/Button";
import { useTasksContext } from "../context/TasksContext";

export default function TaskFormScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { addTask, updateTask } = useTasksContext();

  const editingTask = route.params?.task || null;
  const isEditing = Boolean(editingTask);

  const [title, setTitle] = useState(editingTask?.title || "");
  const [description, setDescription] = useState(
    editingTask?.description || ""
  );
  const [dueDate, setDueDate] = useState(editingTask?.dueDate || null);

  const handleSubmit = () => {
    if (isEditing) {
      updateTask({
        ...editingTask,
        title,
        description,
        dueDate,
      });
    } else {
      addTask({
        title,
        description,
        dueDate,
      });
    }
    navigation.goBack();
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <SafeAreaView style={globalStyles.safeArea}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>
            {isEditing ? "Editar Tarea" : "Nueva tarea"}
          </Text>
        </View>

        <View style={styles.body}>
          <Input
            label="Titulo"
            placeholder="Hacer tarea de matematicas"
            value={title}
            onChangeText={setTitle}
          />
          <Input
            label="Descripcion"
            placeholder="Agrega un descripcion"
            inputType="textarea"
            value={description}
            onChangeText={setDescription}
          />

          <DateInput
            label="Fecha de vencimiento"
            value={dueDate}
            onChange={setDueDate}
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
            text={isEditing ? "Guardar cambios" : "Añadir"}
            onPress={handleSubmit}
          />
        </View>
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
