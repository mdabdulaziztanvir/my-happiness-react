import { apiInstance } from "../api/apiInstance";

export const fileUpload = async (file, setProgress) => {
  const formData = new FormData();

  formData.append("file", file);

  const res = await apiInstance.post("/upload", formData, {
    headers: {
      "Content-Type": "multipart/form-data",
    },

    onUploadProgress: (progressEvent) => {
      const percent = Math.round(
        (progressEvent.loaded * 100) / progressEvent.total,
      );

      setProgress(percent);
    },
  });

  return res.data;
};
