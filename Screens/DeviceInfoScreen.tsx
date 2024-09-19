import * as Device from "expo-device";
import { Text, View } from "react-native";

export default function DeviceInfo() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 2,
      }}
    >
      <Text>Manufacturer: {Device.manufacturer}</Text>
      <Text>Model: {Device.modelName}</Text>
    </View>
  );
}
