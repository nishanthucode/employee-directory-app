import React, { useRef, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
  Dimensions,
  TouchableWithoutFeedback,
  Modal,
  Platform,
  StatusBar,
} from "react-native";
import { COLORS, FONTS, SPACING } from "../utils/theme";

const { width } = Dimensions.get("window");
const DRAWER_WIDTH = width * 0.7;
const STATUSBAR_HEIGHT = Platform.OS === "android" ? StatusBar.currentHeight || 24 : 0;
const HEADER_HEIGHT = 56 + STATUSBAR_HEIGHT;

const MENU_ITEMS = [
  { label: "Settings" },
  { label: "About us" },
  { label: "Contact us" },
];

export default function DrawerMenu({ isOpen, onClose }) {
  const translateX = useRef(new Animated.Value(-DRAWER_WIDTH)).current;
  const backdropOpacity = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    if (isOpen) {
      translateX.setValue(-DRAWER_WIDTH);
      backdropOpacity.setValue(0);
      Animated.parallel([
        Animated.timing(translateX, {
          toValue: 0,
          duration: 280,
          useNativeDriver: true,
        }),
        Animated.timing(backdropOpacity, {
          toValue: 1,
          duration: 280,
          useNativeDriver: true,
        }),
      ]).start();
    }
  }, [isOpen]);

  const handleClose = () => {
    Animated.parallel([
      Animated.timing(translateX, {
        toValue: -DRAWER_WIDTH,
        duration: 250,
        useNativeDriver: true,
      }),
      Animated.timing(backdropOpacity, {
        toValue: 0,
        duration: 250,
        useNativeDriver: true,
      }),
    ]).start(() => {
      onClose();
    });
  };

  return (
    <Modal
      visible={isOpen}
      transparent={true}
      animationType="none"
      onRequestClose={handleClose}
      statusBarTranslucent={true}
    >
      <View style={styles.root}>
        {/* Empty space at top where the header is */}
        <View style={styles.headerSpace} />

        {/* Drawer + backdrop area below header */}
        <View style={styles.content}>
          {/* Dark backdrop */}
          <TouchableWithoutFeedback onPress={handleClose}>
            <Animated.View style={[styles.backdrop, { opacity: backdropOpacity }]} />
          </TouchableWithoutFeedback>

          {/* Drawer panel */}
          <Animated.View style={[styles.drawer, { transform: [{ translateX }] }]}>
            <View style={styles.menuList}>
              {MENU_ITEMS.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.menuItem}
                  onPress={handleClose}
                  activeOpacity={0.6}
                >
                  <Text style={styles.menuLabel}>{item.label}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  headerSpace: {
    height: HEADER_HEIGHT,
    backgroundColor: "transparent",
  },
  content: {
    flex: 1,
    flexDirection: "row",
  },
  backdrop: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  drawer: {
    width: DRAWER_WIDTH,
    height: "100%",
    backgroundColor: COLORS.white,
    elevation: 16,
    shadowColor: "#000",
    shadowOffset: { width: 2, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 10,
  },
  menuList: {
    paddingTop: 20,
    paddingHorizontal: SPACING.md,
  },
  menuItem: {
    paddingVertical: 14,
  },
  menuLabel: {
    fontFamily: FONTS.semiBold,
    fontSize: 16,
    color: COLORS.textPrimary,
  },
});
