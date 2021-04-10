import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import {DrawerContent} from './DrawerContent';

const Drawer = createDrawerNavigator();

const DetailsScreen = () => {
  return (
    <View>
      <Text>Detail stack Screen</Text>
    </View>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({});
