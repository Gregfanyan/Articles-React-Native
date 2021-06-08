import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import BodyText from "../BodyText";

function Description({ text }) {
  return (
    <View style={styles.container}>
      {text ? (
        <BodyText>{text}</BodyText>
      ) : (
        <BodyText>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, …when an unknown printer took a galley of type and scrambled
        </BodyText>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: "flex-start",
  },
});

export default Description;
