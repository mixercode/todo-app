import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useNavigation } from "@react-navigation/native";
import globalStyles from "../styles/globalStyles";
import SearchBar from "../components/SearchBar";
import TaskFilter from "../components/TaskFilter";
import TaskCard from "../components/TaskCard";
import FloatingActionButton from "../components/FloatingActionButton";
import { useTasksContext } from "../context/TasksContext";

export default function HomeScreen() {
  const navigation = useNavigation();
  const { tasks, toggleTask } = useTasksContext();

  const [filter, setFilter] = useState("Todos");

  const filteredTasks = useMemo(() => {
    switch (filter) {
      case "Todos":
        return tasks;
      case "Pendientes":
        return tasks.filter((t) => t.status === "Pending");
      case "Completados":
        return tasks.filter((t) => t.status === "Completed");
      default:
        return tasks;
    }
  }, [filter, tasks]);

  const handleToggleTask = (id) => {
    toggleTask(id);
  };

  const getFormattedDate = () => {
    const date = new Date();
    const options = { weekday: "long", day: "numeric", month: "short" };
    const formatted = new Intl.DateTimeFormat("es-ES", options).format(date);
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  return (
    <View style={globalStyles.safeArea}>
      <ScrollView contentContainerStyle={globalStyles.container}>
        <View style={styles.header}>
          <Text style={styles.title}>{getFormattedDate()}</Text>
          <Text style={styles.subtitle}>Buenos días 😊</Text>
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
