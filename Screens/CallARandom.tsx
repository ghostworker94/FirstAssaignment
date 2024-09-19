import React, { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { View, Button, Alert } from 'react-native';
import * as Linking from 'expo-linking';
import * as Contacts from 'expo-contacts';

export default function CallARandom() {
  const [contacts, setContacts] = useState<Contacts.Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContacts = async () => {
      const { status } = await Contacts.requestPermissionsAsync();
      if (status === 'granted') {
        const { data } = await Contacts.getContactsAsync({
          fields: [Contacts.Fields.PhoneNumbers],
        });
        if (data.length > 0) {
          setContacts(data);
        } else {
          Alert.alert('No contacts found');
        }
      } else {
        Alert.alert('Permission to access contacts was denied');
      }
      setLoading(false);
    };

    fetchContacts();
  }, []);

  const generateRandomPhoneNumber = () => {
    let phoneNumber = '+467';
    for (let i = 0; i < 8; i++) {
      phoneNumber += Math.floor(Math.random() * 10).toString();
    }
    return phoneNumber;
  };

  const makeCall = () => {
    if (Math.random() < 0.5) {
      const phoneNumber = generateRandomPhoneNumber();
      Linking.openURL(`tel:${phoneNumber}`);
    } else {
      if (contacts.length === 0) {
        const phoneNumber = generateRandomPhoneNumber();
        Linking.openURL(`tel:${phoneNumber}`);
      }

      const randomContact = contacts[Math.floor(Math.random() * contacts.length)];
      const phoneNumber = randomContact.phoneNumbers?.[0]?.number;

      if (phoneNumber) {
        Linking.openURL(`tel:${phoneNumber}`);
      } else {
        Alert.alert('Selected contact has no phone number');
      }
    }
  };

  if (loading) {
    return (
      <View>
        <StatusBar style="auto" />
        <Button title="Loading contacts..." disabled />
      </View>
    );
  }

  return (
    <View>
      <Button title="Call Random Number" onPress={makeCall} />
      <StatusBar style="auto" />
    </View>
  );
}