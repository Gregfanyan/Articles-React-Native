import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import MainButton from "../MainButton";
import Colors from "../../constants/Colors.js";

function Buttons({ changeUrlhandleCLick, isClicked }) {
  return (
    <View>
      <View pointerEvents={!isClicked ? "none" : "auto"}>
        <MainButton
          /*    style={styles.buttonNew} */
          style={{
            backgroundColor: isClicked ? Colors.primary : Colors.primary_text,
          }}
          onPress={changeUrlhandleCLick}
          disabled={isClicked}
        >
          new
        </MainButton>
      </View>
      <View pointerEvents={isClicked ? "none" : "auto"}>
        <MainButton
          /*  style={styles.buttonPast} */
          style={!isClicked ? styles.active : styles.disabled}
          onPress={changeUrlhandleCLick}
          disabled={!isClicked}
        >
          past
        </MainButton>
      </View>
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
