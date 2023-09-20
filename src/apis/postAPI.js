import axiosInstance from "./axiosInstance";

const postAPI = {
  getAllPost: () => axiosInstance.get("/post/all"),
  createPost: (values) => axiosInstance.post("/post", values),
  like: (postId) => axiosInstance.put(`/post/:${postId}/like`),
  comment: (values) => axiosInstance.post("/comment/create_comment", values),
};

export default postAPI;
