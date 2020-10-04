import React from "react";
import { SafeAreaView } from "react-native";
import { Appbar, Card, Avatar, Chip, Button } from "react-native-paper";
import { ScrollView } from "react-native-gesture-handler";

function FavoritesScreen({ navigation, route }) {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#fff",
      }}
    >
      <ScrollView style={{ flex: 1, marginRight: 10, marginLeft: 10, paddingTop:25 }}>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Nikolai Kardashev"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="NK" />}
            right={() => (
              <Card.Actions>
                <Chip style={{ width: 60, marginHorizontal: 24 }}>Yoga</Chip>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
        </Card>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Carl Gauss"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="CG" />}
            right={() => (
              <Card.Actions>
                <Chip style={{ width: 65, marginHorizontal: 24 }}>Zumba</Chip>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
        </Card>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Leonhard Euler"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="LE" />}
            right={() => (
              <Card.Actions>
                <Chip style={{ width: 100, marginHorizontal: 24 }}>
                  Fitness trainer
                </Chip>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
        </Card>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Schroedinger"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="S" />}
            right={() => (
              <Card.Actions>
                <Chip style={{ width: 65, marginHorizontal: 24 }}>Boxing</Chip>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
        </Card>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Bill Gates"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="BG" />}
            right={() => (
              <Card.Actions>
                <Chip style={{ width: 65, marginHorizontal: 24 }}>Tai Chi</Chip>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
        </Card>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Steve Jobs"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="SJ" />}
            right={() => (
              <Card.Actions>
                <Chip style={{ width: 80, marginHorizontal: 24 }}>
                  Aerobics
                </Chip>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
        </Card>
        <Card style={{ paddingVertical: 10 }}>
          <Card.Title
            title="Mark Zuckerberg"
            subtitle="Your Favorite Trainer"
            left={() => <Avatar.Text size={48} label="MZ" />}
            right={() => (
              <Card.Actions>
                <Chip style={{ width: 120, marginHorizontal: 24 }}>
                  Strength Training
                </Chip>
                <Button
                  icon="calendar"
                  // onPress={() => navigation.navigate("Schedule")}
                >
                  Join
                </Button>
              </Card.Actions>
            )}
          />
        </Card>
      </ScrollView>
    </SafeAreaView>
  );
}

export default FavoritesScreen;
