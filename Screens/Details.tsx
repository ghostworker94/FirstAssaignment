import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import { IpAddress } from "../Components/IpAdress";
import DeviceInfo from "../Components/DeviceInfoScreen";
import BatteryScreen from "../Components/BatteryScreen";


export function DetailsScreen() {
  return (
    <View style={styles.container}>
      <IpAddress />
      <DeviceInfo />
      <BatteryScreen />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    gap: 15,
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
