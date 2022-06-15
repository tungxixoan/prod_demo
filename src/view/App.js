import React from 'react';
import { Image } from 'react-native';
import InputView from './inputView';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeView from './homeView';
import EditView from './editView';
import SettingView from './settingView';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      {/* <Tab.Screen name="Input" component={InputView}></Tab.Screen> */}
      <Tab.Screen name="Home" component={HomeView} options={{tabBarIcon: ()=> <Image source={require('../images/home_icon.png')} style={{height: 30, width: 30}} resizeMode="stretch"></Image>}}></Tab.Screen>
      <Tab.Screen name="Edit" component={EditView} options={{tabBarIcon: ()=> <Image source={require('../images/edit_icon.png')} style={{height: 30, width: 30}} resizeMode="stretch"></Image>}}></Tab.Screen>
      <Tab.Screen name="Setting" component={SettingView} options={{tabBarIcon: ()=> <Image source={require('../images/setting_icon.png')} style={{height: 30, width: 30}} resizeMode="stretch"></Image>}}></Tab.Screen>
    </Tab.Navigator>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Input"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Input" component={InputView}></Stack.Screen>
        <Stack.Screen name="HomeTaps" component={MyTabs}></Stack.Screen>
        <Stack.Screen name="Edit" component={EditView}></Stack.Screen>
        <Stack.Screen name="Setting" component={SettingView}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
