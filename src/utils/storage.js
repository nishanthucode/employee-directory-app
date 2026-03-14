import AsyncStorage from "@react-native-async-storage/async-storage";

const SELECTED_CITY_KEY = "@UserExplorer:selectedCity";

export const saveSelectedCity = async (city) => {
  try {
    await AsyncStorage.setItem(SELECTED_CITY_KEY, city);
  } catch (error) {
    console.error("Error saving selected city:", error);
  }
};

export const loadSelectedCity = async () => {
  try {
    const city = await AsyncStorage.getItem(SELECTED_CITY_KEY);
    return city !== null ? city : "All";
  } catch (error) {
    console.error("Error loading selected city:", error);
    return "All";
  }
};
