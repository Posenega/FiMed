import {
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState } from "react";
import Globals from "../public/Globals";
import ShowValueInput from "../icons/ShowValueInput";

export default function CustomInput(props) {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <View style={styles.inputConatiner}>
      <TextInput
        {...props}
        selectionColor={Globals.COLOR.PRIMARYSWATCH}
        style={
          !props.isPassword
            ? styles.input
            : { ...styles.input, ...styles.passwordInput }
        }
        placeholderTextColor="rgba(255,255,255,0.15)"
        autoComplete={false}
        autoCorrect={false}
      />
      {props.isPassword ? (
        <TouchableWithoutFeedback onPress={() => setIsVisible(!isVisible)}>
          <View
            style={{
              marginLeft: 5,
              height: 50,
              width: 20,
              alignItems: "center",
              justifyContent: "center",
              // backgroundColor: "red",
            }}
          >
            <ShowValueInput size="15" color={isVisible ? "#272727" : "#fff"} />
          </View>
        </TouchableWithoutFeedback>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  inputConatiner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    backgroundColor: Globals.COLOR.SECONDARY,
    borderRadius: 8,
  },
  input: {
    height: 50,
    width: "100%",
    color: "#fff",
    paddingLeft: "5%",
  },
  passwordInput: {
    width: "90%",
  },
});
