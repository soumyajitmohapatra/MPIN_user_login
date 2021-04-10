import React, {useContext} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

import {AuthContext} from './context';

const Home = () => {
  const {logOut} = useContext(AuthContext);
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Hii</Text>
      <View style={{width: '50%', margin: 10}}>
        <Button title="logout" onPress={() => logOut()} />
      </View>
      <View>
        <Button title="Forgotten your Password"  />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
