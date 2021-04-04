import axios from "axios";
import { ACCESS_TOKEN, API_BASE_URL } from "../constants";

axios.defaults.baseURL = API_BASE_URL;
axios.defaults.headers.post["Content-Type"] = "application/json";

axios.interceptors.request.use(
  (config) => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem(ACCESS_TOKEN);
      console.log(token !== undefined);
      if (token !== null && typeof token !== "undefined") {
        console.log("lan 2");
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  (error) => Promise.reject(error),
);

axios.interceptors.response.use(
  (response) => {
    console.log(response.status);
    // console.log(response);
    // Edit response config
    return response.data;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  },
);

export default axios;
