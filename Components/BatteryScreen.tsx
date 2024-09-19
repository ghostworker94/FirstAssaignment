import { useBatteryLevel } from "expo-battery";
import { StyleSheet, Text, View } from "react-native";

export default function BatteryScreen() {
  const batteryLevel = useBatteryLevel() * 100;

  return (
    <View>
      <Text>Current Battery Level: {batteryLevel.toPrecision(4)}%</Text>
    </View>
  );
}
