import React from "react";
import { View, Text, Image, FlatList, TouchableHighlight } from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import {
  Avatar,
  Button,
  Card,
  Title,
  Paragraph,
  Dialog,
  DataTable,
  Chip,
  Divider,
  Surface,
  Appbar,
} from "react-native-paper";
import DateTimePicker from "@react-native-community/datetimepicker";
import AwesomeIcon from "react-native-vector-icons/FontAwesome";
import Moment from "moment";

import s from "../style";
import { getKeyString } from "../utils/numberUtils";

const CustomChip = ({ item, color }) => {
  return (
    <View
      style={[
        s.card,
        {
          paddingTop: 10,
          paddingBottom: 10,
          marginVertical: 5,
          width: "80%",
          backgroundColor: color,
        },
      ]}
    >
      <Text
        style={{
          color: "black",
          alignSelf: "center",
        }}
      >
        {item}
      </Text>
    </View>
  );
};

function ScheduleScreen({ navigation, route }) {
  const trainer = route.params;

  const selected = "#f2f2f2";
  const unselected = "white";

  const interests = trainer.categories;

  const [array, setArray] = React.useState(new Array(interests.length).fill(0));
  const [colorArray, setColorArray] = React.useState(
    new Array(interests.length).fill(unselected)
  );

  const [date, setDate] = React.useState(new Date("2020-10-04"));
  const [show, setShow] = React.useState(false);
  const [dialog, setDialog] = React.useState(false);
  const [mode, setMode] = React.useState("date");

  const cardStyle = {
    margin: 5,
    marginLeft: 10,
    marginRight: 10,
    padding: 5,
    borderRadius: 10,
  };

  return (
    <View>
      <ScrollView style={{ height: "100%" }}>
        <Appbar.Header style={{}}>
          <Appbar.BackAction
            onPress={() => {
              navigation.navigate("Trainer");
            }}
          />
          <Appbar.Content title="Schedule"></Appbar.Content>
        </Appbar.Header>
        <Card style={cardStyle}>
          <View
            style={{
              height: 150,
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
                ratingCount={trainer.rating}
                readonly
                ratingColor="white"
                imageSize={20}
                type="custom"
                ratingImage={require("../../assets/star2.jpg")}
                style={{ paddingVertical: 10 }}
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
              <Card.Title
                style={{
                  alignSelf: "flex-end",
                }}
                title={trainer.name}
              />
            </View>
          </View>
        </Card>

        {/*Categories*/}
        <Card
          style={
            (cardStyle,
            {
              padding: 15,
              width: "95%",
              alignSelf: "center",
              borderRadius: 10,
            })
          }
        >
          <FlatList
            style={{ width: "100%" }}
            data={interests}
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{ width: "100%", flex: 1 }}
                  onPress={() => {
                    let temp = JSON.parse(JSON.stringify(array));
                    temp.fill(0);
                    temp[interests.indexOf(item)] =
                      temp[interests.indexOf(item)] === 1 ? 0 : 1;
                    setArray(temp);
                    let temp1 = JSON.parse(JSON.stringify(colorArray));
                    temp1.fill(unselected);
                    temp1[interests.indexOf(item)] =
                      temp1[interests.indexOf(item)] === selected
                        ? unselected
                        : selected;
                    setColorArray(temp1);
                  }}
                >
                  <CustomChip
                    item={item}
                    color={colorArray[interests.indexOf(item)]}
                  />
                </TouchableOpacity>
              );
            }}
            keyExtractor={getKeyString}
            numColumns={2}
          ></FlatList>
        </Card>

        {/*Agenda*/}
        <Card style={cardStyle}>
          <View style={{ marginTop: 20 }}>
            <View
              style={{ flexDirection: "row", justifyContent: "space-evenly" }}
            >
              <View>
                <Button
                  icon="calendar-week"
                  mode="contained"
                  style={(s.standardButton, { width: "100%" })}
                  onPress={() => {
                    setShow(true);
                    setMode("date");
                  }}
                >
                  choose date
                </Button>
              </View>
            </View>
            {show && (
              <DateTimePicker
                testID="dateTimePicker"
                value={date}
                mode={mode}
                is24Hour={true}
                display="default"
                onChange={(event, selectedDate) => {
                  const currentDate = selectedDate || date;
                  setShow(Platform.OS === "ios");
                  setDate(currentDate);
                  if (mode === "date") {
                    setMode("time");
                    setShow(true);
                  }
                }}
              />
            )}
          </View>
          <View
            style={{
              width: "100%",
              justifyContent: "center",
              flex: 1,
              margin: 10,
              flexDirection: "column",
            }}
          >
            <Text style={{ alignSelf: "center", fontSize: 30 }}>
              {Moment(date).format("Do MMMM")}
            </Text>
            <Text style={{ alignSelf: "center", fontSize: 40 }}>
              {Moment(date).format("h:mm a")}
            </Text>
          </View>
        </Card>

        <Button
          mode="contained"
          style={
            (s.standardButton,
            { width: "80%", alignSelf: "center", marginTop: 20 })
          }
          onPress={() => {
            let a = 0;
            for (let i = 0; i < array.length; i++) {
              a += array[i];
            }
            if (a === 0) {
              setDialog(true);
            } else {
              navigation.navigate("RegisteredClass", { trainer, date });
            }
          }}
        >
          Confirm
        </Button>
      </ScrollView>
      <Dialog
        style={{ zIndex: 1000 }}
        visible={dialog}
        onDismiss={() => {
          setDialog(false);
        }}
      >
        <Dialog.Title>Error</Dialog.Title>
        <Dialog.Content>
          <Paragraph>You have to choose one category first</Paragraph>
        </Dialog.Content>
      </Dialog>
    </View>
  );
}

export default ScheduleScreen;
