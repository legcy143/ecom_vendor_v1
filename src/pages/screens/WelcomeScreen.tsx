import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import Button from '../../components/ui/Button';

export default function WelcomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <Image source={require('../../../assests/welcome1.png')} />
      <Text style={{color: 'red', fontSize: 22, fontWeight: 'bold'}}>
        40k Preimium Recipes
      </Text>
      <Text style={{ color:'black',fontSize: 42,fontWeight:'bold', marginTop: 32, marginBottom:20 }}>Cook Like A Chef</Text>
      <Button textData ="Log in" bgcolor="green"/>
    </View>
  );
}

const styles = StyleSheet.create({});
