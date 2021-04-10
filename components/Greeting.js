import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Greeting = () => {
  return (
    <View>
      <Text style={styles.hello}>Hello,</Text>
      <View style={{flexDirection: 'row'}}>
        <Text style={styles.hello}>Soumyajit</Text>
        <Text style={{fontSize: 35, fontWeight: 'bold', marginLeft: 10}}>
          👋
        </Text>
      </View>
    </View>
  );
};

export default Greeting;

const styles = StyleSheet.create({
  hello: {
    fontSize: 35,
    fontWeight: 'bold',
    fontStyle: 'italic',
  },
});
