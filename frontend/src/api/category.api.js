import axiosInstance from "./axios";

export const categoryAPI = {
  getCategories(params = {}) {
    return axiosInstance.get("/categories", {
      params,
    });
  },
};