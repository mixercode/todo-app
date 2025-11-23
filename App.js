import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigation/RootNavigator";
import { TasksProvider } from "./src/context/TasksContext";

export default function App() {
  return (
    <TasksProvider>
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </TasksProvider>
  );
}
