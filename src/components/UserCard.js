import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { COLORS, FONTS, SPACING } from "../utils/theme";

export default function UserCard({ user }) {
  return (
    <View style={styles.row}>
      <View style={styles.left}>
        <Text style={styles.name}>{user.name}</Text>
        <Text style={styles.address}>{user.address.street}</Text>
        <Text style={styles.address}>{user.address.city}</Text>
      </View>
      <Text style={styles.designation}>{user.company.name.split(" ")[0]}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    paddingHorizontal: SPACING.md,
    paddingVertical: 12,
    backgroundColor: COLORS.white,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },
  left: {
    flex: 1,
    paddingRight: 8,
  },
  name: {
    fontFamily: FONTS.semiBold,
    fontSize: 15,
    color: COLORS.textPrimary,
    marginBottom: 2,
  },
  address: {
    fontFamily: FONTS.regular,
    fontSize: 13,
    color: COLORS.textSecondary,
    lineHeight: 19,
  },
  designation: {
    fontFamily: FONTS.regular,
    fontSize: 12,
    color: COLORS.textLight,
    marginTop: 2,
  },
});
