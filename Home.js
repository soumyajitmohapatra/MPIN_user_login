import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {AuthContext} from './context';

const Home = () => {
  const {logOut} = useContext(AuthContext);
  return (
    <View>
      <Text>Hii</Text>
      <Button title="logout" onPress={() => logOut()} />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
