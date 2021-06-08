import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView, Linking } from "react-native";

import { getStories } from "../Services/api";
import ArticleTitle from "../components/ArticleTitle";
import Description from "../components/Description";
import Detail from "../components/Detail";

function Stories({ storyId }) {
  const [story, setStory] = React.useState({});
  let componentMounted = true;

  useEffect(() => {
    getStories(storyId).then((response) => {
      if (componentMounted) {
        setStory(response);
      }
    });
    return () => {
      componentMounted = false;
    };
  }, [storyId]);

  const a = useCallback(() => {
    if (componentMounted) {
      getStories(storyId).then((response) => setStory(response));
    }
    return () => {
      componentMounted = false;
    };
  }, [storyId]);

  const { title, text, url, time } = story;

  return (
    <View style={styles.screen}>
      <Text style={styles.content} onPress={() => Linking.openURL(url)}>
        <ArticleTitle title={title} />
        <Description text={text} />
        <Detail time={time} />
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    flexDirection: "column",
    width: "90%",
    height: 100,
    marginBottom: 20,
    shadowColor: "black",
    backgroundColor: "white",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 6,
    shadowRadius: 2,
    elevation: 10,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "flex-start",
  },
  content: {
    maxWidth: "80%",
  },
});

export default Stories;
