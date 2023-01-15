import { StyleSheet, View, Text } from "react-native";
import React from "react";
import MainView from "../../components/utils/MainView";
import AuthButton from "../../components/customs/Auth/AuthButton";
import Globals from "../../public/Globals";
import AuthSecondaryButton from "../../components/customs/Auth/AuthSecondaryButton";

const WelcomeScreen = ({ navigation }) => {
  return (
    <MainView>
      <View style={styles.upperContainer}>
        <Text style={styles.appName}>FiMed</Text>
      </View>
      <View style={styles.lowerContainer}>
        <AuthButton
          onPress={() => {
            return navigation.navigate("signup");
          }}
          buttonText="Create Your Account"
        />
        <AuthSecondaryButton
          onPress={() => {
            navigation.navigate("signin");
          }}
          isSignup={true}
        />
      </View>
    </MainView>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  upperContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  appName: {
    fontSize: 40,
    fontFamily: Globals.FAMILLY.EXTRABOLD,
    color: "white",
  },
  lowerContainer: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 25,
    alignItems: "center",
  },
});
