import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import Color from '../Utils/Color';
import Global from './Global';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
    const navigation = useNavigation();

    const handleSignOut = () => {
        navigation.navigate("LoginScreen");
    }

    return (
        <SafeAreaView style={{
            backgroundColor: Color.secondaryColor,
            flex: 1,
        }}>
            <View style={{ flexDirection: "row", alignItems: "center", padding: 15, justifyContent: "space-between" }}>
                <View>
                    <Text style={{ color: "white" }}>Welcome Back!</Text>
                    <Text style={{ color: "white" }}>{Global.LoginName}</Text>
                </View>
                <TouchableOpacity
                    onPress={() => handleSignOut()}
                    style={{ marginRight: 10 }}>
                    <Text style={{ color: "red", fontWeight: "bold", fontSize: 16 }}>Sign Out</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({})