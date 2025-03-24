/* eslint-disable prettier/prettier */
import {ScrollView, StyleSheet, View, Text} from 'react-native';
import React, {useState} from 'react';
import Input from './KOMPONEN/Inputtext';
import Button from './KOMPONEN/Button';
import Title from './KOMPONEN/Title';

const Signin = () => {
  // let title = 'WELCOME!!!'; ( variabel biasa )
  const [title, setTitle] = useState('WELCOME!!!');

  const onSubmit = () => {
    setTitle('SELAMAT DATANG');
    console.log(title);
  };
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        <Title label="AIKO HANAKO LASUT" />
        <Input label="Username" placeholder="Masukan username anda" />
        <Input label="Password" placeholder="Masukan password anda" />
        <Input label="Alamat" placeholder="Masukan alamat anda" />
        <Input label="No Tlp" placeholder="Masukan nomor tlpn anda" />
        <Button label="Sign In" />
        <Button label="Sign In Google" color="red" />
        <Button label="Sign In Facebook" color="blue" />
        <Button label="Sign In Apple" color="black" />
        <Button label="percobaan console" onPress={onSubmit} />
        <Title label="thank you" />
      </View>
    </ScrollView>
  );
};

export default Signin;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingHorizontal: 25,
  },
  title: {
    fontSize: 40,
    color: 'black',
    fontWeight: '700',
    marginBottom: 20,
  },
  label: {
    fontSize: 22,
    fontWeight: '500',
    marginBottom: 10,
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    padding: 15,
    fontSize: 15,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'orange',
    padding: 15,
    alignItems: 'center',
    borderRadius: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});
