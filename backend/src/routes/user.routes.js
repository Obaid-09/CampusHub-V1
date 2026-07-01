import { Router } from "express";
import {
    registerUser,
    loginUser,
    logoutUser,
    requestAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    updateAccountDetails,
    updateUserAvatar,
    getBookmarks,
    getRecentlyViewed,
    getMyUploads,
    getDownloadHistory,
    getUserProfile
} from "../controllers/user.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
const router = Router();
console.log("User routes loaded");

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  registerUser
);
router.route("/login").post(loginUser);
router.route("/refresh-token").post(requestAccessToken);

// Secured Routes
router.route("/logout").post(
    verifyJWT,
    logoutUser
);

router.route("/current-user").get(
    verifyJWT,
    getCurrentUser
);

router.route("/change-password").patch(
    verifyJWT,
    changeCurrentPassword
);

router.route("/update-profile").patch(
    verifyJWT,
    updateAccountDetails
);

router.route("/update-avatar").patch(
    verifyJWT,
    upload.single("avatar"),
    updateUserAvatar
);

/* ---------- User Features ---------- */
router.route("/bookmarks").get(
    verifyJWT,
    getBookmarks
);

router.route("/recently-viewed").get(
    verifyJWT,
    getRecentlyViewed
);

router.route("/my-uploads").get(
    verifyJWT,
    getMyUploads
);

router.route("/download-history").get(
    verifyJWT,
    getDownloadHistory
);

router.route("/:username").get(verifyJWT, getUserProfile);

export default router;