import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/Login.js";
import InterestPromptScreen from "..//screens/InterestPromptScreen.js";
import RegisterScreen from "../screens/Register.js";
import TrainerScreen from "../screens/Trainer.js";
import TabNavigator from "./TabNavigator.js";
import ScheduleScreen from "../screens/Schedule";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen name="Register" component={RegisterScreen} />

      <Stack.Screen
        name="Home"
        component={TabNavigator}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Interests"
        component={InterestPromptScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="Trainer" component={TrainerScreen} />

      <Stack.Screen name="Schedule" component={ScheduleScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;