import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  TextInput,
  TouchableHighlight,
} from "react-native";

import { Button } from "react-native-paper";

import CustomInput from "../component/CustomInput";

import s from "../style";

function LoginScreen({ navigation }) {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");

  return (
    <SafeAreaView style={s.backgroundStyle}>
      <View style={{ flex: 1.5, top: 80 }}>
        <Image
          resizeMode={"stretch"}
          source={require("../../assets/logo.png")}
          style={s.logo}
        ></Image>
        <Text style={s.subtitle}>Train Anywhere</Text>
      </View>
      <View style={{ flex: 2 }}>
        <CustomInput
          placeholder="Username"
          onChangeText={(text) => onChangeUsername(text)}
          value={username}
        ></CustomInput>
        <CustomInput
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
        ></CustomInput>
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
    </SafeAreaView>
  );
}

export default LoginScreen;
