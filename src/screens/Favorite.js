import React from "react";
import { View, Text, Image, FlatList, TouchableHighlight } from "react-native";
import s from "../style";
import {
  Appbar,
  Card,
  Avatar,
  Paragraph,
  Title,
  Chip,
  Button,
} from "react-native-paper";
import App from "../../App";
import { BorderlessButton, ScrollView } from "react-native-gesture-handler";

function FavoriteScreen({ navigation, route }) {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <Appbar
        style={{
          height: 100,
        }}
      >
        <Appbar.Content title=" Your Favorite Trainers" />
      </Appbar>

      <ScrollView style={{ flex: 1, marginRight: 10, marginLeft: 10 }}>
        <Card>
          <Card.Content>
            <Avatar.Text
              label="AA"
              style={{
                position: "relative",
                alignSelf: "flex-start",
                marginTop: 25,
              }}
            />
            <Title>Aloha</Title>
            <Paragraph>Your Favorite Trainer</Paragraph>
            <Chip style={{ width: 65, marginTop: 5 }}>Yoga</Chip>
          </Card.Content>
          <Card.Actions style={{ alignSelf: "flex-end" }}>
            <Button icon="calendar" style={{}}>
              Schedule Again
            </Button>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Content>
            <Avatar.Text
              label="AA"
              style={{
                position: "relative",
                alignSelf: "flex-start",
                marginTop: 25,
              }}
            />
            <Title>Aloha</Title>
            <Paragraph>Your Favorite Trainer</Paragraph>
            <Chip style={{ width: 65, marginTop: 5 }}>Yoga</Chip>
          </Card.Content>
          <Card.Actions style={{ alignSelf: "flex-end" }}>
            <Button icon="calendar" style={{}}>
              Schedule Again
            </Button>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Content>
            <Avatar.Text
              label="AA"
              style={{
                position: "relative",
                alignSelf: "flex-start",
                marginTop: 25,
              }}
            />
            <Title>Aloha</Title>
            <Paragraph>Your Favorite Trainer</Paragraph>
            <Chip style={{ width: 65, marginTop: 5 }}>Yoga</Chip>
          </Card.Content>
          <Card.Actions style={{ alignSelf: "flex-end" }}>
            <Button icon="calendar" style={{}}>
              Schedule Again
            </Button>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Content>
            <Avatar.Text
              label="AA"
              style={{
                position: "relative",
                alignSelf: "flex-start",
                marginTop: 25,
              }}
            />
            <Title>Aloha</Title>
            <Paragraph>Your Favorite Trainer</Paragraph>
            <Chip style={{ width: 65, marginTop: 5 }}>Yoga</Chip>
          </Card.Content>
          <Card.Actions style={{ alignSelf: "flex-end" }}>
            <Button icon="calendar" style={{}}>
              Schedule Again
            </Button>
          </Card.Actions>
        </Card>
        <Card>
          <Card.Content>
            <Avatar.Text
              label="AA"
              style={{
                position: "relative",
                alignSelf: "flex-start",
                marginTop: 25,
              }}
            />
            <Title>Aloha</Title>
            <Paragraph>Your Favorite Trainer</Paragraph>
            <Chip style={{ width: 65, marginTop: 5 }}>Yoga</Chip>
          </Card.Content>
          <Card.Actions style={{ alignSelf: "flex-end" }}>
            <Button icon="calendar" style={{}}>
              Schedule Again
            </Button>
          </Card.Actions>
        </Card>
      </ScrollView>
    </View>
  );
}

export default FavoriteScreen;
