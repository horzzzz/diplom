import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const MainScreen: React.FC = () => {
  const navigation = useNavigation();



  return (
    <View>
      <Text>MainScreen</Text>
    </View>
  );
};

export default MainScreen;