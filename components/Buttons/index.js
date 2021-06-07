import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import MainButton from "../MainButton";
import Colors from "../../constants/Colors.js";

function Buttons({ changeUrlhandleCLick, isClicked }) {
  return (
    <View style={styles.buttonContainer}>
      <View pointerEvents={isClicked ? "none" : "auto"}>
        <MainButton
          style={!isClicked ? styles.active : styles.disabled}
          onPress={changeUrlhandleCLick}
        >
          new
        </MainButton>
      </View>
      <View pointerEvents={!isClicked ? "none" : "auto"}>
        <MainButton
          style={isClicked ? styles.active : styles.disabled}
          onPress={changeUrlhandleCLick}
          pointerEvents={isClicked ? "none" : "auto"}
        >
          past
        </MainButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginVertical: 20,
    marginHorizontal: 5,
  },
  active: {
    backgroundColor: Colors.primary,
    marginRight: 10,
  },
  disabled: {
    backgroundColor: Colors.light_grey,
    marginRight: 10,
  },
});

export default Buttons;
