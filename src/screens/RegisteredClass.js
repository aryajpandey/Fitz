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
import { Card, Button } from "react-native-paper";
import s from "../style";

function RegisteredClass({ navigation, route }) {
  const trainer = route.params.trainer;
  const date = route.params.date;

  const cardStyle = {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    borderRadius: 10,
  };

  return (
    <ScrollView>
      <Card style={cardStyle}>
        <Text style={{fontSize:20, alignSelf:'center',padding:20}}>You have registered for a class with {trainer.name}</Text>
        <Button
          mode="contained"
          style={
            (s.standardButton,
            { width: "80%", alignSelf: "center", marginTop: 20,margin:25 })
          }
          onPress={() => {
            navigation.navigate("Home", { trainer, date });
          }}
        >
          Continue
        </Button>
      </Card>
    </ScrollView>
  );
}

export default RegisteredClass;
