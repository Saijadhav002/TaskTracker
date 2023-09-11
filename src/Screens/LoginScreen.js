import { View, Text, Image, TextInput, Touchable, TouchableOpacity, SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import Color from '../Utils/Color';
import VectorIcons from '../Components/VectorIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EyeOpen from 'react-native-vector-icons/Ionicons';
import EyeClose from 'react-native-vector-icons/Ionicons';
import Google from 'react-native-vector-icons/SimpleLineIcons';
import { useNavigation } from '@react-navigation/native';
import Global from './Global';

export default function LoginScreen() {

    const navigation = useNavigation();

    const [text, setText] = useState('');
    const [PasswordVisible, setPasswordVisible] = useState(false);
    const [Password, setPassword] = useState('');

    const handleInputChange = (inputText) => {
        setText(inputText);
    };

    const handlePasswordChange = (inputText) => {
        setPassword(inputText);
    }

    const handleLoginPress = () => {
        Global.LoginName = text;
        Global.Password = Password;
        navigation.navigate("HomeScreen");
    }

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
                <View style={{ justifyContent: "center", alignItems: "center" }}>
                    <Image resizeMode='contain' style={{ height: 115, width: 125 }} source={require("../Assets/images/Group_5.png")} />
                </View>
                <View style={{ marginTop: 15 }}>
                    <Text style={{
                        color: "#FFF",
                        fontSize: 26,
                        fontWeight: 600,
                        color: "white",
                    }}>
                        Welcome Back!
                    </Text>
                </View >
                <View style={{ marginTop: 13 }}>
                    <View>
                        <Text style={{
                            color: Color.placeholderTextColor,
                            fontSize: 18,
                            fontWeight: 600,
                        }}>
                            Email Address
                        </Text>
                        <View style={{ justifyContent: "center", position: "relative", marginTop: 13 }}>
                            <Ionicons
                                name="person"
                                size={27}
                                color="white"
                                style={{ position: 'absolute', top: 8, left: 10 }}
                            />
                            <TextInput
                                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, paddingLeft: 49, color: 'white' }}
                                onChangeText={handleInputChange}
                                value={text}
                                placeholder="Enter Email Address"
                                placeholderTextColor="#6F8793"
                            />
                        </View>
                    </View>
                    <View style={{ marginTop: 15 }}>
                        <Text style={{
                            color: Color.placeholderTextColor,
                            fontSize: 18,
                            fontWeight: 600,
                        }}>
                            Password
                        </Text>
                        <View style={{ justifyContent: "center", position: "relative", marginTop: 13 }}>
                            <Ionicons
                                name="person"
                                size={27}
                                color="white"
                                style={{ position: 'absolute', top: 8, left: 10 }}
                            />
                            <TextInput
                                style={{ borderWidth: 1, borderColor: 'gray', padding: 10, paddingLeft: 49, color: 'white' }}
                                onChangeText={handlePasswordChange}
                                value={Password}
                                placeholder="Enter Password"
                                placeholderTextColor="#6F8793"
                            />
                            <TouchableOpacity
                                onPress={() => {
                                    setPasswordVisible(!PasswordVisible)
                                }}
                            >
                                {PasswordVisible ?
                                    <EyeOpen
                                        name="eye"
                                        size={27}
                                        color="white"
                                        style={{ position: 'absolute', bottom: 5, right: 15 }}
                                    /> :
                                    <EyeClose
                                        name="eye-off"
                                        size={27}
                                        color="white"
                                        style={{ position: 'absolute', bottom: 11, right: 15 }}
                                    />
                                }
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ marginTop: 5, alignItems: "flex-end" }}>
                            <Text style={{
                                color: Color.placeholderTextColor,
                                fontSize: 15,
                                fontWeight: 600,
                            }}>
                                Forgot Password?
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity
                        onPress={() => handleLoginPress()}
                        style={{ marginTop: 13, alignItems: "center", backgroundColor: Color.primaryColor, height: 50, width: "50%", justifyContent: "center", borderRadius: 5, marginTop: 15, alignSelf: "center" }}
                    >
                        <Text style={{ color: Color.buttonTextColor, fontSize: 19, fontWeight: 600 }}>Login</Text>
                    </TouchableOpacity>
                    <View style={{ justifyContent: "space-between", flexDirection: "row", marginTop: 25 }}>
                        <Text style={{ color: Color.placeholderTextColor }}>------------------------------- </Text>
                        <Text style={{ color: Color.placeholderTextColor, fontSize: 13, fontWeight: 600 }}> Or Continue with </Text>
                        <Text style={{ color: Color.placeholderTextColor }}> ------------------------------</Text>
                    </View>
                    {/* <TouchableOpacity
                        style={{ alignItems: "center", backgroundColor: Color.secondaryColor, height: 50, width: "50%", justifyContent: "center", borderRadius: 5, marginTop: 15, borderWidth: 2, borderColor: "white", flexDirection: "row", alignSelf: "center" }}
                    >
                        <Google
                            name="social-google"
                            size={30}
                            color="white"
                        />
                        <Text style={{ color: "white", fontSize: 19, fontWeight: 600, marginLeft: 15 }}>Google</Text>
                    </TouchableOpacity> */}
                    <View style={{ justifyContent: "center", alignItems: "center", justifyContent: "center", marginTop: 20, flexDirection: "row" }}>
                        <Text style={{ fontSize: 16, color: "white", }}>
                            Don’t have an account?
                        </Text>
                        <TouchableOpacity
                            onPress={() => { navigation.navigate("CreateAccount") }}
                            style={{ marginLeft: 5 }} ><Text style={{ color: Color.primaryColor }}>Sign Up</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}