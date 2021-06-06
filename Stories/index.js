import React, { useState, useEffect, useCallback } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { getStories } from "../Services/api";

function Stories({ storyId }) {
  const [story, setStory] = React.useState({});
  const { title, text, url, time } = story;

  //getStories function takes storyId as a distructured props and returns the stories
  //either top or best stories depending on the click(changeUrlhandleCLick function)
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
          {story ? (
            <View>
              <Text>{title}</Text>
              <Text>{text}</Text>
              {/*     <Text>{time}</Text> */}
            </View>
          ) : null}
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
});

export default Stories;
