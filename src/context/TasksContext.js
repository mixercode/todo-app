import { createContext, useContext } from "react";
import useTasks from "../hooks/useTasks";

const TaskContext = createContext();

export function TasksProvider({ children }) {
  const tasksState = useTasks();

  return (
    <TaskContext.Provider value={tasksState}>{children}</TaskContext.Provider>
  );
}

export function useTasksContext() {
  return useContext(TaskContext);
}
