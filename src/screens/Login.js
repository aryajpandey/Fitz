import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground, Keyboard
} from "react-native";

import { Button, TextInput } from "react-native-paper";

import CustomInput from "../component/CustomInput";

import s from "../style";

const background = { uri: "https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"}


function LoginScreen({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    

      <View style={s.backgroundStyle}>
        <ImageBackground source={background} style={{flex: 1, resizeMode: "cover", justifyContent: "center"}} imageStyle={{opacity:0.5}}>
    <View style={{ flex: 1.5, top: 80 }}>
      <Image
        resizeMode={"stretch"}
        source={require("../../assets/logo.png")}
        style={s.logo}
      ></Image>
      <Text style={s.subtitle}>Train Anywhere</Text>
    </View>
    <View style={{ flex: 2 }}>
      <TextInput
        placeholder="Username"
        onChangeText={(text) => onChangeUsername(text)}
        value={username}
        onBlur={() => {Keyboard.dismiss()}}
        mode='outlined'
        style={{height: 50, marginBottom: 10, marginLeft: 40, marginRight: 40, borderRadius: 10,}}
      ></TextInput>
      <TextInput
        placeholder="Password"
        onBlur={() => {Keyboard.dismiss()}}
        secureTextEntry={true}
        onChangeText={(text) => onChangePassword(text)}
        value={password}
        mode='outlined'
        style={{height: 50, marginBottom: 10, marginLeft: 40, marginRight: 40, borderRadius: 10,}}
      ></TextInput>
      <Button
        icon="login"
        mode="contained"
        style={s.standardButton}
        onPress={() => {
          navigation.navigate("Home");
        }}
      >
        Login
      </Button>
      <Button
        icon="account-plus-outline"
        mode="outlined"
        style={s.standardButton}
        onPress={() => {
          navigation.navigate("Register");
        }}
      >
        Register
      </Button>
    </View>
    </ImageBackground>
    </View>
  
    
  );
}

export default LoginScreen;
