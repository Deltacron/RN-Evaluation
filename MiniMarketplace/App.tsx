/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import type {PropsWithChildren} from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';


import Home from './src/Home';

const Tab = createBottomTabNavigator();


function App(): React.JSX.Element {

  return (
    <NavigationContainer>
    <Tab.Navigator screenOptions={{
      headerShown: false, 
      tabBarShowLabel: false,
      tabBarActiveTintColor: "red"
      }}>
        <Tab.Screen name="HOME" component={Home} options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <Entypo name={"home"} size={size} color={color} />;
          }
        }}></Tab.Screen>
        <Tab.Screen name="REORDER" component={Home} options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <MaterialIcons name={"reorder"} size={size} color={color} />;
          }
        }}></Tab.Screen>
        <Tab.Screen name="CART" component={Home} options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <MaterialIcons name={"shopping-cart"} size={size} color={color} />;
          }
        }}></Tab.Screen>
        <Tab.Screen name="ACCOUNT" component={Home} options={{
          tabBarIcon: ({ size, focused, color }) => {
            return <FontAwesome6 name={"user"} size={size} color={color} />;
          }
        }}></Tab.Screen>
    </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({})