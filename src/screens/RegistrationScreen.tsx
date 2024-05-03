import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrtationScreen: React.FC = () => {
  const navigation = useNavigation();

  return (
    <View>
      <Text>RegistrationScreen</Text>
    </View>
  );
};

export default RegistrtationScreen;