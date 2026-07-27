import { Star, Pencil, Trash2 } from "lucide-react";
import Button from "../ui/Button";

const ReviewCard = ({ review, currentUser, onEdit, onDelete }) => {
  const isOwner = currentUser && review.user?._id === currentUser._id;

  return (
    <div
      className="
        bg-white
        border
        border-gray100
        rounded-2xl
        shadow-card
        p-6
      "
    >
      {/* Header */}

      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4">
          <img
            src={review.user?.avatar || "/default-avatar.png"}
            alt={review.user?.fullname || "User"}
            className="
              w-12
              h-12
              rounded-full
              object-cover
              border
            "
          />

          <div>
            <h3 className="font-semibold text-secondary">
              {review.user?.fullname}
            </h3>

            <p className="text-sm text-gray500">
              {new Date(review.createdAt).toLocaleDateString("en-US", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
          </div>
        </div>

        {isOwner && (
          <div className="flex gap-2">
            <Button size="sm" variant="outline" onClick={() => onEdit(review)}>
              <Pencil size={16} />
            </Button>

            <Button size="sm" variant="danger" onClick={() => onDelete(review)}>
              <Trash2 size={16} />
            </Button>
          </div>
        )}
      </div>

      {/* Rating */}

      <div className="flex gap-1 mt-5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={18}
            className={
              star <= review.rating
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray300"
            }
          />
        ))}
      </div>

      {/* Review */}

      <p
        className="
          mt-4
          text-gray700
          leading-relaxed
          whitespace-pre-wrap
        "
      >
        {review.review}
      </p>

      {/* Edited Badge */}

      {review.updatedAt !== review.createdAt && (
        <p className="mt-4 text-xs text-gray400 italic">Edited</p>
      )}
    </div>
  );
};

export default ReviewCard;
