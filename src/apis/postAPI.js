import axiosInstance from "./axiosInstance";

const postAPI = {
  getAllPost: () => axiosInstance.get("/post/all"),
};

export default postAPI;
