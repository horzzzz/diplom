import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TownsScreen from './towns/TownsScreen';
import UserPageScreen from './UserPageScreen';

const Tab = createBottomTabNavigator();



const MainScreen: React.FC = () => {
  const navigation = useNavigation();


  return (
    <View>
      <Text>Открой для себя Приднестровье!</Text>
      <Text>Сувениры!</Text>
      <Text>Факты!</Text>
    </View>
  );
};

export default MainScreen;