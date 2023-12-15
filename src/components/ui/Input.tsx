import React from 'react';
import {View, TextInput} from 'react-native';
import Fontisto from 'react-native-vector-icons/Fontisto'; 

const Input = () => {
  return (
    <View style={styles.searchContainer}>
      <Fontisto name="search" style={styles.searchIcon} />
      <TextInput style={styles.searchInput} placeholder="Search..." />
    </View>
  );
};

const styles = {
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 350,
    borderWidth: 1,
    borderRadius: 6,
    borderColor: '#ccc',
    
    
    
  },
  searchInput: {
    flex: 1,
    padding: 10,
  },
  searchIcon: {
    fontSize: 20,
    color: '#555',
    padding: 10,
  },
};

export default Input;
