import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Welcome👽</Text>
      {/* <Button
        title="Details"
        onPress={() => navigation.navigate("Details", { id: "1" })}
      /> */}
      <Button title="Battery" onPress={() => navigation.navigate("Battery")} />
      <Button
        title="Device Info"
        onPress={() => navigation.navigate("DeviceInfo")}
      />
      <Button title="Video" onPress={() => navigation.navigate("Video")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  textContainer: {
    marginTop: 15,
    fontSize: 20,
  },
});
