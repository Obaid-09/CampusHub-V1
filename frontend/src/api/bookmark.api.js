import axiosInstance from "./axios";

export const getBookmarks=()=>
    axiosInstance.get("/bookmarks");

export const addBookmark=(id)=>
    axiosInstance.post(`/bookmarks/${id}`);

export const removeBookmark=(id)=>
    axiosInstance.delete(`/bookmarks/${id}`);