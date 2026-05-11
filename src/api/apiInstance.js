import axios from "axios";

export const apiInstance = axios.create({
  // baseURL: "https://myhappinessexpress.grubdev.top/api",
  baseURL: "http://192.168.88.12:5002/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
let accessToken = "";
export const setAuthToken = (gu) => {
  accessToken = gu;
};

apiInstance.interceptors.request.use((config) => {
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

apiInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    // console.log(error);
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      !originalRequest.url.includes("/refresh")
    ) {
      originalRequest._retry = true;

      try {
        const res = await apiInstance.post("/refresh");
        const newToken = res.data.accessToken;
        setAuthToken(newToken);

        originalRequest.headers.Authorization = `Bearer ${newToken}`;
        return apiInstance(originalRequest);
      } catch (tokenError) {
        setAuthToken(null);
        // window.location.href = "/guest/login";
        console.log(
          "refresh failed with comment window location href interceptor",
        );
        return Promise.reject(tokenError);
      }
    }
    return Promise.reject(error);
  },
);
