import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import * as Network from 'expo-network';

export const IpAddress = () => {

  const [ip, setIp] = useState<string | null>(null);

  useEffect(() => {

    const fetchIp = async () => {
      const ipAddress = await Network.getIpAddressAsync();
      setIp(ipAddress);
    };
    fetchIp();
  }, []);

  return <Text>Your Ip Adress: {ip ? ip : 'Loading...'}</Text>;
};
