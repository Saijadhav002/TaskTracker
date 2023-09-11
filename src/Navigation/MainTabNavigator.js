import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../Screens/LoginScreen';
import CreateAccount from '../Screens/CreateAccount';
import HomeScreen from '../Screens/HomeScreen';

export default function MainTabNavigator() {
    const Stack = createNativeStackNavigator();
    return (
        <>
            <NavigationContainer>{
                <Stack.Navigator initialRouteName="LoginScreen" screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="LoginScreen" component={LoginScreen} />
                    <Stack.Screen name="CreateAccount" component={CreateAccount} />
                    <Stack.Screen name="HomeScreen" component={HomeScreen} />

                </Stack.Navigator>
            }</NavigationContainer>
        </ >
    )
}