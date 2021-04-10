import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const AttendanceCard = ({title, children}) => {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={{margin: 10}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>{title}</Text>
        </View>
        <View>{children}</View>
      </View>
    </View>
  );
};

export default AttendanceCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    backgroundColor: '#fff',
    width: '100%',
    height: 300,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
