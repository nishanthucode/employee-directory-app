import React from "react";
import { View, Image, StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

// Local HELLO banner image matching Figma design
const HEADER_IMAGE = require("../../assets/Rectangle.png");

export default function HeaderBanner() {
  return (
    <View style={styles.container}>
      <Image source={HEADER_IMAGE} style={styles.image} resizeMode="cover" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 160,
    backgroundColor: "#e8f0fe",
  },
  image: {
    width: "100%",
    height: "100%",
  },
});
