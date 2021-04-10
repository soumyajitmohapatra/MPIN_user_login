import * as React from 'react';
import {Button, View} from 'react-native';

import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';

import {DrawerContent} from './screens/DrawerContent';
import MainTabScreen from './screens/MainTabScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="Tab" component={MainTabScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
