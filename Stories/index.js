import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { getStories } from "../Services/api";

function Stories({ storyId }) {
  const [story, setStory] = React.useState({});
  const { title, text, url, time } = story;

  //getStories function takes storyId as a distructured props and returns the stories
  //either top or best stories depending on the click(changeUrlhandleCLick function)
  useEffect(() => {
    getStories(storyId).then((response) => setStory(response));
    return () => {
      setStory({});
    };
  }, [storyId]);

  return (
    <View>
      <View href={url}>
        <Text>{title}</Text>
        <Text>{text}</Text>
        <Text>{time}</Text>
      </View>
    </View>
  );
}

export default Stories;
