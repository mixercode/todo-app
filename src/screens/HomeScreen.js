import React, { useMemo, useState } from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import globalStyles from "../styles/globalStyles";
import SearchBar from "../components/SearchBar";
import TaskFilter from "../components/TaskFilter";
import TaskCard from "../components/TaskCard";
import FloatingActionButton from "../components/FloatingActionButton";

export default function HomeScreen() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Design the new onboarding flow",
      status: "Active",
      priority: true,
    },
    { id: "2", title: "Fix API error", status: "Completed", priority: false },
    {
      id: "3",
      title: "Plan sprint backlog",
      status: "Active",
      priority: false,
    },
    {
      id: "4",
      title: "Design the new onboarding flow",
      status: "Active",
      priority: true,
    },
    { id: "5", title: "Fix API error", status: "Completed", priority: false },
    {
      id: "6",
      title: "Plan sprint backlog",
      status: "Active",
      priority: false,
    },
    {
      id: "7",
      title: "Design the new onboarding flow",
      status: "Active",
      priority: true,
    },
    { id: "8", title: "Fix API error", status: "Completed", priority: false },
    {
      id: "9",
      title: "Plan sprint backlog",
      status: "Active",
      priority: false,
    },
    {
      id: "10",
      title: "Design the new onboarding flow",
      status: "Active",
      priority: true,
    },
    { id: "11", title: "Fix API error", status: "Completed", priority: false },
    {
      id: "12",
      title: "Plan sprint backlog",
      status: "Active",
      priority: false,
    },
  ]);
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

  const handleToggleTask = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id
          ? {
              ...task,
              status: task.status === "Activo" ? "Completado" : "Activo",
            }
          : task
      )
    );
  };

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
      <FloatingActionButton />
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
