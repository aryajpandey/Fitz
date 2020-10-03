import React from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  RefreshControl,
  FlatList,
  Alert,
} from "react-native";
import { Rating } from "react-native-ratings";
import { SafeAreaView } from "react-native-safe-area-context";
import { Appbar, Portal, Searchbar } from "react-native-paper";
import styles from "../style";

const AppHeader = () => {
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
        ></Searchbar>
      </View>
    </Appbar.Header>
  );
};

const TrainerInfo = () => {
  const showMod = () => setVisible(true);
  const hideMod = () => setVisible(false);

  return (
    <Portal>
      <Modal visible={hideMod}>
        <Text>Sample</Text>
      </Modal>
    </Portal>
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
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <AppHeader></AppHeader>
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
