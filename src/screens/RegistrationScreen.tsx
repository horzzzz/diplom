import * as React from 'react';
import { View, Button, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegistrtationScreen: React.FC = () => {
  const navigation = useNavigation();

  const navigateToMyTabs = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'MyTabs' as never}],
    });
  };

  return (
    <View>
      <Text>RegistrationScreen</Text>
      <Button title="Go to ..." onPress={navigateToMyTabs} />
    </View>
  );
};

export default RegistrtationScreen;