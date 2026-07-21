import axiosInstance from "./axios";

export const getNotifications=()=>
    axiosInstance.get("/notifications");

export const markAsRead=(id)=>
    axiosInstance.patch(`/notifications/${id}`);

export const deleteNotification=(id)=>
    axiosInstance.delete(`/notifications/${id}`);