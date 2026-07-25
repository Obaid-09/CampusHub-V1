// import { Router } from "express";
// import { verifyJWT } from "../middlewares/auth.middleware.js";
// import {
//     getDashboardStats,
//     // getRecentActivity,
//     // getTrendingResources,
//     // getRecommendedResources,
//     // getProgress
// } from "../controllers/dashboard.controller.js";

// const router = Router();

// router.use(verifyJWT);

// router.get("/stats", getDashboardStats);
// // router.get("/recent-activity", getRecentActivity);
// // router.get("/trending", getTrendingResources);
// // router.get("/recommended", getRecommendedResources);
// // router.get("/progress", getProgress);

// export default router;

import { Router } from "express";
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { getDashboard } from "../controllers/dashboard.controller.js";

const router = Router();

router.use(verifyJWT);

router.get("/", getDashboard);

export default router;
