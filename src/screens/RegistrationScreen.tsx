import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrtationScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateToMainScreen = () => {
    navigation.navigate('MainScreen' as never);
  };

  return (
    <View>
      <Text>RegistrationScreen</Text>
      <Button title="Go to ..." onPress={navigateToMainScreen} />
    </View>
  );
};

export default RegistrtationScreen;