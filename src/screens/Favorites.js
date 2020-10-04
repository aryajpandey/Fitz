import React from "react";
import { View } from "react-native";
import { Appbar, Card, Avatar, Chip, Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

function FavoritesScreen({ navigation, route }) {
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
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Aloha"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="AZ" />}
            right={() => (
              <Card.Actions>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
          <Chip style={{ width: 65, marginHorizontal: 24 }}>Yoga</Chip>
        </Card>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Aloha"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="AZ" />}
            right={() => (
              <Card.Actions>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
          <Chip style={{ width: 65, marginHorizontal: 24 }}>Yoga</Chip>
        </Card>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Aloha"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="AZ" />}
            right={() => (
              <Card.Actions>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
          <Chip style={{ width: 65, marginHorizontal: 24 }}>Yoga</Chip>
        </Card>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Aloha"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="AZ" />}
            right={() => (
              <Card.Actions>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
          <Chip style={{ width: 65, marginHorizontal: 24 }}>Yoga</Chip>
        </Card>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Aloha"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="AZ" />}
            right={() => (
              <Card.Actions>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
          <Chip style={{ width: 65, marginHorizontal: 24 }}>Yoga</Chip>
        </Card>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Aloha"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="AZ" />}
            right={() => (
              <Card.Actions>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
          <Chip style={{ width: 65, marginHorizontal: 24 }}>Yoga</Chip>
        </Card>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Aloha"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="AZ" />}
            right={() => (
              <Card.Actions>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
          <Chip style={{ width: 65, marginHorizontal: 24 }}>Yoga</Chip>
        </Card>
      </ScrollView>
    </View>
  );
}

export default FavoritesScreen;
