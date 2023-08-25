import axios from "axios";

const axiosInstance = axios.create({
   baseURL: import.meta.env.REACT_APP_BASE_API,
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
