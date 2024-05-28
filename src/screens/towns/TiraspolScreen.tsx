import * as React from 'react';
import { View, Text } from 'react-native';
import firestore from '@react-native-firebase/firestore';
import { useEffect, useState } from 'react';


const TiraspolScreen: React.FC = () => {

  const [tir, setTir] = useState();

  const getData = async () => {
    const TiraspolDoc = await firestore().collection('Tiraspol').doc('0c0mjU07uQuPa7a4GH21').get();
    console.log(TiraspolDoc.data())
    setTir(TiraspolDoc.data())
  }

  useEffect(()=>{
    getData()
  }, [])

  return (
    <View>
      <Text>Hello Tiraspol!</Text>
      <Text>{tir?.title}</Text>
    </View>
  );
};

export default TiraspolScreen;
