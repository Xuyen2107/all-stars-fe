import axios from "axios";

const apiV1 = axios.create({
  baseURL: import.meta.env.REACT_APP_BASE_API,
  timeout: 30000,
});

apiV1.interceptors.request.use = () => {};

export default apiV1;
