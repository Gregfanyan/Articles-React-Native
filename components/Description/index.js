import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

function Description({ text }) {
  return (
    <View>
      {text ? (
        <Text>{text}</Text>
      ) : (
        <Text>
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, …when an unknown printer took a galley of type and scrambled
        </Text>
      )}
    </View>
  );
}

export default Description;
