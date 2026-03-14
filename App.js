//  import React from "react";
// import { StatusBar } from "expo-status-bar";
// import {
//   useFonts,
//   Poppins_400Regular,
//   Poppins_500Medium,
//   Poppins_600SemiBold,
//   Poppins_700Bold,
// } from "@expo-google-fonts/poppins";
// import {
//   Nunito_400Regular,
//   Nunito_700Bold,
// } from "@expo-google-fonts/nunito";
// import { View, ActivityIndicator, StyleSheet } from "react-native";
// import HomeScreen from "./src/screens/HomeScreen";
// import { COLORS } from "./src/utils/theme";

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     Poppins_400Regular,
//     Poppins_500Medium,
//     Poppins_600SemiBold,
//     Poppins_700Bold,
//     Nunito_400Regular,
//     Nunito_700Bold,
//   });

//   if (!fontsLoaded) {
//     return (
//       <View style={styles.splash}>
//         <ActivityIndicator color={COLORS.primary} size="large" />
//       </View>
//     );
//   }

//   return (
//     <View style={{ flex: 1 }}>
//       <StatusBar style="light" backgroundColor={COLORS.background} />
//       <HomeScreen />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   splash: {
//     flex: 1,
//     backgroundColor: COLORS.background,
//     justifyContent: "center",
//     alignItems: "center",
//   },
// });
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  useFonts,
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";
import { View, ActivityIndicator, StyleSheet } from "react-native";
import HomeScreen from "./src/screens/HomeScreen";
import { COLORS } from "./src/utils/theme";

export default function App() {
  const [fontsLoaded] = useFonts({
    Poppins_400Regular,
    Poppins_500Medium,
    Poppins_600SemiBold,
    Poppins_700Bold,
  });

  if (!fontsLoaded) {
    return (
      <View style={styles.splash}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    );
  }

  return (
    <>
      <StatusBar style="light" backgroundColor={COLORS.primary} />
      <HomeScreen />
    </>
  );
}

const styles = StyleSheet.create({
  splash: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center",
  },
});
