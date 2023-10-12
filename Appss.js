// import * as SplashScreen from "expo-splash-screen";
// import { useFonts } from "expo-font";
// import { SafeAreaProvider } from "react-native-safe-area-context";
// import { NavigationContainer } from "@react-navigation/native";
// import { createNativeStackNavigator } from "@react-navigation/native-stack";
// import { useCallback } from "react";
// import { Login, Register, Verification } from "./screens";

// SplashScreen.preventAutoHideAsync();
// const Stack = createNativeStackNavigator();

// export default function App() {
//   const [fontsLoaded] = useFonts({
//     regular: require("./assets/fonts/Sen-Regular.ttf"),
//     bold: require("./assets/fonts/Sen-Bold.ttf"),
//     extraBold: require("./assets/fonts/Sen-ExtraBold.ttf")
//   });

//   const onLayoutRootView = useCallback(async () => {
//     if (fontsLoaded) {
//       await SplashScreen.hideAsync()
//     }
//   }, [fontsLoaded]);

//   if (!fontsLoaded) {
//     return null
//   }
//   return (
//     <SafeAreaProvider onLayout={onLayoutRootView}>
//       <NavigationContainer>
//         <Stack.Navigator
//           initialRouteName="Register"
//         >
//           <Stack.Screen
//             name="Login"
//             component={Login}
//             options={{
//               headerShown: false
//             }}
//           />
//           <Stack.Screen
//             name="Register"
//             component={Register}
//             options={{
//               headerShown: false
//             }}
//           />
//           <Stack.Screen
//             name="Verification"
//             component={Verification}
//             options={{
//               headerShown: false
//             }}
//           />
//         </Stack.Navigator>
//       </NavigationContainer>
//     </SafeAreaProvider>
//   );
// }

