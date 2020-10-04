import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { DefaultTheme, Provider as PaperProvider } from "react-native-paper";
import StackNavigator from "./src/navigation/StackNavigator";

const App = () => {
  return (
    <PaperProvider theme={theme}>
      <NavigationContainer theme={theme}>
        <StackNavigator />
      </NavigationContainer>
    </PaperProvider>
  );
};

export const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "purple",
    accent: "green",
  },
};

export default App;
