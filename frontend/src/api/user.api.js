import axiosInstance from "./axios";

export const userAPI = {

    getBookmarks: () =>
        axiosInstance.get(
            "/resources/bookmarks"
        ),

    getDownloadHistory: () =>
        axiosInstance.get(
            "/resources/download-history"
        ),

    getRecentlyViewed: () =>
        axiosInstance.get(
            "/resources/recently-viewed"
        ),

    getMyUploads: () =>
        axiosInstance.get(
            "/resources/my-uploads"
        ),

    getProfile: (username) =>
        axiosInstance.get(`/users/${username}`),

};
