import axiosInstance from "./axios";

export const adminAPI = {
  getDashboard: () => axiosInstance.get("/admin/dashboard"),

  getAllUsers: (params) =>
    axiosInstance.get("/admin/users", {
      params,
    }),

  getUserById: (userId) => axiosInstance.get(`/admin/users/${userId}`),

  getPendingResources: () => axiosInstance.get("/admin/resources/pending"),

  approveResource: (resourceId) =>
    axiosInstance.patch(`/admin/resources/${resourceId}/approve`),

  rejectResource: (resourceId) =>
    axiosInstance.patch(`/admin/resources/${resourceId}/reject`),

  getAllResources: (params) =>
    axiosInstance.get("/admin/resources", {
      params,
    }),

  getResourceById: (resourceId) =>
    axiosInstance.get(`/admin/resources/${resourceId}`),
  deleteResource: (resourceId) =>
    axiosInstance.delete(`/admin/resources/${resourceId}`),

  restoreResource: (resourceId) =>
    axiosInstance.patch(`/admin/resources/${resourceId}/restore`),

  getDeletedResources: () => axiosInstance.get("/admin/resources/deleted"),

  // Analytics
  getAnalytics() {
    return axiosInstance.get("/admin/analytics");
  },

  promoteUser(userId, role) {
    return axiosInstance.patch(`/admin/users/${userId}/role`, {
      role,
    });
  },

  deleteUser(userId) {
    return axiosInstance.delete(`/admin/users/${userId}`);
  },

  // Reports
  getAllReports(params) {
    return axiosInstance.get("/admin/reports", { params });
  },

  getReportById(reportId) {
    return axiosInstance.get(`/admin/reports/${reportId}`);
  },

  resolveReport(reportId, adminNotes) {
    return axiosInstance.patch(`/admin/reports/${reportId}/resolve`, {
      adminNotes,
    });
  },

  dismissReport(reportId, adminNotes) {
    return axiosInstance.patch(`/admin/reports/${reportId}/dismiss`, {
      adminNotes,
    });
  },
};

// import api from "./axios";

// export const getDashboard=()=>
//     api.get("/admin/dashboard");

// export const approveResource=(id)=>
//     api.patch(`/admin/resources/${id}/approve`);

// export const rejectResource=(id,data)=>
//     api.patch(
//         `/admin/resources/${id}/reject`,
//         data
//     );

// export const getUsers=()=>
//     api.get("/admin/users");

// export const suspendUser=(id)=>
//     api.patch(`/admin/users/${id}/suspend`);

// import axiosInstance from "./axios";

// export const adminAPI = {

//     getDashboard: () =>

//         axiosInstance.get(

//             "/admin/dashboard"

//         ),

//     getAllUsers: (params) =>

//         axiosInstance.get(

//             "/admin/users",

//             {

//                 params,

//             }

//         ),

//     getUserById: (userId) =>

//         axiosInstance.get(

//             `/admin/users/${userId}`

//         ),

//     getPendingResources: () =>

//         axiosInstance.get(

//             "/admin/resources/pending"

//         ),

//     approveResource: (resourceId) =>

//         axiosInstance.patch(

//             `/admin/resources/${resourceId}/approve`

//         ),

//     rejectResource: (resourceId) =>

//         axiosInstance.patch(

//             `/admin/resources/${resourceId}/reject`

//         ),

//     getAllResources: (params) =>

//         axiosInstance.get(

//             "/admin/resources",

//             {

//                 params,

//             }

//         ),

//     deleteResource: (resourceId) =>

//         axiosInstance.delete(

//             `/admin/resources/${resourceId}`

//         ),

//     restoreResource: (resourceId) =>

//         axiosInstance.patch(

//             `/admin/resources/${resourceId}/restore`

//         ),

//     getDeletedResources: () =>

//         axiosInstance.get(

//             "/admin/resources/deleted"

//         ),

//     getAnalytics: () =>

//         axiosInstance.get(

//             "/admin/analytics"

//         ),

// };

// import axiosInstance from "./axios";

// export const authAPI = {

//     register: (formData) =>

//         axiosInstance.post(

//             "/users/register",

//             formData,

//             {

//                 headers: {

//                     "Content-Type": "multipart/form-data",

//                 },

//             }

//         ),

//     login: (data) =>

//         axiosInstance.post("/users/login", data),

//     logout: () =>

//         axiosInstance.post("/users/logout"),

//     getCurrentUser: () =>

//         axiosInstance.get("/users/current-user"),

//     refreshToken: () =>

//         axiosInstance.post("/users/refresh-token"),

//     changePassword: (data) =>

//         axiosInstance.post(

//             "/users/change-password",

//             data

//         ),

//     updateProfile: (data) =>

//         axiosInstance.patch(

//             "/users/update-account",

//             data

//         ),

//     updateAvatar: (formData) =>

//         axiosInstance.patch(

//             "/users/avatar",

//             formData,

//             {

//                 headers: {

//                     "Content-Type": "multipart/form-data",

//                 },

//             }

//         ),

// };

// import axiosInstance from "./axios";

// export const resourceAPI = {

//     getResources: (params) =>

//         axiosInstance.get(

//             "/resources",

//             {

//                 params,

//             }

//         ),

//     getResourceById: (resourceId) =>

//         axiosInstance.get(

//             `/resources/${resourceId}`

//         ),

//     uploadResource: (formData) =>

//         axiosInstance.post(

//             "/resources/upload",

//             formData,

//             {

//                 headers: {

//                     "Content-Type":

//                         "multipart/form-data",

//                 },

//             }

//         ),

//     updateResource: (

//         resourceId,

//         formData

//     ) =>

//         axiosInstance.patch(

//             `/resources/${resourceId}`,

//             formData,

//             {

//                 headers: {

//                     "Content-Type":

//                         "multipart/form-data",

//                 },

//             }

//         ),

//     deleteResource: (resourceId) =>

//         axiosInstance.delete(

//             `/resources/${resourceId}`

//         ),

//     bookmarkResource: (resourceId) =>

//         axiosInstance.patch(

//             `/resources/${resourceId}/bookmark`

//         ),

//     viewResource: (resourceId) =>

//         axiosInstance.patch(

//             `/resources/${resourceId}/view`

//         ),

//     downloadResource: (resourceId) =>

//         axiosInstance.patch(

//             `/resources/${resourceId}/download`

//         ),

// };

// import axiosInstance from "./axios";

// export const userAPI = {

//     getBookmarks: () =>

//         axiosInstance.get(

//             "/resources/bookmarks"

//         ),

//     getDownloadHistory: () =>

//         axiosInstance.get(

//             "/resources/download-history"

//         ),

//     getRecentlyViewed: () =>

//         axiosInstance.get(

//             "/resources/recently-viewed"

//         ),

//     getMyUploads: () =>

//         axiosInstance.get(

//             "/resources/my-uploads"

//         ),

// };

// Once go through thius code some code is mising ion the code you have provided
