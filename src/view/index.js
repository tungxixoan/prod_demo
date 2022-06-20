import React from 'react';
import HomeView from './homeView';
import InputView from './inputView';
import SettingView from './settingView';

import { NavigationContainer } from '@react-navigation/native';;
import EditView from './editView';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
const Stack = createNativeStackNavigator();
function RootView() {
  return (
    <Provider store = {store}>
        <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Input"
          screenOptions={{headerShown: false}}>
          <Stack.Screen name="Input" component={InputView}></Stack.Screen>
          <Stack.Screen name="Home" component={HomeView}></Stack.Screen>
          <Stack.Screen name="Edit" component={EditView}></Stack.Screen>
          <Stack.Screen name="Setting" component={SettingView}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
    
        
    
  );
}

export default RootView;