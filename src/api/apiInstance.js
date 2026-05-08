import axios from "axios";

export const apiInstance = axios.create({
  baseURL: "https://myhappinessexpress.grubdev.top/api",
  headers: {
    "Content-Type": "application/json",
  },
});
