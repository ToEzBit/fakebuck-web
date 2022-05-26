import axios from "axios";
import { getAccessToken } from "../services/localStroage";

axios.defaults.baseURL = process.env.REACT_APP_API_ENDPOINT_URL;

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (err) => Promise.reject(err)
);

export default axios;
