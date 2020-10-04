import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  RefreshControl,
  FlatList,
  ImageBackground,
} from "react-native";
import { Rating } from "react-native-ratings";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Searchbar } from "react-native-paper";
import styles from "../style";
import { getKeyString } from "../utils/numberUtils";
import { ScrollView } from "react-native-gesture-handler";

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
          style={{
            flex: 1,
            flexDirection: "column",
            justifyContent: "center",
          }}
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
            ratingCount={trainer.rating}
            readonly
            ratingColor="white"
            imageSize={20}
            type="custom"
            ratingImage={require("../../assets/star2.jpg")}
            style={{ paddingVertical: 10 }}
          />
        </View>
        <View style={{ flex: 1 }}>
          <FlatList
            style={{ padding: 20 }}
            keyExtractor={getKeyString}
            data={trainer.categories}
            renderItem={({ item }) => {
              return <Text style={{ fontSize: 15 }}>{item}</Text>;
            }}
          />
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
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            height: "75%",
            marginHorizontal: 18,
          }}
        >
          <Searchbar
            style={{
              borderRadius: 25,
              width: "100%",
            }}
            placeholder="Find"
          />
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
    <View style={{ flex: 1 }}>
      <AppHeader />
      <ScrollView>
        <ImageBackground
          source={require("../../assets/wallpaper-retro.jpg")}
          style={{
            backgroundSize: "cover",
          }}
        >
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
            keyExtractor={getKeyString}
            numColumns={1}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          />
        </ImageBackground>
      </ScrollView>
    </View>
  );
}

export default HomeScreen;
