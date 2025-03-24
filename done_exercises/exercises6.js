/* eslint-disable prettier/prettier */
import React, {useState} from 'react';
import {ScrollView, StyleSheet} from 'react-native';
import Inputtext from './KOMPONEN/Inputtext';
import Button from './KOMPONEN/Button';
import Title from './KOMPONEN/Title';

const Exercises6 = () => {
  const [nama, setName] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [alamat, setAddress] = useState('');
  const [phone, setPhone] = useState('');

  const handleRegister = () => {
    console.log({
      Name: nama,
      Username: username,
      Email: email,
      Address: alamat,
      'nomor telepon': phone,
    });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Title text="Registration" />
      <Inputtext label="Nama" value={nama} onChangeText={setName} />
      <Inputtext label="Username" value={username} onChangeText={setUsername} />
      <Inputtext
        label="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <Inputtext
        label="Alamat"
        value={alamat}
        onChangeText={setAddress}
        keyboardType="default"
      />
      <Inputtext
        label="Nomor Telepon"
        value={phone}
        onChangeText={setPhone}
        keyboardType="numeric"
      />
      <Button title="Register" onPress={handleRegister} />
    </ScrollView>
  );
};

export default Exercises6;

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexGrow: 1,
    justifyContent: 'center',
  },
});
