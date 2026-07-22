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
        axiosInstance.patch(
            "/users/change-password",
            data
        ),

    updateProfile: (data) =>
        axiosInstance.patch(
            "/users/update-profile",
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

// import api from "./axios";

// export const loginUser = (data) =>
//     api.post("/users/login", data);

// export const registerUser = (data) =>
//     api.post("/users/register", data);

// export const logoutUser = () =>
//     api.post("/users/logout");

// export const refreshToken = () =>
//     api.post("/users/refresh-token");

// export const getCurrentUser = () =>
//     api.get("/users/current-user");