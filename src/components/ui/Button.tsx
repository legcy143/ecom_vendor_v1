import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';

export default function Button(props: any) {
  // let color = props.mode == "outline" ? "white" : "green" 
  return (
    <TouchableOpacity
      style={{
        backgroundColor: props.bgcolor ,
        borderRadius: 16,
        paddingVertical: 18,
        width: '80%',
        alignItems: 'center',
        marginBottom: 8,
      }}
      {...props}>
      <Text
        style={{
          color: 'white',
          fontSize: 18,
          fontWeight: '700',
          textTransform: 'uppercase',
        }}>
        {props.textData}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({});
