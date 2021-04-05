import React, {useContext, useReducer, useState} from 'react';
import {StyleSheet, Text, View, TextInput, Button} from 'react-native';

import {AuthContext} from './context';

const Login = () => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {logIn} = useContext(AuthContext);

  const loginHandle = (userName, password) => {
    logIn(userName, password);
  };

  return (
    <View style={styles.container}>
      <TextInput
        placeholder="username"
        defaultValue={userName}
        autoCapitalize='none'
        onChangeText={n => setUserName(n)}
      />
      <TextInput
        placeholder="password"
        defaultValue={password}
        autoCapitalize='none'
        onChangeText={p => setPassword(p)}
      />
      <Button title="submit" onPress={() => 
        loginHandle(userName, password)} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 62,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ccc',
  },
});
