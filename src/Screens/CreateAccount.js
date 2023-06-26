import { View, Text, Image, TextInput, Touchable, TouchableOpacity, ScrollView,SafeAreaView } from 'react-native'
import React, { useState } from 'react';
import Color from '../Utils/Color';
import VectorIcons from '../Components/VectorIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import EyeOpen from 'react-native-vector-icons/Ionicons';
import EyeClose from 'react-native-vector-icons/Ionicons';
import Google from 'react-native-vector-icons/SimpleLineIcons';
import CheckboxInActive from 'react-native-vector-icons/Ionicons';
import CheckboxActive from 'react-native-vector-icons/Ionicons';


export default function CreateAccount() {

    const [text, setText] = useState('');
    const [fullname, setfullname] = useState('');
    const [Password, setPassword] = useState('');
    const [PasswordVisible, setPasswordVisible] = useState(false);
    const [isCheckboxactive, setisCheckboxactive] = useState(false);

    const handleFullName = (inputText) => {
        setfullname(inputText);
    }

    const handleInputChange = (inputText) => {
        setText(inputText);
    };

    const handlePasswordChange = (inputText) => {
        setPassword(inputText);
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
                        Create Your Account
                    </Text>
                </View >
                <ScrollView>
                    <View style={{ marginTop: 13 }}>
                        <View>
                            <Text style={{
                                color: Color.placeholderTextColor,
                                fontSize: 18,
                                fontWeight: 600,
                            }}>
                                Full Name
                            </Text>
                            <View style={{ justifyContent: "center", position: "relative", marginTop: 13 }}>
                                <Ionicons
                                    name="person"
                                    size={30}
                                    color="white"
                                    style={{ position: 'absolute', top: 4, left: 15 }}
                                />
                                <TextInput
                                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10, paddingLeft: 49, color: 'white' }}
                                    onChangeText={handleFullName}
                                    value={fullname}
                                    placeholder="Enter Your Full Name"
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
                                Email Address
                            </Text>
                            <View style={{ justifyContent: "center", position: "relative", marginTop: 13 }}>
                                <Ionicons
                                    name="person"
                                    size={30}
                                    color="white"
                                    style={{ position: 'absolute', top: 4, left: 15 }}
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
                                    size={30}
                                    color="white"
                                    style={{ position: 'absolute', top: 4, left: 15 }}
                                />
                                <TextInput
                                    style={{ borderWidth: 1, borderColor: 'gray', padding: 10, paddingLeft: 49, color: 'white' }}
                                    onChangeText={handlePasswordChange}
                                    value={Password}
                                    placeholder="Enter Password"
                                    placeholderTextColor="#6F8793"
                                    secureTextEntry={!PasswordVisible}
                                />
                                <TouchableOpacity
                                    onPress={() => {
                                        setPasswordVisible(!PasswordVisible);
                                    }}
                                >
                                    {PasswordVisible ?
                                        <EyeOpen
                                            name="eye"
                                            size={30}
                                            color="white"
                                            style={{ position: 'absolute', bottom: 5, right: 15 }}
                                        /> :
                                        <EyeClose
                                            name="eye-off"
                                            size={30}
                                            color="white"
                                            style={{ position: 'absolute', bottom: 5, right: 15 }}
                                        />
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={{ justifyContent: "center", alignItems: "center", justifyContent: "center", marginTop: 20, flexDirection: "row", flexWrap: "wrap" }}>
                                <TouchableOpacity
                                    onPress={() => {
                                        setisCheckboxactive(!isCheckboxactive);
                                    }}
                                >
                                    {isCheckboxactive ?
                                        <CheckboxActive
                                            name="checkbox"
                                            size={20}
                                            color="white"
                                        // style={{ position: 'absolute', bottom: 5, right: 15 }}
                                        /> :
                                        <CheckboxInActive
                                            name="checkbox-outline"
                                            size={20}
                                            color="white"
                                        // style={{ position: 'absolute', bottom: 5, right: 15 }}
                                        />
                                    }
                                </TouchableOpacity>
                                <Text style={{ fontSize: 13, color: "white", marginLeft: 7 }}>
                                    I Have Read And Agreed to Tast tracker
                                </Text>
                                <TouchableOpacity style={{ marginLeft: 5 }} ><Text style={{ color: Color.primaryColor, fontSize: 13 }}>Privacy Policy & Terms And Condition</Text></TouchableOpacity>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{ marginTop: 13, alignItems: "center" }}
                        >
                            <View style={{ backgroundColor: Color.primaryColor, height: 50, width: "50%", justifyContent: "center", alignItems: "center", borderRadius: 5, marginTop: 15 }}>
                                <Text style={{ color: Color.buttonTextColor, fontSize: 19, fontWeight: 600 }}>Sign Up</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", marginTop: 25 }}>
                            <Text style={{ color: Color.placeholderTextColor }}>------------------------------- </Text>
                            <Text style={{ color: Color.placeholderTextColor, fontSize: 13, fontWeight: 600 }}> Or Continue with </Text>
                            <Text style={{ color: Color.placeholderTextColor }}> ------------------------------</Text>
                        </View>
                        <TouchableOpacity
                            style={{ marginTop: 13, alignItems: "center" }}
                        >
                            <View style={{ backgroundColor: Color.secondaryColor, height: 50, width: "50%", justifyContent: "center", alignItems: "center", borderRadius: 5, marginTop: 15, borderWidth: 2, borderColor: "white", flexDirection: "row" }}>
                                <Google
                                    name="social-google"
                                    size={30}
                                    color="white"
                                />
                                <Text style={{ color: "white", fontSize: 19, fontWeight: 600, marginLeft: 15 }}>Google</Text>
                            </View>
                        </TouchableOpacity>
                        <View style={{ justifyContent: "center", alignItems: "center", justifyContent: "center", marginTop: 20, flexDirection: "row" }}>
                            <Text style={{ fontSize: 16, color: "white", }}>
                                Already Have an Account?
                            </Text>
                            <TouchableOpacity style={{ marginLeft: 5 }} ><Text style={{ color: Color.primaryColor }}>Log In</Text></TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}