import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { DetailsScreen } from "./Screens/Details";
import { HomeScreen } from "./Screens/Home";
import BatteryScreen from "./Screens/BatteryScreen";
import DeviceInfo from "./Screens/DeviceInfoScreen";

export type RootStackParamList = {
  Home: undefined;
  Details: { id: string };
  Battery: undefined;
  DeviceInfo: undefined;
};

const RootStack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <RootStack.Navigator initialRouteName="Home">
        <RootStack.Screen name="Home" component={HomeScreen} />
        {/* <RootStack.Screen name="Details" component={DetailsScreen} /> */}
        <RootStack.Screen name="Battery" component={BatteryScreen} />
        <RootStack.Screen name="DeviceInfo" component={DeviceInfo} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}
