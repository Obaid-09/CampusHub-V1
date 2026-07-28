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

  // Categories
  getCategories(params = {}) {
    return axiosInstance.get("/admin/categories", {
      params,
    });
  },
  createCategory(data) {
    return axiosInstance.post("/admin/categories", data);
  },
  updateCategory(categoryId, data) {
    return axiosInstance.patch(`/admin/categories/${categoryId}`, data);
  },
  deleteCategory(categoryId) {
    return axiosInstance.delete(`/admin/categories/${categoryId}`);
  },
  getSettings() {
    return axiosInstance.get("/admin/settings");
  },
  updateSettings(data) {
    return axiosInstance.patch("/admin/settings", data);
  },
};
