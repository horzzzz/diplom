import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TownsScreen from './towns/TownsScreen';
import UserPageScreen from './UserPageScreen';

const Tab = createBottomTabNavigator();



const MainScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateToTownsScreen = () => {
    navigation.navigate('TownsScreen' as never);
  };

  const navigateToUserPageScreen = () => {
    navigation.navigate('UserPageScreen' as never);
  };


  return (
    <View>
      <Text>MainScreen</Text>
      <Button title="Go to TownsScreen" onPress={navigateToTownsScreen} />
      <Button title="Go to UserPageScreen" onPress={navigateToUserPageScreen} />
    </View>
  );
};

export default MainScreen;