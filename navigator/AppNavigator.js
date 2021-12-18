/* eslint-disable react-native/no-inline-styles */
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text} from 'react-native';
import HomeScreen from '../screens/HomeScreen';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
function SettingsScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{headerShown: false}}>
        <Tab.Screen
          name="Home"
          options={{
            tabBarIcon: ({color}) => (
              <AntDesign name="home" size={24} color="black" />
            ),
          }}
          component={HomeScreen}
        />
        <Tab.Screen
          name="Watchlist"
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="bookmark-plus-outline"
                size={24}
                color="black"
              />
            ),
          }}
          component={SettingsScreen}
        />
        <Tab.Screen
          name="Portfolio"
          options={{
            tabBarIcon: ({color}) => (
              <MaterialCommunityIcons
                name="briefcase-outline"
                size={24}
                color="black"
              />
            ),
          }}
          component={SettingsScreen}
        />
        <Tab.Screen
          name="Orders"
          options={{
            tabBarIcon: ({color}) => (
              <Feather name="clipboard" size={24} color="black" />
            ),
          }}
          component={SettingsScreen}
        />
        <Tab.Screen
          name="Funds"
          options={{
            tabBarIcon: ({color}) => (
              <Ionicons name="md-wallet-sharp" size={24} color="black" />
            ),
          }}
          component={SettingsScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
