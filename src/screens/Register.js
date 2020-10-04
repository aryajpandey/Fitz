import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ImageBackground,
} from "react-native";
import CustomInput from "../component/CustomInput";

import s from "../style";
import { Button, TextInput, Appbar, Searchbar } from "react-native-paper";
import styles from "../style";

const url = {
  uri:
    "https://images.unsplash.com/flagged/photo-1556746834-cbb4a38ee593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1052&q=80",
};

const RegisterScreen = ({ navigation, route }) => {
  const [username, onChangeUsername] = React.useState(route.params.username);
  const [password, onChangePassword] = React.useState(route.params.password);
  const [confirmPassword, onChangeConfirmPassword] = React.useState("");
  const [email, onChangeEmail] = React.useState("");

  const block = {
    height: 50,
    marginBottom: 10,
    marginLeft: 40,
    marginRight: 40,
    borderRadius: 10,
  };

  return (
    <View style={s.backgroundStyle}>
      <Appbar.Header style={{}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
        <Appbar.Content title="Register"></Appbar.Content>
      </Appbar.Header>
      <ImageBackground
        source={url}
        style={{ flex: 1, resizeMode: "cover", justifyContent: "center" }}
        imageStyle={{ opacity: 0.5 }}
      >
        <View style={{ flex: 1.5, top: 10 }}>
          <Image
            resizeMode={"stretch"}
            source={require("../../assets/logo.png")}
            style={s.logo}
          />
        </View>
        <View style={{ flex: 2.5 }}>
          <TextInput
            style={s.input}
            onChangeText={(text) => onChangeUsername(text)}
            mode="outlined"
            style={block}
            value={username}
            placeholder="Username"
          />
          <TextInput
            placeholder="Email"
            style={s.input}
            onChangeText={(text) => onChangeEmail(text)}
            mode="outlined"
            style={block}
            value={email}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={s.input}
            onChangeText={(text) => onChangePassword(text)}
            mode="outlined"
            style={block}
            value={password}
          />
          <TextInput
            placeholder="Confirm password"
            secureTextEntry={true}
            style={s.input}
            onChangeText={(text) => onChangeConfirmPassword(text)}
            mode="outlined"
            style={block}
            value={confirmPassword}
          />
          <Button
            style={s.standardButton}
            mode="contained"
            onPress={() => {
              navigation.navigate("Interests", username);
            }}
          >
            Next
          </Button>
        </View>
      </ImageBackground>
    </View>
  );
};
export default RegisterScreen;
