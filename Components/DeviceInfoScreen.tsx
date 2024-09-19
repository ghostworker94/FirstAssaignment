import * as Device from "expo-device";
import { Text, View } from "react-native";

export default function DeviceInfo() {
  return (
    <View>
      <Text>Manufacturer: {Device.manufacturer}</Text>
      <Text>Model: {Device.modelName}</Text>
    </View>
  );
}
