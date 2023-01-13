import MainNavigator from "./navigation/MainNavigator";
import * as Font from "expo-font";
import { useCallback, useState } from "react";
import { View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { setCustomText } from "react-native-global-props";

const fetchFonts = () => {
  return Font.loadAsync({
    OpenSans: require("./assets/fonts/OpenSans-Regular.ttf"),
    "OpenSans-Bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    "OpenSans-Medium": require("./assets/fonts/OpenSans-Medium.ttf"),
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
      <MainNavigator />
    </>
  );
}
