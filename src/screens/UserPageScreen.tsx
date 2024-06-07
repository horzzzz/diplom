import React from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';


type RootStackParamList = {
  RegistrationScreen: undefined;
  UserPage: undefined;
};

type UserPageScreenNavigationProp = StackNavigationProp<RootStackParamList, 'UserPage'>;
type UserPageScreenRouteProp = RouteProp<RootStackParamList, 'UserPage'>;

type Props = {
  navigation: UserPageScreenNavigationProp;
  route: UserPageScreenRouteProp;
};

const UserPageScreen: React.FC<Props> = ({ navigation }) => {
  const signOut = async () => {
    try {
      await auth().signOut();
      Alert.alert('You have been signed out.');
      navigation.navigate('RegistrationScreen'); 
    } catch (error) {
      console.error(error);
      Alert.alert('Sign out error:', (error as Error).message);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>User Page</Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
});

export default UserPageScreen;