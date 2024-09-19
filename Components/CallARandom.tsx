import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Button } from 'react-native';
import * as Linking from 'expo-linking';

export default function CallARandom() {
  const generateRandomPhoneNumber = () => {
    let phoneNumber = '+467';
    for (let i = 0; i < 8; i++) {
      phoneNumber += Math.floor(Math.random() * 10).toString();
    }
    return phoneNumber;
  };
  
  const makeCall = () => {
    const phoneNumber = generateRandomPhoneNumber();
    Linking.openURL(`tel:${phoneNumber}`);
  };

  return (
    <View>
      <Button title="Call Random Number" onPress={makeCall} />
      <StatusBar style="auto" />
    </View>
  );
}