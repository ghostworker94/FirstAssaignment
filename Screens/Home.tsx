import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Button, StyleSheet, Text, View } from "react-native";
import { RootStackParamList } from "../App";
import CallARandom from "./CallARandom";

type HomeScreenProps = NativeStackScreenProps<RootStackParamList, "Home">;


export function HomeScreen({ navigation }: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textContainer}>Welcome👽</Text>
      <Button
        title="Phone Details"
        onPress={() => navigation.navigate("Details")}
      /> 
      <Button title="Video" onPress={() => navigation.navigate("Video")} />
      <Button title="Add Todo" onPress={() => navigation.navigate("Todo")} />
      <CallARandom/>
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
