import axiosInstance from "./axios";

export const profileAPI = {
  getProfile: async () => {
    const response = await axiosInstance.get("/profile");

    return response.data.data;
  },
};
