import {
  Animated,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React, { useState, useEffect, useRef } from "react";
import Globals from "../../public/Globals";
import Arrow from "../../icons/Arrow";

export default function DropDownMenu(props) {
  const [currentValue, setCurrentValue] = useState(props.value || "");
  const [currentLabel, setCurrentLabel] = useState(
    props.value
      ? props.items.find((item) => item.value === props.value).label
      : ""
  );

  useEffect(() => {
    props.onChange(currentValue);
  }, [currentValue]);

  const toggleCollapse = () => {
    Animated.timing(collapseAnimation, {
      toValue: collapseAnimation._value == MAX_HEIGHT ? MIN_HEIGHT : MAX_HEIGHT,
      duration: 650,
      useNativeDriver: false,
    }).start();
  };
  const MIN_HEIGHT = 50;
  const MAX_HEIGHT = 50 + props.items.length * 30 + 12;
  const collapseAnimation = useRef(new Animated.Value(MIN_HEIGHT)).current;

  const spin = collapseAnimation.interpolate({
    inputRange: [MIN_HEIGHT, MAX_HEIGHT],
    outputRange: ["0deg", "180deg"],
  });

  return (
    <TouchableWithoutFeedback onPress={toggleCollapse}>
      <Animated.View
        style={{
          ...styles.mainContainer,
          height: collapseAnimation,
        }}
      >
        <View style={styles.header}>
          <Text style={currentLabel ? styles.itemText : styles.text}>
            {currentLabel || props.text}
          </Text>
          <View style={{ transform: [{ rotate: "90deg" }] }}>
            <Arrow
              onPress={toggleCollapse}
              svgStyle={{ transform: [{ rotate: spin }] }}
            />
          </View>
        </View>
        {props.items.map((item) => {
          return (
            <TouchableWithoutFeedback
              key={item.value}
              onPress={() => {
                toggleCollapse();
                setCurrentValue(item.value);
                setCurrentLabel(item.label);
              }}
            >
              <View style={styles.item}>
                <Text style={styles.itemText}>{item.label}</Text>
              </View>
            </TouchableWithoutFeedback>
          );
        })}
      </Animated.View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    overflow: "hidden",
    backgroundColor: Globals.COLOR.SECONDARY,
    borderRadius: 8,
    paddingHorizontal: Globals.PADDING.HORIZONTAL,
  },
  header: {
    height: 50,
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
  text: {
    color: "rgba(255,255,255,0.15)",
    fontSize: 12,
    fontFamily: Globals.FAMILLY.MEDIUM,
  },
  item: {
    // backgroundColor: "red",
    // marginBottom: 12,
    height: 30,

    justifyContent: "center",
  },
  itemText: {
    fontSize: 13,
    color: "white",
    fontFamily: Globals.FAMILLY.MEDIUM,
  },
});
