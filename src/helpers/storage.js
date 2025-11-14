import AsyncStorage from "@react-native-async-storage/async-storage";

export const saveTasks = async (tasks) => {
  try {
    const jsonValue = JSON.stringify(tasks);
    await AsyncStorage.setItem("@tasks", jsonValue);
  } catch (error) {
    console.error("Error al guardar las tareas: ", error);
  }
};

export const loadTasks = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@tasks");
    return jsonValue ? JSON.parse(jsonValue) : [];
  } catch (error) {
    console.error("Error al cargar tareas: ", error);
    return [];
  }
};
