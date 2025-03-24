/* eslint-disable prettier/prettier */
import React from 'react';
import {View, StyleSheet, Image} from 'react-native';

const Flexbox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.redcontainer}>
        <View style={styles.boxWrapper}>
          <View style={styles.kotak} />
          <View style={styles.kotakYellow} />
          <View style={styles.kotak} />
        </View>
      </View>

      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('./android/logounklab.png')}
        />
      </View>

      <View style={styles.bluecontainer}>
        <View style={styles.kotak} />
        <View style={styles.kotakYellow} />
        <View style={styles.kotak} />
      </View>
    </View>
  );
};

export default Flexbox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },

  redcontainer: {
    backgroundColor: 'red',
    flex: 1 / 5,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },

  bluecontainer: {
    backgroundColor: 'blue',
    flex: 1 / 5,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },

  boxWrapper: {
    flexDirection: 'row',
  },

  kotak: {
    backgroundColor: 'black',
    width: 80,
    height: 80,
    marginHorizontal: 5,
  },

  kotakYellow: {
    backgroundColor: 'yellow',
    width: 80,
    height: 80,
    marginHorizontal: 5,
  },

  imageContainer: {
    flex: 3 / 5,
    justifyContent: 'center',
    alignItems: 'center',
  },

  image: {
    width: 390,
    height: 150,
    resizeMode: 'contain',
  },
});
