import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";
import { adminDashboard, 
    getAllUsers,
    getUserById,
    getPendingResources,
    approveResource,
    rejectResource,
    getAllResourcesForAdmin,
    deleteAnyResource,
    restoreResource,
    getDeletedResources,
    getAnalytics,
    getResourceByIdForAdmin
 } from "../controllers/admin.controller.js";

const router = Router();
console.log("Resource routes loaded");


router.route("/dashboard").get(
    verifyJWT,
    verifyAdmin,
    adminDashboard
)


// User Management
router.route("/users").get(
    verifyJWT,
    verifyAdmin,
    getAllUsers
);

router.route("/users/:userId").get(
    verifyJWT,
    verifyAdmin,
    getUserById
);


// Resource Management
router.route("/resources/pending").get(
    verifyJWT,
    verifyAdmin,
    getPendingResources
);

router.route("/resources/deleted").get(
    verifyJWT,
    verifyAdmin,
    getDeletedResources
);

router.route("/resources/:resourceId/approve").patch(
    verifyJWT,
    verifyAdmin,
    approveResource
);

router.route("/resources/:resourceId/reject").patch(
    verifyJWT,
    verifyAdmin,
    rejectResource
);

router.route("/resources").get(
    verifyJWT,
    verifyAdmin,
    getAllResourcesForAdmin
);

router.route("/resources/:resourceId").get(
    verifyJWT,
    verifyAdmin,
    getResourceByIdForAdmin
);

router.route("/resources/:resourceId")
.delete(
    verifyJWT,
    verifyAdmin,
    deleteAnyResource
);

router.route("/resources/:resourceId/restore")
.patch(
    verifyJWT,
    verifyAdmin,
    restoreResource
);


router.route("/analytics").get(
    verifyJWT,
    verifyAdmin,
    getAnalytics
);

export default router;