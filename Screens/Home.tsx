import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StatusBar, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;

export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Button title="Details" onPress={() => navigation.navigate("Details")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
