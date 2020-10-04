import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";

import LoginScreen from "./src/screens/Login.js";
import HomeScreen from "./src/screens/Home.js";
import InterestPromptScreen from "./src/screens/InterestPromptScreen.js";
import RegisterScreen from "./src/screens/Register.js";
import TrainerScreen from "./src/screens/Trainer.js";
import ScheduleScreen from "./src/screens/Schedule.js";

const Stack = createStackNavigator();

const Navigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Interests"
        component={InterestPromptScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen
        name="Trainer"
        component={TrainerScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen
        name="Schedule"
        component={ScheduleScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="Register" component={RegisterScreen} />
    </Stack.Navigator>
  );
};

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer>
        <Navigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "purple",
    accent: "green",
  },
};

export default App;
