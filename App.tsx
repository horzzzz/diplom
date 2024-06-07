import React, { useEffect, useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import MainScreen from './src/screens/MainScreen';
import RegistrationScreen from './src/screens/RegistrationScreen';
import TownsScreen from './src/screens/towns/TownsScreen';
import BenderyScreen from './src/screens/towns/BenderyScreen';
import DnestrovskScreen from './src/screens/towns/DnestrovskScreen';
import DubossaryScreen from './src/screens/towns/DubossaryScreen';
import GrigoriopolScreen from './src/screens/towns/GrigoriopolScreen';
import KamenkaScreen from './src/screens/towns/KamenkaScreen';
import RybnitsaScreen from './src/screens/towns/RybnitsaScreen';
import SlobodzeyaScreen from './src/screens/towns/SlobodzeyaScreen';
import TiraspolScreen from './src/screens/towns/TiraspolScreen';
import UserPageScreen from './src/screens/UserPageScreen';
import FavoriteScreen from './src/screens/FavoriteScreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';



import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';



const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Main" component={MainScreen} />
      <Tab.Screen name="Favorite" component={FavoriteScreen} />
      <Tab.Screen name="Towns" component={TownsScreen} />
      <Tab.Screen name="UserPage" component={UserPageScreen} />
    </Tab.Navigator>
  );
}





const Stack = createStackNavigator();
const App: React.FC = () => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      console.log('user', user);
      setUser(user);
    });
  
    // Unsubscribe from the listener when the component unmounts
    return unsubscribe;
  }, []);

const logout = ()=> {
  auth().signOut;
  
}

  return (
    <View style = {{flex: 1}}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='RegistrationScreen'>
      {user ? (
        <Stack.Screen name="Inside" component={MyTabs} options={ {headerShown: false} }/>
      ):(
        <Stack.Screen name="Login" component={RegistrationScreen} options={ {headerShown: false} }/>
      )}
      <Stack.Screen
          name="MyTabs"
          component={MyTabs}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="MainScreen" component={MainScreen} />
        <Stack.Screen name="TownsScreen" component={TownsScreen} />
        <Stack.Screen name="BenderyScreen" component={BenderyScreen} />
        <Stack.Screen name="DnestrovskScreen" component={DnestrovskScreen} />
        <Stack.Screen name="DubossaryScreen" component={DubossaryScreen} />
        <Stack.Screen name="GrigoriopolScreen" component={GrigoriopolScreen} />
        <Stack.Screen name="KamenkaScreen" component={KamenkaScreen} />
        <Stack.Screen name="RybnitsaScreen" component={RybnitsaScreen} />
        <Stack.Screen name="SlobodzeyaScreen" component={SlobodzeyaScreen} />
        <Stack.Screen name="TiraspolScreen" component={TiraspolScreen} />
        <Stack.Screen name="UserPageScreen" component={UserPageScreen} />
        
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
};

export default App;
