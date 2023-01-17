import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigator from "./AuthNavigator";
import HomeNavigator from "./HomeNavigator";

const Stack = createNativeStackNavigator();

let isAuth = true;

const MainNavigator = () => {
  return (
    <NavigationContainer>
      {isAuth ? <HomeNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  );
};

export default MainNavigator;
