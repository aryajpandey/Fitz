import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  RefreshControl,
  FlatList,
} from "react-native";
import { Rating } from "react-native-ratings";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Searchbar } from "react-native-paper";

import styles from "../style";
import TabNavigator from "../navigation/TabNavigator";

const AppHeader = ({ header }) => {
  return (
    <Appbar.Header
      style={{
        height: 80,
        backgroundColor: "#ffea00",
      }}
    >
      <View style={{ flexDirection: "row" }}>
        <Searchbar
          style={{
            borderRadius: 25,
          }}
          placeholder="Find"
        />
      </View>
    </Appbar.Header>
  );
};

const Trainer = ({ trainer }) => {
  return (
    <SafeAreaView>
      <View style={styles.card}>
        <View
          style={{ flex: 1, flexDirection: "column", justifyContent: "center" }}
        >
          <Image style={styles.cardProfileImage} source={trainer.image} />
          <Text
            style={{
              alignSelf: "center",
              fontWeight: "bold",
              fontSize: 15,
            }}
          >
            {trainer.name}
          </Text>
          <Rating
            ratingCount={5}
            startingValue={trainer.rating}
            readonly
            imageSize={20}
          />
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ padding: 20 }}
            keyExtractor={(item) => item.id}
            data={trainer.categories}
            renderItem={({ item }) => {
              return <Text style={{ fontSize: 15 }}>{item}</Text>;
            }}
          ></FlatList>
        </View>
      </View>
    </SafeAreaView>
  );
};

const wait = (timeout) => {
  return new Promise((resolve) => {
    setTimeout(resolve, timeout);
  });
};

function HomeScreen({ route, navigation }) {
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={{ flex: 1, paddingTop: 5, backgroundColor: "white" }}>
      <FlatList
        data={require("../dummy/cards.js")}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Trainer", { item });
              }}
            >
              <Trainer trainer={item} />
            </TouchableOpacity>
          );
        }}
        keyExtractor={(item) => item.id}
        numColumns={1}
        contentContainerStyle={{
          backgroundColor: "white",
        }}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
      ></FlatList>
    </View>
  );
}

export default HomeScreen;
