import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";

import Header from "./components/Header";
import useStories from "./hooks/useStories";
import Stories from "./components/Stories";

export default function App() {
  const [storyIds, fetchTopStory] = useStories();

  return (
    <View style={styles.container}>
      <Header />
      {storyIds &&
        storyIds.map((storyId) => (
          <Stories
            storyId={storyId}
            key={storyId}
            fetchTopStory={fetchTopStory}
          />
        ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
