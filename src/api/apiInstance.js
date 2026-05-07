import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "http://192.168.88.210:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});
