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
import Edetails from "./ScreenApp/cardPages/Edetails";
import Data from "./ScreenApp/Data";
import Addmoredetails from "./ScreenApp/screens/Addmoredetails";
import EmployeeDashboard from "./Dashboard/EmployeeDashboard";
import Pendingdata from "./ScreenApp/screens/Pendingdata";
import RateApp from "./ScreenApp/screens/RateApp";
import BlankPage from "./ScreenApp/screens/BlankPage";
import Disbursaldata from "./ScreenApp/Disbursaldata";
import Rejecteddata from "./ScreenApp/Rejecteddata";

SplashScreen.preventAutoHideAsync();
const Stack = createNativeStackNavigator();

export default function App() {
  const [fontsLoaded] = useFonts({
    regular: require("./assets/fonts/Sen-Regular.ttf"),
    bold: require("./assets/fonts/Sen-Bold.ttf"),
    extraBold: require("./assets/fonts/Sen-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  return (
    <SafeAreaProvider onLayout={onLayoutRootView}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Phoneregister">
          <Stack.Screen
            name="Register"
            component={Register}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="EmployeeDashboard"
            component={EmployeeDashboard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Phoneregister"
            component={Phoneregister}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Verification"
            component={Verification}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Employee"
            component={Employee}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Customer"
            component={Customer}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Partner"
            component={Partner}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Menu"
            component={Menu}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Home"
            component={Home}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Edetails"
            component={Edetails}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="Data"
            component={Data}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Addmoredetails"
            component={Addmoredetails}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Pendingdata"
            component={Pendingdata}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="RateApp"
            component={RateApp}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="BlankPage"
            component={BlankPage}
            options={{
              headerShown: false,
            }}
          />

          <Stack.Screen
            name="Disbursaldata"
            component={Disbursaldata}
            options={{
              headerShown: false,
            }}
          />

    
          <Stack.Screen
            name="Rejecteddata"
            component={Rejecteddata}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
}
