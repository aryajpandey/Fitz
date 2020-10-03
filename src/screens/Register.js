import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { TouchableOpacity, View, Text, Image, TextInput } from "react-native";
import CustomInput from "../component/CustomInput";

import s from "../style";
import { Button } from "react-native-paper";
import styles from "../style";

const RegisterScreen = ({ navigation }) => {
  const [username, onChangeUsername] = React.useState("");
  const [password, onChangePassword] = React.useState("");
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");
  const [email, onChangeEmail] = React.useState("");

  return (
    <SafeAreaView style={s.backgroundStyle}>
      <View style={{ flex: 1.5, top: 10 }}>
        <Image
          resizeMode={"stretch"}
          source={require("../../assets/logo.png")}
          style={s.logo}
        />
        <Text style={s.header}>ANYWHERE.</Text>
      </View>
      <View style={{ flex: 2.5 }}>
        <CustomInput
          style={s.input}
          onChangeText={(text) => onChangeUsername(text)}
          value={username}
          placeholder="Username"
        />
        <CustomInput
          placeholder="Email"
          style={s.input}
          onChangeText={(text) => onChangeEmail(text)}
          value={email}
        />
        <CustomInput
          placeholder="Password"
          secureTextEntry={true}
          style={s.input}
          onChangeText={(text) => onChangePassword(text)}
          value={password}
        />
        <CustomInput
          placeholder="Confirm password"
          secureTextEntry={true}
          style={s.input}
          onChangeText={(text) => onChangeConfirmPassword(text)}
          value={confirmPassword}
        />
        <Button
          style={s.standardButton}
          mode="contained"
          onPress={() => {
            navigation.navigate("Interests");
          }}
        >
          Next
        </Button>
      </View>
    </SafeAreaView>
  );
};
export default RegisterScreen;
