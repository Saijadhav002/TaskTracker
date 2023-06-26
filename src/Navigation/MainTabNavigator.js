import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FirstLoadScreen from '../Screens/FirstLoadScreen';
import LoginScreen from '../Screens/LoginScreen';
import CreateAccount from '../Screens/CreateAccount';
// import MainTabNavigator from './src/Navigation/MainTabNavigator';

export default function MainTabNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <NavigationContainer>{
                <Stack.Navigator initialRouteName="FirstLoadScreen" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="FirstLoadScreen" component={FirstLoadScreen} />
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="CreateAccount" component={CreateAccount} />

                </Stack.Navigator>
            }</NavigationContainer>
        </ >
    )
}