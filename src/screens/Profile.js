import React from "react";
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableHighlight,
  StyleSheet,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import { Card, Button, Avatar, Divider } from "react-native-paper";
import s from "../style";

function ProfileScreen({ navigation, route }) {
  //const trainer = route.params.trainer;
  //const date = route.params.date;
  console.log(route);

  const cardStyle = {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 20,
    borderRadius: 10,
  };

  return (
    <ScrollView>
      <View
        style={{
          width: "100%",
          height: 240,
          backgroundColor: "purple",
          alignContent: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ color: "white", left: 20, top: 10, fontSize: 20 }}>
          Aryaj
        </Text>
        <Avatar.Image
          style={{ alignSelf: "center" }}
          size={140}
          source={require("../../assets/dummy/unknown.png")}
        />
      </View>
      <Card style={[cardStyle, {  }]}>
        <View>
          <Text style={{fontSize:20}}>Email       aryaj@gmail.com</Text>
          <Divider />
        </View>
      </Card>
    </ScrollView>
  );
}

export default ProfileScreen;
