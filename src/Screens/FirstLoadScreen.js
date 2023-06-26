import { View, Text, Image, TouchableOpacity,SafeAreaView } from 'react-native';
import React from 'react';
import Color from '../Utils/Color';
import { useNavigation } from '@react-navigation/native';

const FirstLoadScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={{
            backgroundColor: Color.secondaryColor,
            flex: 1,

        }}>
            <View
                style={{
                    marginHorizontal: 16,
                    marginVertical: 16,
                    flex: 1
                }}>
                <View>
                    <Image resizeMode='contain' style={{ height: 62, width: 93 }} source={require("../Assets/images/Group_5.png")} />
                </View>
                <View style={{ backgroundColor: "white", marginVertical: 20 }}>
                    <Image resizeMode='contain' style={{ height: 321, width: 321 }} source={require("../Assets/images/pana.png")} />
                </View>
                <View style={{}}>
                    <Text style={{ fontSize: 49, color: "white", }}>
                        Manage your Daily Task with <Text style={{ color: Color.primaryColor }}>Task Tracker</Text>
                    </Text>
                </View>
                <TouchableOpacity
                    onPress={() => { navigation.navigate("LoginScreen") }}
                    style={{ marginTop: 25, alignItems: "center" }}
                >
                    <View style={{ backgroundColor: Color.primaryColor, height: 50, width: "50%", justifyContent: "center", alignItems: "center", borderRadius: 5 }}>
                        <Text style={{ color: Color.buttonTextColor, fontSize: 19 }}>Let's Start</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

export default FirstLoadScreen;