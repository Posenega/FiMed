import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";

import Globals from "../../public/Globals";
import Kidney from "../../icons/Kidney";
import Category from "./Category";
import Categories from "../../public/Categories";

export default function CategoryList() {
  return (
    <View style={styles.categoryContainer}>
      <View style={styles.catHeader}>
        <View style={styles.sideCat} />
        <Text style={{ ...styles.plainText, fontSize: 16 }}>Categories</Text>
      </View>
      <View style={styles.categories}>
        {Categories.map((category) => {
          return (
            <Category
              key={category.value}
              icon={category.icon}
              category={category.category}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  plainText: {
    color: "white",
  },
  categoryContainer: {
    marginTop: 50,
  },
  catHeader: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  sideCat: {
    marginRight: 15,
    height: 15,
    width: 15,
    borderRadius: 15,
    backgroundColor: Globals.COLOR.PRIMARYSWATCH,
  },
  categories: {
    marginTop: 30,
    height: "auto",
    width: "100%",
    backgroundColor: "red",
    alignItems: "flex-start",
    flexDirection: "row",
  },
});
