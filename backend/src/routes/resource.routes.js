import { Router } from "express";
import {
    uploadResource,
    getAllResources
} from "../controllers/resource.controllers.js";
import { upload } from "../middlewares/multer.middleware.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";
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

export default router