import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import {HomeScreen} from './Screens/Home';
import BatteryScreen from './Screens/BatteryScreen';
import DeviceInfo from './Screens/DeviceInfoScreen';
import VideoScreen from './Screens/VideoScreen';
import {TodoList} from './Screens/TodoList';

export type RootStackParamList = {
  Home: undefined;
  Details: { id: string };
  Battery: undefined;
  DeviceInfo: undefined;
  Video: undefined;
  Todo: undefined;
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
        <RootStack.Screen name="Video" component={VideoScreen} />
        <RootStack.Screen name="Todo" component={TodoList} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}