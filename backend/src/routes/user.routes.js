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
import { validate } from "../middlewares/validate.middleware.js";
import { registerValidator, loginValidator, changePasswordValidator, updateProfileValidator } from "../validators/user.validators.js";
import { loginLimiter } from "../middlewares/rateLimit.middleware.js";

const router = Router();
console.log("User routes loaded");

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        }
    ]),
    registerValidator,
    validate,
    registerUser
);

router.route("/login").post(
    loginLimiter,
    loginValidator,
    validate,
    loginUser
);
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
    changePasswordValidator,
    validate,
    changeCurrentPassword
);

router.route("/update-profile").patch(
    verifyJWT,
    updateProfileValidator,
    validate,
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

router.route("/:username").get(getUserProfile);

export default router;
