/* eslint-disable prettier/prettier */
import React from 'react';
import {TextInput, View, Text, StyleSheet} from 'react-native';

const Inputtext = ({label, value, onChangeText, keyboardType = 'default'}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={`Masukan ${label.toLowerCase()} anda`}
        keyboardType={keyboardType}
      />
    </View>
  );
};

export default Inputtext;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 5,
  },
});
