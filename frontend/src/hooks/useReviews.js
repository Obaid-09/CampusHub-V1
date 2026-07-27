import { useCallback, useEffect, useState } from "react";

import { reviewAPI } from "../api/review.api";

const useReviews = (resourceId) => {
  const [reviews, setReviews] = useState([]);
  const [averageRating, setAverageRating] = useState(0);
  const [totalRatings, setTotalRatings] = useState(0);
  const [loading, setLoading] = useState(true);

  const fetchReviews = useCallback(async () => {
    if (!resourceId) return;

    try {
      setLoading(true);

      const response = await reviewAPI.getReviews(resourceId);
      const data = response.data.data;
      setReviews(data.reviews);
      setAverageRating(data.averageRating);
      setTotalRatings(data.totalRatings);
    } catch (error) {
      console.error("Failed to fetch reviews.", error);
    } finally {
      setLoading(false);
    }
  }, [resourceId]);

  useEffect(() => {
    fetchReviews();
  }, [fetchReviews]);

  return {
    reviews,
    averageRating,
    totalRatings,
    loading,
    refreshReviews: fetchReviews,
  };
};

export default useReviews;
