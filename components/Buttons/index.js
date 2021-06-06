import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

function Buttons({ changeUrlhandleCLick, isClicked }) {
  return (
    <View>
      <Button title="new" onPress={changeUrlhandleCLick} disabled={isClicked} />

      <Button
        onPress={changeUrlhandleCLick}
        title="past"
        disabled={!isClicked}
      />
    </View>
  );
}

export default Buttons;
