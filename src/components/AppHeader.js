import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, StatusBar } from "react-native";
import { COLORS, FONTS } from "../utils/theme";

const STATUSBAR_HEIGHT = Platform.OS === "android" ? StatusBar.currentHeight || 24 : 0;

export default function AppHeader({ onMenuPress }) {
  return (
    <View style={styles.header}>
      <TouchableOpacity onPress={onMenuPress} style={styles.menuBtn} activeOpacity={0.7}>
        <View style={styles.bar} />
        <View style={styles.bar} />
        <View style={styles.bar} />
      </TouchableOpacity>
      <Text style={styles.title}>Employees</Text>
      <View style={styles.placeholder} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingTop: STATUSBAR_HEIGHT,
    height: 56 + STATUSBAR_HEIGHT,
    backgroundColor: COLORS.primary,
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  menuBtn: {
    width: 36,
    height: 36,
    justifyContent: "center",
    gap: 5,
  },
  bar: {
    width: 22,
    height: 2.5,
    backgroundColor: COLORS.white,
    borderRadius: 2,
  },
  title: {
    flex: 1,
    textAlign: "center",
    fontFamily: FONTS.semiBold,
    fontSize: 18,
    color: COLORS.white,
    letterSpacing: 0.3,
  },
  placeholder: {
    width: 36,
  },
});
