import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MainView from "../components/utils/MainView";
import Globals from "../public/Globals";
import CustomInput from "../components/CustomInput";
import CategoryList from "../components/home/CategoryList";

export default function HomeScreen() {
  return (
    <MainView>
      <View style={styles.header}>
        <Text style={styles.plainText}>Hi Theo</Text>
        <View style={styles.profileContainer} />
      </View>
      <>
        <Text style={styles.hookupText}>Find all the</Text>
        <Text style={styles.hookupText}>medications you need.</Text>
      </>
      <View style={styles.inputContainer}>
        <CustomInput
          placeholder="Search what you need:"
          style={{ height: 60, borderRadius: 30, width: "85%" }}
        />
      </View>
      <CategoryList />
    </MainView>
  );
}

const styles = StyleSheet.create({
  header: {
    marginTop: 20,
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  plainText: {
    color: "white",
  },
  profileContainer: {
    height: 60,
    width: 60,
    borderRadius: 60,
    backgroundColor: "white",
  },
  hookupText: {
    fontFamily: Globals.FAMILLY.EXTRABOLD,
    fontSize: 26,
    color: "white",
  },
  inputContainer: {
    marginTop: 25,
    alignItems: "center",
    width: "100%",
  },
});
