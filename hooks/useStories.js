import { useState, useEffect } from "react";
import axios from "axios";

function useStories() {
  const [storyIds, setStoryIds] = useState([]);
  const baseUrl = "https://hacker-news.firebaseio.com/v0/";
  const topStoriesUrl = `${baseUrl}topstories.json`;
  const storyUrl = `${baseUrl}item/`;

  const fetchTopStory = async (storyId) => {
    return await axios
      .get(`${storyUrl}${storyId}.json`)
      .then(({ data }) => data)
      .catch((e) => console.log("error"));
  };

  useEffect(() => {
    axios
      .get(topStoriesUrl)
      .then((response) => response && setStoryIds(response.data))
      .catch((e) => console.log("error"));
  }, []);

  return [storyIds, fetchTopStory];
}

export default useStories;
