import MainNavigator from "./navigation/MainNavigator";
import * as Font from "expo-font";
import { useState } from "react";
import { View, StatusBar } from "react-native";
import { setCustomText } from "react-native-global-props";

const fetchFonts = () => {
  return Font.loadAsync({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-LightItalic": require("./assets/fonts/OpenSans-LightItalic.ttf"),

    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Medium": require("./assets/fonts/OpenSans-Medium.ttf"),
    "OpenSans-ExtraBold": require("./assets/fonts/OpenSans-ExtraBold.ttf"),
  });
};

export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);

  fetchFonts().then(() => setFontsLoaded(true));

  if (!fontsLoaded) {
    return <View></View>;
  }

  setCustomText({ style: { fontFamily: "OpenSans" } });

  return (
    <>
      <StatusBar
        translucent
        backgroundColor="transparent"
        barStyle={"light-content"}
      />
      <MainNavigator />
    </>
  );
}
