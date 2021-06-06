import axios from "axios";

//HackerNews APIs
export const baseUrl = "https://hacker-news.firebaseio.com/v0/";
export const topStoriesUrl = `${baseUrl}topstories.json`;
export const bestStoriesUrl = `${baseUrl}beststories.json`;
export const storyUrl = `${baseUrl}item/`;

//based on the storyId argument function will return the data
export const getStories = async (storyId) => {
  return await axios
    .get(`${storyUrl}${storyId}.json`)
    .then(({ data }) => data)
    .catch((e) => console.log("error"));
};
