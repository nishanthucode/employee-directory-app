import { useState, useEffect } from "react";
import { fetchUsers } from "../services/api";
import { saveSelectedCity, loadSelectedCity } from "../utils/storage";

export const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [cities, setCities] = useState(["All"]);
  const [selectedCity, setSelectedCity] = useState("All");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Load users and restore persisted city selection
  useEffect(() => {
    const init = async () => {
      try {
        setLoading(true);
        const [data, savedCity] = await Promise.all([
          fetchUsers(),
          loadSelectedCity(),
        ]);

        const uniqueCities = [
          "All",
          ...new Set(data.map((u) => u.address.city)),
        ];

        setUsers(data);
        setCities(uniqueCities);
        setSelectedCity(savedCity);
        setFilteredUsers(
          savedCity === "All"
            ? data
            : data.filter((u) => u.address.city === savedCity)
        );
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    init();
  }, []);

  const selectCity = async (city) => {
    setSelectedCity(city);
    await saveSelectedCity(city);
    setFilteredUsers(
      city === "All" ? users : users.filter((u) => u.address.city === city)
    );
  };

  return {
    users,
    cities,
    selectedCity,
    filteredUsers,
    loading,
    error,
    selectCity,
  };
};
