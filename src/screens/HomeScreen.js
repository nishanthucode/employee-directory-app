import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Text,
} from "react-native";
import { useUsers } from "../hooks/useUsers";
import AppHeader from "../components/AppHeader";
import HeaderBanner from "../components/HeaderBanner";
import CityFilter from "../components/CityFilter";
import UserCard from "../components/UserCard";
import DrawerMenu from "../components/DrawerMenu";
import LoadingScreen from "../components/LoadingScreen";
import ErrorScreen from "../components/ErrorScreen";
import { COLORS, FONTS, SPACING } from "../utils/theme";

export default function HomeScreen() {
  const { cities, selectedCity, filteredUsers, loading, error, selectCity } =
    useUsers();
  const [drawerOpen, setDrawerOpen] = useState(false);

  if (loading) return <LoadingScreen />;
  if (error) return <ErrorScreen message={error} onRetry={() => {}} />;

  return (
    <View style={styles.container}>
      {/* Blue top header */}
      <AppHeader onMenuPress={() => setDrawerOpen(true)} />

      {/* Main scrollable content */}
      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => <UserCard user={item} />}
        ListHeaderComponent={
          <>
            {/* HELLO banner image */}
            <HeaderBanner />

            {/* City filter chips */}
            <CityFilter
              cities={cities}
              selectedCity={selectedCity}
              onSelect={selectCity}
            />
          </>
        }
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <View style={styles.empty}>
            <Text style={styles.emptyText}>No employees found</Text>
          </View>
        }
      />

      {/* Slide-in drawer */}
      <DrawerMenu
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
  },
  empty: {
    alignItems: "center",
    paddingTop: 60,
  },
  emptyText: {
    fontFamily: FONTS.regular,
    fontSize: 14,
    color: COLORS.textSecondary,
  },
});
