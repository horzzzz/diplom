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
      <Button title="Tiraspol" onPress={navigateToTiraspolScreen} />
      <Button title="Bendery" onPress={navigateToBenderyScreen} />
      <Button title="Dnestrovsk" onPress={navigateToDnestrovskScreen} />
      <Button title="Dubossary" onPress={navigateToDubossaryScreen} />
      <Button title="Grigoriopol" onPress={navigateToGrigoriopolScreen} />
      <Button title="Kamenka" onPress={navigateToKamenkaScreen} />
      <Button title="Rybnitsa" onPress={navigateToRybnitsaScreen} />
      <Button title="Slobodzeya" onPress={navigateToSlobodzeyaScreen} />
    </View>
  );
};

export default TownsScreen;