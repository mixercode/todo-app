import { useCallback, useEffect, useState } from "react";
import { saveTasks, loadTasks } from "../utils/storage";

export default function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      const savedTasks = await loadTasks();
      setTasks(savedTasks);
      setLoading(false);
    };
    fetchTasks();
  }, []);

  useEffect(() => {
    if (!loading) {
      saveTasks(tasks);
    }
  }, [tasks, loading]);

  const addTask = useCallback(({ title, description, dueDate }) => {
    if (!title.trim()) return;

    const newTask = {
      id: Date.now().toString(),
      title,
      description,
      status: "Pending",
      dueDate,
    };
    setTasks((prev) => [...prev, newTask]);
  }, []);

  const updateTask = useCallback((updateTask) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === updateTask.id ? { ...t, ...updateTask } : t))
    );
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
    updateTask,
    toggleTask,
    deleteTask,
    clearTasks,
  };
}
