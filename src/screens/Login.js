import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
  Keyboard,
} from "react-native";

import { Button, TextInput } from "react-native-paper";

import Logo from "../component/Logo";
import s from "../style";

const background = {
  uri:
    "https://images.unsplash.com/photo-1557330359-ffb0deed6163?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80",
};

function LoginScreen({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <View style={s.backgroundStyle}>
      <ImageBackground
        source={background}
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
        imageStyle={{ opacity: 0.5 }}
      >
        <Logo />
        <View style={{ flex: 2 }}>
          <TextInput
            placeholder="Username"
            mode="flat"
            onChangeText={(text) => onChangeUsername(text)}
            value={username}
            onBlur={() => {
              Keyboard.dismiss();
            }}
            mode="outlined"
            style={{
              marginHorizontal: 40,
              marginTop: 20,
            }}
          ></TextInput>
          <TextInput
            placeholder="Password"
            onBlur={() => {
              Keyboard.dismiss();
            }}
            secureTextEntry={true}
            onChangeText={(text) => onChangePassword(text)}
            value={password}
            mode="outlined"
            style={{
              marginHorizontal: 40,
              marginVertical: 20,
            }}
          ></TextInput>
          <Button
            icon="login"
            mode="contained"
            style={s.standardButton}
            onPress={() => {
              navigation.navigate("Home", username);
            }}
          >
            Login
          </Button>
          <Button
            icon="account-plus-outline"
            mode="outlined"
            style={[
              s.standardButton,
              { elevation: 0, backgroundColor: "white" },
            ]}
            onPress={() => {
              navigation.navigate("Register", { username, password });
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
