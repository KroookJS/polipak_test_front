import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/v1/",
});

instance.interceptors.request.use((config) => {
  config.headers = {
    Authorization: "Token b74ffede0fa251a2c446bdf7cfa35e40308139e4",
    "Content-Type": "application/json",
  };

  return config;
});

export default instance;
