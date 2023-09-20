import axiosInstance from "./axiosInstance";

const storiesAPI = {
  upLoadStr: (values) => axiosInstance.post("/story/upload_story", values, {
    headers: {
      "Content-Type": "multipart/form-data"
    }
  }),
  getStories: () => axiosInstance.get("story/getAllStory")
};



export default storiesAPI;