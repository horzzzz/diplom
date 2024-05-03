import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/screens/MainScreen';
import RegistrtationScreen from './src/screens/RegistrationScreen';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';






const Stack = createStackNavigator();
const App: React.FC = () => {
  return (
    <View style = {{flex: 1}}>
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="RegistrationScreen" component={RegistrtationScreen} />
        <Stack.Screen name="MainScreen" component={MainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};

export default App;
