/* eslint-disable prettier/prettier */
import React from 'react';
import {SafeAreaView} from 'react-native';
import UserList from './exercises7';

const App: React.FC = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <UserList />
    </SafeAreaView>
  );
};

export default App;
