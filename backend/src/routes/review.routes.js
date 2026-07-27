import { Router } from "express";

import {
  createReview,
  getResourceReviews,
  updateReview,
  deleteReview,
} from "../controllers/review.controller.js";

import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

// Reviews of a resource
router
  .route("/resource/:resourceId")
  .get(getResourceReviews)
  .post(verifyJWT, createReview);

// Single review
router
  .route("/:reviewId")
  .patch(verifyJWT, updateReview)
  .delete(verifyJWT, deleteReview);

export default router;
