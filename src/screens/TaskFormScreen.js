import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import AntDesign from "@expo/vector-icons/AntDesign";
import globalStyles from "../styles/globalStyles";
import Input from "../components/Input";

export default function TaskFormScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView style={globalStyles.safeArea}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Nueva tarea</Text>
      </View>
      <View style={styles.body}>
        <Input label="Titulo" placeholder="Hacer tarea de matematicas" />
        <Input
          label="Descripcion"
          placeholder="Agrega un descripcion"
          inputType="textarea"
        />
        <Input type="date" />
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
});
