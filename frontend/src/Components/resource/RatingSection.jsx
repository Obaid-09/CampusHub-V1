import { useState } from "react";

import ReviewForm from "./ReviewForm";
import ReviewCard from "./ReviewCard";
import useAuth from "../../hooks/useAuth";

import Loader from "../ui/Loader";
import EmptyState from "../ui/EmptyState";
import { Star } from "lucide-react";
import { reviewAPI } from "../../api/review.api";
import { successToast, errorToast } from "../../utils/toast";

const RatingSection = ({
  resourceId,
  reviews = [],
  averageRating = 0,
  totalRatings = 0,
  loading,
  refreshReviews,
}) => {
  const { user } = useAuth();

  const [submitting, setSubmitting] = useState(false);
  const [editingReview, setEditingReview] = useState(null);

  const handleCreateReview = async (data) => {
    try {
      setSubmitting(true);
      await reviewAPI.createReview(resourceId, data);
      successToast("Review submitted successfully.");
      await refreshReviews();
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to submit review.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleUpdateReview = async (data) => {
    try {
      setSubmitting(true);

      await reviewAPI.updateReview(editingReview._id, data);

      successToast("Review updated successfully.");

      setEditingReview(null);

      await refreshReviews();
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to update review.");
    } finally {
      setSubmitting(false);
    }
  };

  const handleDeleteReview = async (review) => {
    const confirmed = window.confirm("Delete this review?");

    if (!confirmed) return;

    try {
      await reviewAPI.deleteReview(review._id);

      successToast("Review deleted successfully.");

      await refreshReviews();
    } catch (error) {
      errorToast(error.response?.data?.message || "Failed to delete review.");
    }
  };

  if (loading) {
    return <Loader text="Loading reviews..." />;
  }

  const hasReviewed = reviews.some((review) => review.user._id === user?._id);
  return (
    <div className="space-y-8">
      {/* Rating Summary */}

      <div
        className="
          bg-white
          rounded-2xl
          shadow-card
          border
          border-gray100
          p-8
        "
      >
        <h2
          className="
            text-3xl
            font-heading
            font-bold
            text-secondary
          "
        >
          Ratings & Reviews
        </h2>

        <div className="mt-6 flex items-center gap-6">
          <span
            className="
              text-5xl
              font-bold
              text-primary
            "
          >
            {Number(averageRating).toFixed(1)}
          </span>

          <div>
            <p className="text-lg font-semibold text-secondary">
              {totalRatings} {totalRatings === 1 ? "Review" : "Reviews"}
            </p>

            <p className="text-gray500">
              Share your experience with this resource.
            </p>
          </div>
        </div>
      </div>

      {/* Review Form */}
      {(!hasReviewed || editingReview) && (
        <ReviewForm
          initialRating={editingReview?.rating || 0}
          initialReview={editingReview?.review || ""}
          loading={submitting}
          submitText={editingReview ? "Update Review" : "Submit Review"}
          onSubmit={editingReview ? handleUpdateReview : handleCreateReview}
        />
      )}
      {/* Reviews */}

      <div className="space-y-6">
        {reviews.length === 0 ? (
          <EmptyState
            title="No reviews yet"
            description="Be the first to review this resource."
          />
        ) : (
          reviews.map((review) => (
            <ReviewCard
              key={review._id}
              review={review}
              currentUser={user}
              onEdit={setEditingReview}
              onDelete={handleDeleteReview}
            />
          ))
        )}

        <div className="flex gap-1 mt-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={22}
              className={
                star <= Math.round(averageRating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray300"
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RatingSection;
