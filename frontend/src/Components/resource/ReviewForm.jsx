import { useEffect, useState } from "react";
import { Star } from "lucide-react";

import Button from "../ui/Button";
import TextArea from "../ui/TextArea";

const ReviewForm = ({
  initialRating = 0,
  initialReview = "",
  loading = false,
  submitText = "Submit Review",
  onSubmit,
}) => {
  const [rating, setRating] = useState(initialRating);
  const [review, setReview] = useState(initialReview);

  useEffect(() => {
    setRating(initialRating);
    setReview(initialReview);
  }, [initialRating, initialReview]);

  const handleSubmit = () => {
    if (rating === 0) return;

    onSubmit({
      rating,
      review,
    });
  };

  return (
    <div
      className="
        bg-white
        rounded-2xl
        border
        border-gray100
        shadow-card
        p-6
      "
    >
      <h3
        className="
          text-2xl
          font-heading
          font-semibold
          text-secondary
        "
      >
        Write a Review
      </h3>

      <p className="mt-2 text-gray500">
        Share your experience with this resource.
      </p>

      {/* Rating */}

      <div className="mt-6 flex gap-2">
        {[1, 2, 3, 4, 5].map((value) => (
          <button key={value} type="button" onClick={() => setRating(value)}>
            <Star
              size={32}
              className={`transition-colors ${
                value <= rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray300"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Review */}

      <div className="mt-6">
        <TextArea
          rows={5}
          placeholder="Write your review..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
        />
      </div>

      <div className="flex justify-end mt-6">
        <Button onClick={handleSubmit} disabled={loading || rating === 0}>
          {loading ? "Submitting..." : submitText}
        </Button>
      </div>
    </div>
  );
};

export default ReviewForm;
