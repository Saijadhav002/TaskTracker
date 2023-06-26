import { View, Text, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import Color from '../Utils/Color';

const FirstLoadScreen = () => {
    return (
        <View style={{}}>
            <View>
                <Image resizeMode='contain' style={{ height: 62, width: 93 }} source={require("../Assets/images/Group_5.png")} />
            </View>
            <View style={{ backgroundColor: "white", marginVertical: 20 }}>
                <Image resizeMode='contain' style={{ height: 321, width: 321 }} source={require("../Assets/images/pana.png")} />
            </View>
            <View style={{}}>
                <Text style={{ fontSize: 50, color: "white", }}>
                    Manage your Daily Task with <Text style={{ color: Color.primaryColor }}>Task Tracker</Text>
                </Text>
            </View>
            <TouchableOpacity
                style={{ marginTop: 13,alignItems:"center" }}
            >
                <View style={{ backgroundColor: Color.primaryColor, height: 50, width: "50%", justifyContent: "center", alignItems: "center",borderRadius:5 }}>
                    <Text style={{ color: Color.buttonTextColor, fontSize: 19 }}>Let's Start</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

export default FirstLoadScreen;