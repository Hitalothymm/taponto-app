import React, { useState } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Ionicons } from '@expo/vector-icons'
import { Entypo } from '@expo/vector-icons';

import Home from '../components/Screen/Home';
import Cardapio from '../components/Screen/Cardapio';
import Perfil from '../components/Screen/Perfil';
import Sacola from '../components/Screen/Sacola';
import theme from '../themes/Theme';
import { ColorMode, NativeBaseProvider } from 'native-base';
import { RootStackParamList } from './types';
import Login from '../components/Screen/Login';
import { ThemeContext, ThemeProvider } from '../themes/ThemeContext';

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

function AppNavigator() {
  return (
    <ThemeProvider>
      <Tab.Navigator screenOptions={{ tabBarStyle: { position: 'absolute', backgroundColor: '#fff', height: 60 } }}>
        <Tab.Screen name="Home"
          component={() => <Home
            // props 
            pageTitle="Home" />}

          options={{
            headerShown: false, tabBarIcon: ({ color, size, focused }) => {
              if (focused) { return <Ionicons name='home' size={size} color={color} /> }
              else return (<Ionicons name='home-outline' size={size} color={color} />);
            }
          }} />

        <Tab.Screen name="Cardapio"
          component={() => <Cardapio
            // props 
            pageTitle="Cardapio"
            produtosNoCardapio={[]} />}

          options={{
            headerShown: false, tabBarIcon: ({ color, size, focused }) => {
              if (focused) { return <Ionicons name='reader' size={size} color={color} /> }
              else return (<Ionicons name='reader' size={size} color={color} />);
            },
          }} />

        <Tab.Screen name="Sacola"
          component={() => <Sacola
            // props 
            pageTitle="Sacola"
            produtosNaSacola={[]} />}

          options={{
            headerShown: false, tabBarIcon: ({ color, size, focused }) => {
              if (focused) { return <Entypo name='shopping-bag' size={size} color={color} /> }
              else return (<Entypo name='shopping-bag' size={size} color={color} />);
            },
          }}
        />

        <Tab.Screen name="Perfil"
          component={() => <Perfil
            // props 
            pageTitle="Perfil" />}

          options={{
            headerShown: false, tabBarIcon: ({ color, size, focused }) => {
              if (focused) { return <Ionicons name='person-circle-sharp' size={size} color={color} /> }
              else return (<Ionicons name='person-circle-sharp' size={size} color={color} />);
            }
          }} initialParams={{ pageTitle: 'perfil' }}
        />

        <Tab.Screen name="Login"
          component={() => <Login
            // props 
            pageTitle="Login" />}

          options={{
            headerShown: false, tabBarIcon: ({ color, size, focused }) => {
              if (focused) { return <Ionicons name='person' size={size} color={color} /> }
              else return (<Ionicons name='person' size={size} color={color} />);
            }
          }}
        />
      </Tab.Navigator>
    </ThemeProvider>
  );
}

export default AppNavigator;