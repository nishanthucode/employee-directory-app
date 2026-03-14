const BASE_URL = "https://jsonplaceholder.typicode.com";

export const fetchUsers = async () => {
  try {
    const response = await fetch(`${BASE_URL}/users`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching users:", error);
    throw error;
  }
};
