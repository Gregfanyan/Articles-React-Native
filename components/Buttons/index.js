import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import MainButton from "../MainButton";
import Colors from "../../constants/Colors.js";

function Buttons({ changeUrlhandleCLick, isClicked }) {
  return (
    <View>
      <MainButton
        style={styles.buttonNew}
        onPress={changeUrlhandleCLick}
        disabled={isClicked}
      >
        new
      </MainButton>

      <MainButton
        style={styles.buttonPast}
        onPress={changeUrlhandleCLick}
        disabled={!isClicked}
      >
        past
      </MainButton>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonNew: {
    color: Colors.secondary_text,
  },
  buttonPast: {
    color: Colors.secondary_text,
  },
});

export default Buttons;
