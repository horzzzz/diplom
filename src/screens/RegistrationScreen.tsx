import React, {useState} from "react";
import auth from '@react-native-firebase/auth';
import { StyleSheet, View, Alert, ActivityIndicator, Button, KeyboardAvoidingView } from "react-native";
import { TextInput } from "react-native-gesture-handler";


const RegistrationScreen=()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  
  

  const signIn = async()=>{
    setLoading(true);
    try{
      const response = await auth().signInWithEmailAndPassword(email, password);;
      console.log(response);
    } catch (error: any) {
      console.log(error);
      Alert.alert("Sign is failed: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  const signUp = async()=>{
    setLoading(true);
    try{
      const response = await auth().createUserWithEmailAndPassword(email, password);
      console.log(response);
      Alert.alert('Check your emails!')
    } catch (error: any) {
      console.log(error);
      Alert.alert("Sign is failed: " + error.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior="padding">
      <TextInput value={email} style={styles.input} placeholder="Email" autoCapitalize="none" onChangeText={(text)=>setEmail(text)}></TextInput>
      <TextInput secureTextEntry={true} value={password} style={styles.input} placeholder="password" autoCapitalize="none" onChangeText={(text)=>setPassword(text)}></TextInput>
      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : (
        <>
        <Button title="Login" onPress={signIn} />
        <Button title="Create account" onPress={signUp} />

        </>
      )}
      </KeyboardAvoidingView>
    </View>
    );  
}

export default RegistrationScreen;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
    flex: 1,
    justifyContent:'center'
  },
  input: {
    marginVertical: 4,
    height: 50,
    borderWidth: 1,
    borderRadius: 4,
    padding: 10,
    backgroundColor: '#fff'
  },
});