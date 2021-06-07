import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { getStories } from "../Services/api";
import ArticleTitle from "../components/ArticleTitle";
import Description from "../components/Description";
function Stories({ storyId }) {
  const [story, setStory] = React.useState({});
  const { title, text, url, time } = story;
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

  return (
    <View>
      <View style={styles.content}>
        <ScrollView contentContainerStyle={styles.list}>
          <ArticleTitle title={title} />
          <Description text={text} />
          <View>{/*     <Text>{time}</Text> */}</View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  content: {
    width: "80%",
  },
  list: {
    flexGrow: 1,
    justifyContent: "flex-end",
  },
  titleText: {
    fontFamily: "open-sans",
  },
});

export default Stories;
