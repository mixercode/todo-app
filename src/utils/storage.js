import AsyncStorage from "@react-native-async-storage/async-storage";

const STOTRAGE_KEY = "@tasks";

export const saveTasks = async (tasks) => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem(STOTRAGE_KEY, jsonValue);
  } catch (error) {
    console.error("Error al guardar las tareas: ", error);
  }
};

export const loadTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem(STOTRAGE_KEY);
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Error al cargar tareas: ", error);
    return [];
  }
};
