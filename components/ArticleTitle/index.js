import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import TitleText from "../TitleText";

function ArticleTitle({ title }) {
  return (
    <View>
      <TitleText>{title}</TitleText>
    </View>
  );
}

export default ArticleTitle;
