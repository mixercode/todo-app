import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/globalStyles";
import SearchBar from "../components/SearchBar";
import TaskFilter from "../components/TaskFilter";
import TaskCard from "../components/TaskCard";
import FloatingActionButton from "../components/FloatingActionButton";
import useTasks from "../hooks/useTasks";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { tasks, loading, addTask, toggleTask, deleteTask, clearTasks } =
    useTasks();

  const [filter, setFilter] = useState("Todos");

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "Todos":
        return tasks;
      case "Activos":
        return tasks.filter((t) => t.status === "Active");
      case "Completados":
        return tasks.filter((t) => t.status === "Completed");
      default:
        return tasks;
    }
  }, [filter]);

  const getFormattedDate = () => {
    const date = new Date();
    const options = {
      weekday: "long",
      day: "numeric",
      month: "short",
    };
    const formattedDate = new Intl.DateTimeFormat("es-ES", options).format(
      date
    );

    return formattedDate.charAt(0).toUpperCase() + formattedDate.slice(1);
  };

  return (
    <View style={globalStyles.safeArea}>
      <ScrollView contentContainerStyle={globalStyles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{getFormattedDate()}</Text>
          <Text style={styles.subtitle}>Buenos dias 😊 </Text>
        </View>

        <SearchBar />

        <TaskFilter selectedFilter={filter} onChangeFilter={setFilter} />

        {filteredTasks.map((task) => (
          <TaskCard
            key={task.id}
            title={task.title}
            status={task.status}
            onToggle={() => handleToggleTask(task.id)}
          />
        ))}
      </ScrollView>
      <FloatingActionButton onPress={() => navigation.navigate("TaskForm")} />
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 34,
    fontWeight: "bold",
    fontFamily: "Inter",
  },
  subtitle: {
    fontSize: 18,
  },
});
