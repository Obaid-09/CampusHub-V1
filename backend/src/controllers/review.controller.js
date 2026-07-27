import mongoose from "mongoose";

import { Review } from "../models/review.models.js";
import { Resource } from "../models/resource.models.js";

import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const updateResourceRating = async (resourceId) => {
  const stats = await Review.aggregate([
    {
      $match: {
        resource: new mongoose.Types.ObjectId(resourceId),
      },
    },
    {
      $group: {
        _id: "$resource",
        averageRating: {
          $avg: "$rating",
        },
        totalRatings: {
          $sum: 1,
        },
      },
    },
  ]);

  if (stats.length === 0) {
    await Resource.findByIdAndUpdate(resourceId, {
      averageRating: 0,
      totalRatings: 0,
    });

    return;
  }

  await Resource.findByIdAndUpdate(resourceId, {
    averageRating: Number(stats[0].averageRating.toFixed(1)),
    totalRatings: stats[0].totalRatings,
  });
};

const createReview = asyncHandler(async (req, res) => {
  const { resourceId } = req.params;

  const { rating, review } = req.body;

  // Validation
  // ==========================================

  if (!rating) {
    throw new ApiError(400, "Rating is required.");
  }

  if (rating < 1 || rating > 5) {
    throw new ApiError(400, "Rating must be between 1 and 5.");
  }

  // Check Resource
  // ==========================================

  const resource = await Resource.findById(resourceId);

  if (!resource) {
    throw new ApiError(404, "Resource not found.");
  }

  // Prevent Duplicate Review
  // ==========================================

  const existingReview = await Review.findOne({
    resource: resourceId,
    user: req.user._id,
  });

  if (existingReview) {
    throw new ApiError(409, "You have already reviewed this resource.");
  }

  // Create Review
  // ==========================================

  const createdReview = await Review.create({
    resource: resourceId,
    user: req.user._id,
    rating,
    review,
  });

  // Update Resource Rating
  // ==========================================

  await updateResourceRating(resourceId);

  // Populate User
  // ==========================================

  const populatedReview = await Review.findById(createdReview._id).populate(
    "user",
    "fullname username avatar"
  );

  // Response
  // ==========================================

  return res
    .status(201)
    .json(
      new ApiResponse(201, populatedReview, "Review submitted successfully.")
    );
});

const getResourceReviews = asyncHandler(async (req, res) => {
  const { resourceId } = req.params;

  // Check Resource
  // ==========================================

  const resource = await Resource.findById(resourceId).select(
    "averageRating totalRatings"
  );

  if (!resource) {
    throw new ApiError(404, "Resource not found.");
  }

  // Fetch Reviews
  // ==========================================

  const reviews = await Review.find({
    resource: resourceId,
  })
    .populate("user", "fullname username avatar")
    .sort({
      createdAt: -1,
    })
    .lean();

  // Response
  // ==========================================

  return res.status(200).json(
    new ApiResponse(
      200,
      {
        averageRating: resource.averageRating,
        totalRatings: resource.totalRatings,
        reviews,
      },
      "Reviews fetched successfully."
    )
  );
});

const updateReview = asyncHandler(async (req, res) => {
  const { reviewId } = req.params;

  const { rating, review } = req.body;

  // Validation
  // ==========================================

  if (!rating) {
    throw new ApiError(400, "Rating is required.");
  }

  if (rating < 1 || rating > 5) {
    throw new ApiError(400, "Rating must be between 1 and 5.");
  }

  // Fetch Review
  // ==========================================

  const existingReview = await Review.findById(reviewId);

  if (!existingReview) {
    throw new ApiError(404, "Review not found.");
  }

  // Authorization
  // ==========================================

  if (existingReview.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to update this review.");
  }

  // Update Review
  // ==========================================

  existingReview.rating = rating;
  existingReview.review = review ?? "";

  await existingReview.save();

  // Update Resource Rating
  // ==========================================

  await updateResourceRating(existingReview.resource);

  // Populate User
  // ==========================================

  const updatedReview = await Review.findById(reviewId).populate(
    "user",
    "fullname username avatar"
  );

  // Response
  // ==========================================

  return res
    .status(200)
    .json(new ApiResponse(200, updatedReview, "Review updated successfully."));
});

const deleteReview = asyncHandler(async (req, res) => {
  const { reviewId } = req.params;

  // Fetch Review
  // ==========================================

  const review = await Review.findById(reviewId);

  if (!review) {
    throw new ApiError(404, "Review not found.");
  }

  // Authorization
  // ==========================================

  if (review.user.toString() !== req.user._id.toString()) {
    throw new ApiError(403, "You are not authorized to delete this review.");
  }

  // Store Resource Id
  // ==========================================

  const resourceId = review.resource;

  // Delete Review
  // ==========================================

  await Review.findByIdAndDelete(reviewId);

  // Update Resource Rating
  // ==========================================

  await updateResourceRating(resourceId);

  // Response
  // ==========================================

  return res
    .status(200)
    .json(new ApiResponse(200, {}, "Review deleted successfully."));
});

export {
  createReview,
  getResourceReviews,
  updateReview,
  deleteReview,
};