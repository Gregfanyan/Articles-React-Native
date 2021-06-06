import React from "react";
import { StyleSheet, Text, View, Button, ScrollView } from "react-native";

function LoadMore({ handleShowMoreStories }) {
  return (
    <ScrollView>
      <Button title="load more" onPress={handleShowMoreStories} />
    </ScrollView>
  );
}

export default LoadMore;
