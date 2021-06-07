import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import MainButton from "../MainButton";
import Colors from "../../constants/Colors.js";

function Buttons({ changeUrlhandleCLick, isClicked }) {
  return (
    <View>
      <MainButton
        style={{
          backgroundColor: isClicked ? Colors.primary : Colors.primary_text,
        }}
        onPress={changeUrlhandleCLick}
        pointerEvents={!isClicked ? "none" : "auto"}
      >
        new
      </MainButton>

      <MainButton
        style={!isClicked ? styles.active : styles.disabled}
        onPress={changeUrlhandleCLick}
        pointerEvents={isClicked ? "none" : "auto"}
      >
        past
      </MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  active: {
    backgroundColor: Colors.primary,
  },
  disabled: {
    backgroundColor: Colors.primary_text,
  },
});

export default Buttons;
