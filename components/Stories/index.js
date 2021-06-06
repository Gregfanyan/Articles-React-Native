import React from "react";
import { StyleSheet, Text, View } from "react-native";

function Stories({ storyId, fetchTopStory }) {
  const [story, setStory] = React.useState({});

  React.useEffect(() => {
    fetchTopStory(storyId).then((response) => setStory(response));
  }, []);

  const { title, text, url, time } = story;
  console.log(story);
  return (
    <View>
      <Text>{title}</Text>
      <Text>{text}</Text>
      <Text>hello</Text>
      <Text></Text>
    </View>
  );
}

export default Stories;
