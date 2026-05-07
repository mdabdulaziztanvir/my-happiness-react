import { apiInstance } from "../api/apiInstance";

export const login = async (userData) => {
  try {
    const res = await apiInstance.post("/login", userData);
    return res.data;
  } catch (error) {
    throw Error(error.response?.data?.message || "error from login axios", {
      cause: error,
    });
    // throw error.response?.data?.message || error.message;
  }
};
export const signUp = async (userData) => {
  try {
    const res = await apiInstance.post("/create-user", userData);
    return res.data;
  } catch (error) {
    throw Error(error.response?.data?.message || "error from signup axios", {
      cause: error,
    });
  }
};
