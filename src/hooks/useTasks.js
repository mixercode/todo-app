import { useCallback, useEffect, useState } from "react";
import { saveTasks, loadTasks } from "../utils/storage";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      setLoading(false);
      const saved = await loadTasks();
      setTasks(saved);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    if (!loading) saveTasks(tasks);
  }, [tasks]);

  const addTask = useCallback((title) => {
    const newTask = {
      id: Date.now().toString(),
      title,
      status: "Pending",
      createdAt: new Date().toISOString(),
    };
    setTasks((prev) => [...prev, newTask]);
  }, []);

  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) =>
        t.id === id
          ? { ...t, status: t.status === "Completed" ? "Pending" : "Completed" }
          : t
      )
    );
  }, []);

  const deleteTask = useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const clearTasks = useCallback(() => setTasks([]), []);

  return {
    tasks,
    loading,
    addTask,
    toggleTask,
    deleteTask,
    clearTasks,
  };
}
