import { Router } from "express";
import {
    uploadResource,
    getAllResources,
    getResourceById,
    viewResource,
    downloadResource,
    getDownloadHistory,
    bookmarkResource,
    getBookmarks,
    getRecentlyViewed,
    getMyUploads,
    updateResource,
    deleteResource
} from "../controllers/resource.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { optionalVerifyJWT } from "../middlewares/auth.middleware.js";
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
    uploadResource
);

router.route("/")
.get(getAllResources);

router.route("/download-history").get(
    verifyJWT,
    getDownloadHistory
);

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

router.route("/:resourceId").get(getResourceById);

router.route("/:resourceId")
.patch(
    verifyJWT,
    upload.fields([
        {
            name: "thumbnail",
            maxCount: 1
        }
    ]),
    updateResource
)
.delete(
    verifyJWT,
    deleteResource
);

router.route("/:resourceId/view").patch(
    optionalVerifyJWT,
    viewResource
);

router.route("/:resourceId/download").patch(
    verifyJWT,
    downloadResource
);

router.route("/:resourceId/bookmark").patch(
    verifyJWT,
    bookmarkResource
);

export default router