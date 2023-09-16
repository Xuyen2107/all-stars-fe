import axiosInstance from "./axiosInstance";

const storiesAPI = {
  url: (values) => axiosInstance.post("story/upload_story", values),
  getStories: () => axiosInstance.get("story/getAllStory")
};



export default storiesAPI;