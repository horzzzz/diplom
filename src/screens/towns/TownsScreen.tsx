import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const TownsScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateToBenderyScreen = () => {
    navigation.navigate('BenderyScreen' as never);
  };

  const navigateToDnestrovskScreen = () => {
    navigation.navigate('DnestrovskScreen' as never);
  };

  const navigateToDubossaryScreen = () => {
    navigation.navigate('DubossaryScreen' as never);
  };

  const navigateToGrigoriopolScreen = () => {
    navigation.navigate('GrigoriopolScreen' as never);
  };

  const navigateToKamenkaScreen = () => {
    navigation.navigate('KamenkaScreen' as never);
  };

  const navigateToRybnitsaScreen = () => {
    navigation.navigate('RybnitsaScreen' as never);
  };

  const navigateToSlobodzeyaScreen = () => {
    navigation.navigate('SlobodzeyaScreen' as never);
  };

  const navigateToTiraspolScreen = () => {
    navigation.navigate('TiraspolScreen' as never);
  };

  return (
    <View>
      <Text>TownsScreen</Text>
      <Button title="Go to BenderyScreen" onPress={navigateToBenderyScreen} />
      <Button title="Go to DnestrovskScreen" onPress={navigateToDnestrovskScreen} />
      <Button title="Go to DubossaryScreen" onPress={navigateToDubossaryScreen} />
      <Button title="Go to GrigoriopolScreen" onPress={navigateToGrigoriopolScreen} />
      <Button title="Go to KamenkaScreen" onPress={navigateToKamenkaScreen} />
      <Button title="Go to RybnitsaScreen" onPress={navigateToRybnitsaScreen} />
      <Button title="Go to SlobodzeyaScreen" onPress={navigateToSlobodzeyaScreen} />
      <Button title="Go to TiraspolScreen" onPress={navigateToTiraspolScreen} />
    </View>
  );
};

export default TownsScreen;