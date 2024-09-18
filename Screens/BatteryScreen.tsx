import { useBatteryLevel } from "expo-battery";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  const batteryLevel = useBatteryLevel() * 100;

  return (
    <View style={styles.container}>
      <Text>Current Battery Level: {batteryLevel}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
  },
});
