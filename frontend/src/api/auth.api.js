import axiosInstance from "./axios";

export const authAPI = {

    register: (formData) =>
        axiosInstance.post(
            "/users/register",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        ),

    login: (data) =>
        axiosInstance.post("/users/login", data),

    logout: () =>
        axiosInstance.post("/users/logout"),

    getCurrentUser: () =>
        axiosInstance.get("/users/current-user"),

    refreshToken: () =>
        axiosInstance.post("/users/refresh-token"),

    changePassword: (data) =>
        axiosInstance.post(
            "/users/change-password",
            data
        ),

    updateProfile: (data) =>
        axiosInstance.patch(
            "/users/update-account",
            data
        ),

    updateAvatar: (formData) =>
        axiosInstance.patch(
            "/users/avatar",
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            }
        ),
};