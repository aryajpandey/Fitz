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

const Trainer = ({ trainer }) => {
  const money =
    trainer.price <= 8
      ? "$"
      : trainer.price <= 12
      ? "$$"
      : trainer.price <= 16
      ? "$$$"
      : "$$$$";

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
        <View style={{ flex: 0.4 }}>
          <Text
            style={{
              alignSelf: "center",
              right: 10,
              color: "#32a852",
              fontWeight: "bold",
              letterSpacing: 2,
            }}
          >
            {money}
          </Text>
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

function HomeScreen({ navigation, route }) {

  const AppHeader = ({ header }) => {
    return (
      <Appbar.Header style={{}}>
        <Appbar.BackAction
          onPress={() => {
            navigation.navigate("Home");
          }}
        />
        <View style={{ flexDirection: "row", paddingBottom: 5 }}>
          <Searchbar
            style={{
              borderRadius: 25,
              width: "92%",
            }}
            placeholder="Find"
          ></Searchbar>
        </View>
      </Appbar.Header>
    );
  };

  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(700).then(() => setRefreshing(false));
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <AppHeader />
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
        keyExtractor={(item) => item.id + item.age}
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
