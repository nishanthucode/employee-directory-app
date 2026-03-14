import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { COLORS, FONTS, SPACING } from "../utils/theme";

export default function ErrorScreen({ message, onRetry }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Failed to load employees</Text>
      <Text style={styles.message}>{message}</Text>
      <TouchableOpacity style={styles.button} onPress={onRetry}>
        <Text style={styles.buttonText}>Retry</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
    padding: SPACING.xl,
    gap: 12,
  },
  title: {
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
  message: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: COLORS.textSecondary,
    textAlign: "center",
  },
  button: {
    marginTop: 8,
    backgroundColor: COLORS.primary,
    borderRadius: 4,
    paddingHorizontal: 28,
    paddingVertical: 10,
  },
  buttonText: {
    fontFamily: FONTS.semiBold,
    fontSize: 14,
    color: COLORS.white,
  },
});
