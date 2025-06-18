import { View, Text } from 'react-native';
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeIcon, ShoppingBagIcon, UserCircleIcon } from 'react-native-heroicons/outline';

// 🖥️ Import your screen components
import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Cart from '../screens/Cart';

const Tab = createBottomTabNavigator();

const BottomNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarShowLabel: true,
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let Icon;

          if (route.name === 'Home') {
            Icon = HomeIcon;
          } else if (route.name === 'Cart') {
            Icon = ShoppingBagIcon;
          } else if (route.name === 'About') {
            Icon = UserCircleIcon;
          }

          return <Icon size={26} color={focused ? '#007bff' : 'gray'} />;
        },
        tabBarActiveTintColor: '#007bff',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Cart" component={Cart} />
      <Tab.Screen name="About" component={Profile} />
    </Tab.Navigator>
  );
};

export default BottomNavigator;
