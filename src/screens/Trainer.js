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
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import s from "../style";
import { Marker } from "react-native-maps";

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

  console.log(trainer.coordinates[1]);

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

      {/*Biography*/}
      <Card style={cardStyle}>
        <Card.Content>
          <Title>Biography</Title>
          <Paragraph>{trainer.biography}</Paragraph>
        </Card.Content>
      </Card>

      {/*Map*/}
      <Card style={cardStyle}>
        <Card.Content>
          <Title>Location</Title>
          <Surface style={(s.surface, { width: "100%", height: 300 })}>
            <View
              style={{
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: "flex-end",
                alignItems: "center",
                position: "absolute",
              }}
            >
              <MapView
                style={{ ...StyleSheet.absoluteFillObject }}
                initialRegion={{
                  longitude: Number(trainer.coordinates[0]),
                  latitude: Number(trainer.coordinates[1]),
                  latitudeDelta: 0.01,
                  longitudeDelta: 0.01,
                }}
              >
                <Marker
                  coordinate={{
                    latitude: Number(trainer.coordinates[1]),
                    longitude: Number(trainer.coordinates[0]),
                  }}
                  title={trainer.name}
                ></Marker>
              </MapView>
            </View>
          </Surface>
        </Card.Content>
      </Card>
    </ScrollView>
  );
}

export default TrainerScreen;
