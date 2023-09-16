import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://all-stars-be-8qlp.onrender.com/api/v1",
  timeout: 30000,
});

axiosInstance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");

  if (accessToken) {
    config.headers["x-access-token"] = accessToken;
  }

  return config;
});
export default axiosInstance;
