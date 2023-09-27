import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'

import { createStackNavigator } from '@react-navigation/stack'

import Home from '../routes/screens/home/Home'
import Post from './screens/posts/Post'
import Usuario from './screens/usuario/Usuario'

const Stack = createStackNavigator()

export default function Router() {
  return (
    
    <NavigationContainer>

        <Stack.Navigator initialRouteName='Home'>

            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Post' component={Post}/>
            <Stack.Screen name='Usuario' component={Usuario}/>
        
        </Stack.Navigator>

    </NavigationContainer>

  )
}

