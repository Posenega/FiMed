import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import SignInScreen from "../screens/SignInScreen";
import SignUpScreen from "../screens/SignUpScreen";
const Stack = createNativeStackNavigator();

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="signin" component={SignInScreen} />
      </Stack.Navigator>
      {/* <Stack.Navigator>
        <Stack.Screen name="signup" component={SignUpScreen} />
      </Stack.Navigator> */}
    </NavigationContainer>
  );
};

export default MainNavigator;
