import * as SplashScreen from "expo-splash-screen";
import { useFonts } from "expo-font";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useCallback } from "react";
import Phoneregister from "./ScreenApp/Phoneregister";
import Register from "./ScreenApp/Register";
import Verification from "./ScreenApp/Verification";
import Home from "./ScreenApp/Home";
import Employee from "./ScreenApp/cardPages/Employee";
import Customer from "./ScreenApp/cardPages/Customer";
import Partner from "./ScreenApp/cardPages/Partner";
import Menu from "./ScreenApp/Menu";

// import { Login, Register, Verification } from "./screens";
// import {Phoneregister, Register,Verification ,Auth} from "./ScreenApp";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Sen-Regular.ttf"),
    bold: require("./assets/fonts/Sen-Bold.ttf"),
    extraBold: require("./assets/fonts/Sen-ExtraBold.ttf")
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Phoneregister"
        >
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Phoneregister"
            component={Phoneregister}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Verification"
            component={Verification}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
            name="Employee"
            component={Employee}
            options={{
              headerShown: false
            }}
          />
          <Stack.Screen
          name="Customer"
          component={Customer}
          options={{
            headerShown: false
          }}
        />
          
        <Stack.Screen
        name="Partner"
        component={Partner}
        options={{
          headerShown: false
        }}
      />

      <Stack.Screen
      name="Menu"
      component={Menu}
      options={{
        headerShown: false
      }}
    />
    
          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

