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

export const me = async () => {
  try {
    const res = await apiInstance.get("/me");
    return res.data;
  } catch (error) {
    throw Error(error.response?.data?.message || "me error frontend", {
      cause: error,
    });
  }
};
export const logoutApi = async () => {
  try {
    const res = await apiInstance.post("/logout");
    return res.data;
  } catch (error) {
    throw Error(error.response?.data?.message || "logout issue", {
      cause: error,
    });
  }
};

export const getAllUser = async () => {
  try {
    const res = await apiInstance.get("/find-all-user");
    return res.data;
  } catch (error) {
    throw Error(error.response?.data?.message || "error deleting a user", {
      cause: error,
    });
  }
};

export const makeAdmin = async (id) => {
  try {
    const res = await apiInstance.post(`/admined/${id}`);
    return res.data;
  } catch (error) {
    throw Error(error.response?.data?.message || "error deleting a user", {
      cause: error,
    });
  }
};
// delete a user
export const deleteUser = async (id) => {
  try {
    const res = await apiInstance.post(`/deleted/${id}`);
    return res.data;
  } catch (error) {
    console.log(error.response?.data?.message);
    throw Error(error.response?.data?.message || "error deleting a user", {
      cause: error,
    });
  }
};

// update a user

export const updateUser = async (id, formData) => {
  try {
    const res = await apiInstance.put(`/updated/${id}`, formData);
    return res.data;
  } catch (error) {
    throw Error(error.response?.data?.message || "error deleting a user", {
      cause: error,
    });
  }
};

// get single user
export const getSingleUser = async (id) => {
  try {
    const res = await apiInstance.get(`/user/${id}`);
    return res.data;
  } catch (error) {
    throw Error(error.response?.data?.message || "error deleting a user", {
      cause: error,
    });
  }
};
