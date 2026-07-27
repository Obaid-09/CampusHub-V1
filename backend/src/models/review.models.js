import mongoose, { Schema } from "mongoose";

const reviewSchema = new Schema(
  {
    resource: {
      type: Schema.Types.ObjectId,
      ref: "Resource",
      required: true,
      index: true,
    },

    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
      index: true,
    },

    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },

    review: {
      type: String,
      trim: true,
      maxlength: 500,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

// One review per user per resource
reviewSchema.index(
  {
    resource: 1,
    user: 1,
  },
  {
    unique: true,
  }
);

export const Review = mongoose.model("Review", reviewSchema);
