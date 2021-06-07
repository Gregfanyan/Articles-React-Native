import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

function ArticleTitle({ title }) {
  return (
    <View>
      <Text>{title}</Text>
    </View>
  );
}

export default ArticleTitle;
