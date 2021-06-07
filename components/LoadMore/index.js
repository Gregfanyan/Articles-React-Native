import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";
import MainButton from "../MainButton";
import Colors from "../../constants/Colors";

function LoadMore({ handleShowMoreStories }) {
  return (
    <MainButton style={styles.button} onPress={handleShowMoreStories}>
      load more
    </MainButton>
  );
}

const styles = StyleSheet.create({
  button: {
    color: Colors.secondary_text,
  },
});

export default LoadMore;
