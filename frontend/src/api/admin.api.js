import axiosInstance from "./axios";

export const adminAPI = {

    getDashboard: () =>
        axiosInstance.get(
            "/admin/dashboard"
        ),

    getAllUsers: (params) =>
        axiosInstance.get(
            "/admin/users",
            {
                params,
            }
        ),

    getUserById: (userId) =>
        axiosInstance.get(
            `/admin/users/${userId}`
        ),

    getPendingResources: () =>
        axiosInstance.get(
            "/admin/resources/pending"
        ),

    approveResource: (resourceId) =>
        axiosInstance.patch(
            `/admin/resources/${resourceId}/approve`
        ),

    rejectResource: (resourceId) =>
        axiosInstance.patch(
            `/admin/resources/${resourceId}/reject`
        ),

    getAllResources: (params) =>
        axiosInstance.get(
            "/admin/resources",
            {
                params,
            }
        ),

    deleteResource: (resourceId) =>
        axiosInstance.delete(
            `/admin/resources/${resourceId}`
        ),

    restoreResource: (resourceId) =>
        axiosInstance.patch(
            `/admin/resources/${resourceId}/restore`
        ),

    getDeletedResources: () =>
        axiosInstance.get(
            "/admin/resources/deleted"
        ),

    getAnalytics: () =>
        axiosInstance.get(
            "/admin/analytics"
        ),

};