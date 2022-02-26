import { Routes } from '#constants/routes';
import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { Text } from 'react-native';
import { IForzaComponentProps } from '#components/private/Forza/types/forzaInterfaces';

const HomeScreen = (_props: IForzaComponentProps) => {
  const navigation = useNavigation();
  const isSessionActive = (): boolean => {
    return false;
  };

  const closeSession = (): void => {
    setTimeout(() => navigation.navigate(Routes.Login), 15000);
  };

  useEffect(() => {
    if (!isSessionActive()) {
      closeSession();
    }
  });

  return <Text>I'm the HomeScreen</Text>;
};

export default HomeScreen;
