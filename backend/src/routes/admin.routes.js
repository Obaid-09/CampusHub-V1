import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { verifyAdmin } from "../middlewares/admin.middleware.js";
import {
  adminDashboard,
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
  getResourceByIdForAdmin,
  promoteUser,
  deleteUser,
  getReportById,
  getAllReports,
  resolveReport,
  dismissReport,
  getCategories,
  createCategory,
  updateCategory,
  deleteCategory,
  getSettings,
  updateSettings,
} from "../controllers/admin.controller.js";

const router = Router();

router.route("/dashboard").get(verifyJWT, verifyAdmin, adminDashboard);

// User Management
router.route("/users").get(verifyJWT, verifyAdmin, getAllUsers);
router.route("/users/:userId").get(verifyJWT, verifyAdmin, getUserById);
router.delete("/users/:userId", verifyJWT, verifyAdmin, deleteUser);
router.patch("/users/:userId/role", verifyJWT, verifyAdmin, promoteUser);

// Resource Management
router
  .route("/resources/pending")
  .get(verifyJWT, verifyAdmin, getPendingResources);

router
  .route("/resources/deleted")
  .get(verifyJWT, verifyAdmin, getDeletedResources);

router
  .route("/resources/:resourceId/approve")
  .patch(verifyJWT, verifyAdmin, approveResource);

router
  .route("/resources/:resourceId/reject")
  .patch(verifyJWT, verifyAdmin, rejectResource);

router.route("/resources").get(verifyJWT, verifyAdmin, getAllResourcesForAdmin);

router
  .route("/resources/:resourceId")
  .get(verifyJWT, verifyAdmin, getResourceByIdForAdmin);

router
  .route("/resources/:resourceId")
  .delete(verifyJWT, verifyAdmin, deleteAnyResource);

router
  .route("/resources/:resourceId/restore")
  .patch(verifyJWT, verifyAdmin, restoreResource);

router.route("/analytics").get(verifyJWT, verifyAdmin, getAnalytics);
router.route("/reports").get(verifyJWT, verifyAdmin, getAllReports);
router.route("/reports/:reportId").get(verifyJWT, verifyAdmin, getReportById);

router
  .route("/reports/:reportId/resolve")
  .patch(verifyJWT, verifyAdmin, resolveReport);

router
  .route("/reports/:reportId/dismiss")
  .patch(verifyJWT, verifyAdmin, dismissReport);

// Categories
router
  .route("/categories")
  .get(verifyJWT, verifyAdmin, getCategories)
  .post(verifyJWT, verifyAdmin, createCategory);

router
  .route("/categories/:categoryId")
  .patch(updateCategory)
  .delete(deleteCategory);

router
  .route("/settings")
  .get(verifyJWT, verifyAdmin, getSettings)
  .patch(verifyJWT, verifyAdmin, updateSettings);
  
export default router;
