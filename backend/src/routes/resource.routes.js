import { Router } from "express";
import {
    uploadResource,
    getAllResources,
    getResourceById,
    viewResource,
    downloadResource,
    // getDownloadHistory,
    bookmarkResource,
    // getBookmarks,
    // getRecentlyViewed,
    // getMyUploads,
    updateResource,
    deleteResource
} from "../controllers/resource.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { optionalVerifyJWT } from "../middlewares/auth.middleware.js";
import { getResourcesValidator, resourceIdValidator, uploadResourceValidator, bookmarkResourceValidator, deleteResourceValidator, downloadResourceValidator, getResourceByIdValidator, updateResourceValidator, viewResourceValidator } from "../validators/resource.validators.js";
import { validate } from "../middlewares/validate.middleware.js";
const router = Router();

console.log("Resource routes loaded");

router.route("/upload").post(
    verifyJWT,
    upload.fields([
        {
            name: "pdf",
            maxCount: 1
        },
        {
            name: "thumbnail",
            maxCount: 1
        }
    ]),
    uploadResourceValidator,
    validate,
    uploadResource
);

router.route("/")
.get(
    getResourcesValidator,
    validate,
    getAllResources
);

// router.route("/download-history").get(
//     verifyJWT,
//     getDownloadHistory
// );

// router.route("/bookmarks").get(
//     verifyJWT,
//     getBookmarks
// );

// router.route("/recently-viewed").get(
//     verifyJWT,
//     getRecentlyViewed
// );

// router.route("/my-uploads").get(
//     verifyJWT,
//     getMyUploads
// );

router.route("/:resourceId").get(
    getResourceByIdValidator,
    validate,
    getResourceById
);

router.route("/:resourceId")
.patch(
    verifyJWT,
    upload.fields([
        {
            name: "thumbnail",
            maxCount: 1
        }
    ]),
    resourceIdValidator,
    updateResourceValidator,
    validate,
    updateResource
)
.delete(
    verifyJWT,
    deleteResourceValidator,
    validate,
    deleteResource
);

router.route("/:resourceId/view").patch(
    viewResourceValidator,
    validate,
    optionalVerifyJWT,
    viewResource
);

router.route("/:resourceId/download").patch(
    verifyJWT,
    downloadResourceValidator,
    validate,
    downloadResource
);

router.route("/:resourceId/bookmark").patch(
    verifyJWT,
    bookmarkResourceValidator,
    validate,
    bookmarkResource
);

export default router