import axiosInstance from "./axios";

export const reviewAPI = {
  // Get Reviews

  getReviews(resourceId) {
    return axiosInstance.get(`/reviews/resource/${resourceId}`);
  },

  // Create Review

  createReview(resourceId, data) {
    return axiosInstance.post(`/reviews/resource/${resourceId}`, data);
  },

  // Update Review

  updateReview(reviewId, data) {
    return axiosInstance.patch(`/reviews/${reviewId}`, data);
  },

  // Delete Review

  deleteReview(reviewId) {
    return axiosInstance.delete(`/reviews/${reviewId}`);
  },
};
