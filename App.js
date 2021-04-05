import React, {useState, useEffect, useMemo, useReducer} from 'react';
import AsyncStorage, {
  useAsyncStorage,
} from '@react-native-async-storage/async-storage';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  ActivityIndicator,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {AuthContext} from './context';
import Login from './Login';
import Home from './Home';
import PINCode from '@haskkor/react-native-pincode';
import {hasUserSetPinCode} from '@haskkor/react-native-pincode';

const Stack = createStackNavigator();

const App = ({navigation}) => {
  // const {userToken, setUserToken} = useState(null);

  const initialLoginState = {
    useName: null,
    password: null,
    userToken: null,
    isLoading: true,
  };

  const loginReducer = (prevState, action) => {
    switch (action.type) {
      case 'RETRIEVE_TOKEN':
        return {
          ...prevState,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGIN':
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT':
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = useReducer(loginReducer, initialLoginState);

  const authContext = useMemo(
    () => ({
      logIn: async (userName, password) => {
        //here the username will be check via DB
        let userToken;
        userToken = null;
        if (userName == 'user' && password == 'pass') {
          try {
            userToken = 'hccik';
            await AsyncStorage.setItem('userToken', userToken);
            showChoosePinLock();
          } catch (e) {
            console.log(e);
          }
        }
        dispatch({type: 'LOGIN', id: userName, token: userToken});
      },
      logOut: async () => {
        try {
          userToken = 'hccik';
          await AsyncStorage.removeItem('userToken');
        } catch (e) {
          console.log(e);
        }
        dispatch({type: 'LOGOUT'});
      },
    }),
    [],
  );

  useEffect(() => {
    setTimeout(async () => {
      let userToken;
      userToken = null;
      let hasPin;
      try {
        userToken = await AsyncStorage.getItem('userToken');
        hasPin = await hasUserSetPinCode();
        setShowPinLock(true);
        setPinCodeStatus('enter');
      } catch (e) {
        console.log(e);
      }
      dispatch({type: 'RETRIEVE_TOKEN', token: userToken});
      // dispatch({type: 'LOGOUT'});
    });
  }, []);

  //MPIN SCREEN FUNCTIONS
  const [showPinLock, setShowPinLock] = useState(false);
  const [pinCodeStatus, setPinCodeStatus] = useState('');
  const [goToHome, setGoToHome] = useState(false);

  const showChoosePinLock = () => {
    setShowPinLock(true);
    setPinCodeStatus('choose');
  };
  // showEnterPinLock = () => {};
  // clearPin = () => {};

  const _finishProcess = () => {
    setGoToHome(true);
    setShowPinLock(false);
  };

  if (loginState.isLoading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" color="#fff" />
      </View>
    );
  }
  return (
    <AuthContext.Provider value={authContext}>
      <NavigationContainer>
        {/* MPIN SCREEN  */}

        {loginState.userToken !== null ? (
          <>
            {showPinLock && (
              <View style={{flex: 1, backgroundColor: '#fff'}}>
                <PINCode
                  status={pinCodeStatus}
                  touchIDDisabled={true}
                  finishProcess={_finishProcess}
                />
              </View>
            )}
            {goToHome && (
              <Stack.Navigator>
                <Stack.Screen name="Home" component={Home} />
              </Stack.Navigator>
            )}
          </>
        ) : (
          <Stack.Navigator>
            <Stack.Screen name="Login" component={Login} />
          </Stack.Navigator>
        )}
      </NavigationContainer>
    </AuthContext.Provider>
  );
};

const styles = StyleSheet.create({});

export default App;
