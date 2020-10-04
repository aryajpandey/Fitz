import React from "react";
import { View, Text, Image, FlatList, TouchableHighlight } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  DataTable,
  Chip,
  Divider,
  Surface,
} from "react-native-paper";
import { Rating } from "react-native-ratings";
import s from "../style";

function TrainerScreen({ navigation, route }) {
  const trainer = route.params.item;
  const categories = trainer.categories.map((category) => (
    <Chip style={{ margin: 5, marginLeft: 10 }} key={category}>
      {category}
    </Chip>
  ));

  const cardStyle = {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    borderRadius: 10,
  };

  return (
    <ScrollView>
      {/*Header*/}
      <Card style={cardStyle}>
        <View
          style={{
            padding: 15,
            justifyContent: "center",
            flex: 1,
            flexDirection: "row",
          }}
        >
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Avatar.Image
              style={{ alignSelf: "center" }}
              size={80}
              source={trainer.image}
            />
            <Rating
              style={{ alignSelf: "center", top: 10 }}
              ratingCount={5}
              startingValue={trainer.rating}
              readonly
              imageSize={20}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "column",
              alignSelf: "center",
              justifyContent: "flex-start",
            }}
          >
            <Card.Title title={trainer.name} />
            <Text>{trainer.description} </Text>
          </View>
        </View>

        {/*Categories*/}
        <View
          style={{
            flexDirection: "row",
            alignSelf: "baseline",
            width: "100%",
            flexWrap: "wrap",
            justifyContent: "center",
            margin: 4,
          }}
        >
          {categories}
        </View>

        {/*Biography*/}
        <Title>Biography</Title>
        <Paragraph>{trainer.biography}</Paragraph>

        {/*Map*/}
        <Title>Location</Title>
        <Surface style={s.surface}>{/*Map*/}</Surface>
      </Card>

      {/*Buttons*/}
      <Card style={cardStyle}>
        <View
          style={{
            padding: 5,
            flex: 1,
            flexDirection: "row",
            justifyContent: "space-evenly",
            flexWrap: "wrap",
          }}
        >
          <Button
            mode="contained"
            style={(s.standardButton, { width: "40%" })}
            onPress={() => {
              navigation.navigate("Schedule", trainer);
            }}
          >
            Schedule Class
          </Button>
        </View>
      </Card>
    </ScrollView>
  );
}

export default TrainerScreen;

/*
<View style={s.modalView}>
<View style={{ flexDirection: "row" }}>
  <View>
    <Text style={s.modalText}>{route.params.item.name}</Text>
    <Image
      style={
        (s.cardProfileImage,
        { width: 150, height: 150, borderRadius: 20 })
      }
      source={route.params.item.image}
    ></Image>
    <Rating
      ratingCount={5}
      startingValue={route.params.item.rating}
      readonly
      imageSize={20}
    />
  </View>
  <View>
    <Text style={(s.modalText, { fontSize: 20, top: 40, padding: 20 })}>
      {'"' + route.params.item.description + '"'}
    </Text>
    <FlatList
      keyExtractor={(item) => item.id}
      style={{ padding: 20, top: 20 }}
      data={route.params.item.categories}
      renderItem={({ item }) => {
        return <Text style={{ fontSize: 20 }}>{item}</Text>;
      }}
    ></FlatList>
  </View>
</View>
<View>
  <Text style={{ fontSize: 25 }}>Biography</Text>
  <Text>{route.params.item.biography}</Text>
</View>
<TouchableHighlight
  style={{ ...s.openButton, backgroundColor: "#2196F3" }}
  onPress={() => {
    navigation.goBack(null);
  }}
>
  <Text style={s.textStyle}>Close</Text>
</TouchableHighlight>
</View>*/
