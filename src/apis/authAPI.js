import axiosInstance from "./axiosInstance";

const authAPI = {
   login: (values) => axiosInstance.post("auth/login", values),
   register: (values) => axiosInstance.post("auth/register", values),
   authInfo: () => axiosInstance.post("auth/me"),
};

export default authAPI;