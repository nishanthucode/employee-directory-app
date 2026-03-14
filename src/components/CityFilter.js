import React from "react";
import {
  ScrollView,
  TouchableOpacity,
  Text,
  StyleSheet,
  View,
} from "react-native";
import { COLORS, FONTS, SPACING } from "../utils/theme";

function CityChip({ label, isSelected, onPress }) {
  return (
    <TouchableOpacity
      onPress={() => onPress(label)}
      activeOpacity={0.7}
      style={[styles.chip, isSelected ? styles.chipSelected : styles.chipUnselected]}
    >
      <Text style={[styles.chipText, isSelected ? styles.chipTextSelected : styles.chipTextUnselected]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

export default function CityFilter({ cities, selectedCity, onSelect }) {
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {cities.map((city) => (
          <CityChip
            key={city}
            label={city}
            isSelected={selectedCity === city}
            onPress={onSelect}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingVertical: SPACING.sm,
  },
  scrollContent: {
    paddingHorizontal: SPACING.md,
    gap: 8,
  },
  chip: {
    borderRadius: 4,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 6,
  },
  chipSelected: {
    backgroundColor: COLORS.primary,
    borderColor: COLORS.primary,
  },
  chipUnselected: {
    backgroundColor: COLORS.white,
    borderColor: COLORS.border,
  },
  chipText: {
    fontFamily: FONTS.medium,
    fontSize: 13,
  },
  chipTextSelected: {
    color: COLORS.white,
  },
  chipTextUnselected: {
    color: COLORS.textPrimary,
  },
});
